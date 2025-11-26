import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Nube de Partículas (Estilo Hacker)
const ParticleCloud = () => {
  const ref = useRef<any>();
  const [positions] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = 2.8 + Math.random() * 1.5; 
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00F0FF" size={0.025} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
      </Points>
    </group>
  );
};

// Núcleo Sólido Wireframe
const Core = () => {
  const mesh = useRef<any>();
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });
  return (
    <Sphere ref={mesh} args={[1.5, 32, 32]}>
      <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.15} />
    </Sphere>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Core />
          <ParticleCloud />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;