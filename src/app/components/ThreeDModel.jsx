// components/ThreeDModel.js
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function ThreeDModel() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load('/assets/models/FinalBaseMesh.obj', (obj) => {
      // You can apply transformations to the model here if needed (like position, rotation, scale)
      obj.scale.set(0.1, 0.1, 0.1); // Adjust scale
      obj.position.set(0, 0, 0);  // Adjust position if necessary
      setModel(obj);
    });
  }, []);

  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* Set up camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        
        {/* Controls */}
        <OrbitControls minDistance={2} maxDistance={5} />
        
        {/* Add the loaded model to the scene */}
        {model && <primitive object={model} />}
      </Suspense>
    </Canvas>
  );
}
