import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Composant pour créer les contrôles de caméra
const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controlsRef.current = controls;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return null;
};

// Composant pour créer la planche de surf 3D
const Surfboard = ({ color = '#FF8064' }) => {
  const boardRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Animation de la planche
  useFrame((state) => {
    if (boardRef.current) {
      const time = state.clock.getElapsedTime();
      boardRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      boardRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={boardRef}>
      {/* Corps de la planche */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.5, 2.4, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? '#002855' : color} 
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      
      {/* Aileron central */}
      <mesh position={[0, -1.1, 0.1]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.05]} />
        <meshStandardMaterial color="#002855" roughness={0.5} />
      </mesh>
      
      {/* Ailerons latéraux */}
      <mesh position={[0.15, -1.05, 0.1]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.05]} />
        <meshStandardMaterial color="#002855" roughness={0.5} />
      </mesh>
      
      <mesh position={[-0.15, -1.05, 0.1]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.05]} />
        <meshStandardMaterial color="#002855" roughness={0.5} />
      </mesh>
      
      {/* Logo central */}
      <mesh position={[0, 0.2, 0.06]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.3, 0.3]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

// Page principale pour le modèle 3D
const Model3D = () => {
  const [selectedColor, setSelectedColor] = useState('#FF8064'); // Orange par défaut
  
  const colorOptions = [
    { name: 'Rouge', value: '#ff3b30' },
    { name: 'Bleu', value: '#007aff' },
    { name: 'Vert', value: '#34c759' },
    { name: 'Orange', value: '#FF8064' },
    { name: 'Noir', value: '#000000' }
  ];

  return (
    <div className="model3d-container">
      <h1 className="model3d-title">Personnaliser votre planche</h1>
      
      <div className="model3d-content">
        {/* Sélecteur de couleurs */}
        <div className="color-selector">
          <h3>Choisissez une couleur</h3>
          <div className="color-options">
            {colorOptions.map((color) => (
              <div 
                key={color.value}
                className={`color-option ${selectedColor === color.value ? 'selected' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.value)}
              >
                <span>{color.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Canvas pour le rendu 3D */}
        <div className="model3d-canvas">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ height: '500px', width: '100%' }}
          >
            <CameraControls />
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1} 
              castShadow 
              shadow-mapSize-width={1024} 
              shadow-mapSize-height={1024}
            />
            <spotLight 
              position={[-5, 5, 5]} 
              intensity={0.5} 
              angle={0.3} 
              penumbra={0.5}
              castShadow
            />
            <Surfboard color={selectedColor} />
            <mesh 
              rotation={[-Math.PI / 2, 0, 0]} 
              position={[0, -1.5, 0]} 
              receiveShadow
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.2} />
            </mesh>
          </Canvas>
        </div>
      </div>
      
      <div className="model3d-info">
        <h2>Votre planche Sea Riders</h2>
        <p>Modèle éco-responsable fabriqué à partir de matériaux recyclés.</p>
        <button className="view-details-button">Voir plus de détails</button>
      </div>
    </div>
  );
};

export default Model3D; 