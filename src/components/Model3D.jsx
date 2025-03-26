import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PropTypes from 'prop-types';

const Model3D = ({ 
  boardColor = "#FF8064", 
  sailColor = "#007aff", 
  finColor = "#013264", 
  mastColor = "#FFFFFF",
  boomColor = "#333333",
  width = 400,
  height = 400
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);
  
  // État pour forcer une mise à jour du modèle lorsque les couleurs changent
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  
  // Fonction pour appliquer les couleurs au modèle
  const applyColors = () => {
    if (!modelRef.current) return;
    
    console.log("Application des couleurs au modèle 3D:");
    console.log("Couleur planche:", boardColor);
    console.log("Couleur voile:", sailColor);
    console.log("Couleur mât:", mastColor);
    console.log("Couleur dérive:", finColor);
    console.log("Couleur wishbone:", boomColor);
    
    let boardParts = 0;
    let sailParts = 0;
    let mastParts = 0;
    let finParts = 0;
    let boomParts = 0;
    
    modelRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const name = child.name.toLowerCase();
        
        // Détection des parties par nom
        const isBoardPart = name.includes('board') || name.includes('planche') || 
                          name.includes('hull') || name.includes('body') || 
                          name.includes('deck') || name.includes('base');
        
        const isSailPart = name.includes('sail') || name.includes('voile') || 
                         name.includes('fabric') || name.includes('canvas') ||
                         name.includes('cloth');
        
        const isFinPart = name.includes('fin') || name.includes('deriv') || 
                        name.includes('ailer') || name.includes('keel') || 
                        name.includes('skeg');
        
        const isMastPart = name.includes('mast') || name.includes('mat') || 
                         name.includes('pole') || name.includes('staff');
        
        const isBoomPart = name.includes('boom') || name.includes('wish') || 
                         name.includes('bar') || name.includes('handle');
        
        // Si détection par nom, appliquer la couleur correspondante
        if (isBoardPart) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(boardColor),
            metalness: 0.1,
            roughness: 0.5,
            clearcoat: 0.8,
            clearcoatRoughness: 0.2,
            reflectivity: 0.5
          });
          boardParts++;
        } 
        else if (isSailPart) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(sailColor),
            metalness: 0.1,
            roughness: 0.3,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.92,
            transmission: 0.05
          });
          sailParts++;
        } 
        else if (isFinPart) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(finColor),
            metalness: 0.1,
            roughness: 0.4,
            clearcoat: 0.6
          });
          finParts++;
        } 
        else if (isMastPart) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(mastColor),
            metalness: 0.3,
            roughness: 0.2,
            clearcoat: 1.0
          });
          mastParts++;
        } 
        else if (isBoomPart) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(boomColor),
            metalness: 0.3,
            roughness: 0.3
          });
          boomParts++;
        } 
        else {
          // Si le nom n'est pas reconnu, on tente une détection par forme/géométrie
          const geometry = child.geometry;
          
          // Application par défaut de couleurs en fonction de la géométrie
          if (geometry) {
            const size = new THREE.Vector3();
            const box = new THREE.Box3().setFromObject(child);
            box.getSize(size);
            
            const height = size.y;
            const width = size.x;
            const depth = size.z;
            
            // Tentative d'identification par forme
            if (height > 2 && width < 0.5 && depth < 0.5) {
              // Longue et fine - probablement un mât
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(mastColor),
                metalness: 0.3,
                roughness: 0.2,
                clearcoat: 1.0
              });
              mastParts++;
            } 
            else if (width > 2 && height < 0.5) {
              // Large et plate - probablement une planche
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(boardColor),
                metalness: 0.1,
                roughness: 0.5,
                clearcoat: 0.8,
                clearcoatRoughness: 0.2,
                reflectivity: 0.5
              });
              boardParts++;
            }
            else if (width > 1 && height > 1 && depth < 0.2) {
              // Large surface fine - probablement une voile
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(sailColor),
                metalness: 0.1,
                roughness: 0.3,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.92,
                transmission: 0.05
              });
              sailParts++;
            }
            else if (width < 1 && height < 1 && depth < 0.2) {
              // Petite pièce - probablement une dérive
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(finColor),
                metalness: 0.1,
                roughness: 0.4,
                clearcoat: 0.6
              });
              finParts++;
            }
            else {
              // Si tout échoue, appliquer une couleur par défaut
              child.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(boomColor),
                metalness: 0.3,
                roughness: 0.3
              });
              boomParts++;
            }
          }
        }
        
        // Activer les ombres pour tous les meshes
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    
    console.log("Statistiques détection:");
    console.log("Parties planche:", boardParts);
    console.log("Parties voile:", sailParts);
    console.log("Parties mât:", mastParts);
    console.log("Parties dérive:", finParts);
    console.log("Parties wishbone:", boomParts);
  };
  
  // Effet pour initialiser la scène 3D
  useEffect(() => {
    // Configuration de la scène
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0xf8f9fa);
    
    cameraRef.current = new THREE.PerspectiveCamera(50, width/height, 0.1, 1000);
    
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    rendererRef.current.setSize(width, height);
    rendererRef.current.shadowMap.enabled = true;
    rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Désactiver les informations par défaut qui apparaissent en bas
    rendererRef.current.domElement.style.position = 'absolute';
    
    // Ajouter un meilleur rendu avec des effets de réflexion
    rendererRef.current.physicallyCorrectLights = true;
    rendererRef.current.outputEncoding = THREE.sRGBEncoding;
    rendererRef.current.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current.toneMappingExposure = 1.0;
    
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(rendererRef.current.domElement);
      
      // Supprimer tout texte d'information ajouté par Three.js
      const infoElements = mountRef.current.querySelectorAll('.view-instructions, [style*="position: absolute"][style*="bottom"]');
      if (infoElements) {
        infoElements.forEach(el => el.style.display = 'none');
      }
    } else {
      console.error("Le référent de montage est null");
      return;
    }
    
    // Ajout des contrôles orbitaux
    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.minDistance = 1;
    controlsRef.current.maxDistance = 25;
    controlsRef.current.enablePan = true;
    controlsRef.current.autoRotate = false;
    
    // Éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    sceneRef.current.add(ambientLight);
    
    // Lumière principale
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
    mainLight.position.set(5, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 50;
    mainLight.shadow.camera.left = -10;
    mainLight.shadow.camera.right = 10;
    mainLight.shadow.camera.top = 10;
    mainLight.shadow.camera.bottom = -10;
    mainLight.shadow.bias = -0.0001;
    sceneRef.current.add(mainLight);
    
    // Lumière de remplissage
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(-5, 5, -5);
    fillLight.castShadow = false;
    sceneRef.current.add(fillLight);
    
    // Lumière de rim pour mettre en valeur les contours
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, 5, -10);
    rimLight.castShadow = false;
    sceneRef.current.add(rimLight);
    
    // Position initiale de la caméra pour voir sous et sur les côtés
    cameraRef.current.position.set(5, 5, 15);
    cameraRef.current.lookAt(0, 0, 0);
    
    // Sol avec texture et aspect plus moderne
    const planeGeometry = new THREE.PlaneGeometry(25, 25);
    const planeMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0xf0f0f0,
      metalness: 0.2,
      roughness: 0.6,
      clearcoat: 0.1,
      reflectivity: 0.1
    });
    
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -3;
    plane.receiveShadow = true;
    sceneRef.current.add(plane);
    
    // Grille de sol pour référence visuelle
    const gridHelper = new THREE.GridHelper(25, 25, 0xaaaaaa, 0xdddddd);
    gridHelper.position.y = -2.99;
    sceneRef.current.add(gridHelper);
    
    // Tentative de chargement du modèle OBJ
    const loader = new OBJLoader();
    
    // Chargement du modèle
    const loadModel = async () => {
      try {
        console.log("Tentative de chargement du modèle OBJ...");
        const modelUrl = window.location.origin + '/Inflatable_Windsurf_SUP_with_Sail_Blue_obj_base.obj';
        
        // Promisifier le chargement
        const loadPromise = new Promise((resolve, reject) => {
          loader.load(
            modelUrl,
            resolve,
            (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% chargé'),
            reject
          );
        });
        
        try {
          const object = await loadPromise;
          console.log("Modèle chargé avec succès");
          
          if (modelRef.current) {
            // Si un modèle existe déjà, le supprimer
            sceneRef.current.remove(modelRef.current);
          }
          
          // Sauvegarde de la référence du modèle
          modelRef.current = object;
          
          // Ajustement de la taille et position du modèle
          object.scale.set(0.025, 0.025, 0.025);
          object.position.set(0, 0, 0);
          
          // Rotation pour voir la planche de côté et légèrement inclinée
          object.rotation.x = -Math.PI / 2;
          object.rotation.z = Math.PI / 6;
          
          // Appliquer les couleurs
          applyColors();
          
          // Ajouter à la scène
          sceneRef.current.add(object);
          
          // Centrer la caméra sur le modèle
          const box = new THREE.Box3().setFromObject(object);
          const center = box.getCenter(new THREE.Vector3());
          controlsRef.current.target.copy(center);
          cameraRef.current.lookAt(center);
          
        } catch (error) {
          console.error('Erreur lors du chargement du modèle:', error);
          createBackupModel();
        }
      } catch (error) {
        console.error('Erreur lors de la configuration du chargeur:', error);
        createBackupModel();
      }
    };
    
    // Création d'un modèle de secours en cas d'échec du chargement
    const createBackupModel = () => {
      console.log("Création d'un modèle de secours");
      const group = new THREE.Group();
      
      // Planche - board
      const boardGeometry = new THREE.BoxGeometry(2, 0.2, 6);
      const boardMaterial = new THREE.MeshPhysicalMaterial({
        color: boardColor,
        metalness: 0.1,
        roughness: 0.5,
        clearcoat: 0.8
      });
      const board = new THREE.Mesh(boardGeometry, boardMaterial);
      board.rotation.x = -Math.PI / 2;
      board.castShadow = true;
      board.receiveShadow = true;
      group.add(board);
      
      // Mât - mast
      const mastGeometry = new THREE.CylinderGeometry(0.05, 0.05, 4, 16);
      const mastMaterial = new THREE.MeshPhysicalMaterial({
        color: mastColor,
        metalness: 0.3,
        roughness: 0.2
      });
      const mast = new THREE.Mesh(mastGeometry, mastMaterial);
      mast.position.set(0, 0, 1.5);
      mast.rotation.x = -Math.PI / 2;
      mast.castShadow = true;
      group.add(mast);
      
      // Voile - sail
      const sailGeometry = new THREE.PlaneGeometry(3, 2.5);
      const sailMaterial = new THREE.MeshPhysicalMaterial({
        color: sailColor,
        metalness: 0.1,
        roughness: 0.3,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      });
      const sail = new THREE.Mesh(sailGeometry, sailMaterial);
      sail.position.set(0, 0, 2.5);
      sail.rotation.y = Math.PI / 2;
      sail.castShadow = true;
      group.add(sail);
      
      // Dérive - fin
      const finGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.4);
      const finMaterial = new THREE.MeshPhysicalMaterial({
        color: finColor,
        metalness: 0.1,
        roughness: 0.4
      });
      const fin = new THREE.Mesh(finGeometry, finMaterial);
      fin.position.set(0, -0.2, -1.5);
      fin.rotation.x = -Math.PI / 2;
      fin.castShadow = true;
      group.add(fin);
      
      // Wishbone - boom
      const boomGeometry = new THREE.CylinderGeometry(0.03, 0.03, 2, 16);
      const boomMaterial = new THREE.MeshPhysicalMaterial({
        color: boomColor,
        metalness: 0.3,
        roughness: 0.3
      });
      const boom = new THREE.Mesh(boomGeometry, boomMaterial);
      boom.position.set(0, 0, 1.5);
      boom.rotation.z = Math.PI / 2;
      boom.castShadow = true;
      group.add(boom);
      
      // Sauvegarder et ajouter à la scène
      modelRef.current = group;
      sceneRef.current.add(group);
    };
    
    loadModel();
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();
    
    // Gestion du redimensionnement
    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        const containerWidth = mountRef.current.clientWidth;
        const containerHeight = mountRef.current.clientHeight;
        cameraRef.current.aspect = containerWidth / containerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(containerWidth, containerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && rendererRef.current && rendererRef.current.domElement) {
        try {
          mountRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          console.error("Erreur lors du nettoyage:", e);
        }
      }
      
      if (rendererRef.current) rendererRef.current.dispose();
      if (controlsRef.current) controlsRef.current.dispose();
      
      // Supprimer les géométries et matériaux pour éviter les fuites mémoire
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
    };
  }, [width, height]); // Dépendances réduites pour l'initialisation
  
  // Effet distinct pour mettre à jour les couleurs lorsqu'elles changent
  useEffect(() => {
    if (modelRef.current) {
      applyColors();
      // Force une mise à jour de l'état pour déclencher un nouveau rendu
      setLastUpdateTime(Date.now());
    }
  }, [boardColor, sailColor, finColor, mastColor, boomColor]); // Dépendances pour les mises à jour de couleur
  
  return (
    <div style={{ 
      width: "100%", 
      height: "100%",
      position: "relative",
      overflow: "hidden"
    }}>
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      />
    </div>
  );
};

Model3D.propTypes = {
  boardColor: PropTypes.string,
  sailColor: PropTypes.string,
  finColor: PropTypes.string,
  mastColor: PropTypes.string,
  boomColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Model3D; 