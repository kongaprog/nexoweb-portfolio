import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// 1. EL CAMINO DE ESTRELLAS (Ahora se mueve y es denso)
const MovingStarRing = ({ radius, count = 800, speed, color }: any) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generamos 800 puntos para que el aro se vea sólido y definido
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      // Poca variación en el radio para que el aro se vea fino y definido
      const r = radius + (Math.random() - 0.5) * 0.1; 
      
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      // Dispersión mínima en Z para dar volumen 3D al anillo
      const z = (Math.random() - 0.5) * 0.1; 

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // EL ARO GIRA: Los puntos orbitan junto con la luna
      pointsRef.current.rotation.z -= delta * speed * 0.5; // Giran un poco más lento que la luna para efecto estela
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.02} // Puntos finos y elegantes
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8} // Muy visibles y luminosos
      />
    </Points>
  );
};

// 2. LA LUNA DE MALLA (Ahora más pequeña y delicada)
const MiniWireframeMoon = ({ radius, speed, color, offset = 0 }: any) => {
  const moonRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (moonRef.current) {
      moonRef.current.position.x = radius * Math.cos(t);
      moonRef.current.position.y = radius * Math.sin(t);
      
      // Rotación propia rápida
      moonRef.current.rotation.y += 0.05;
      moonRef.current.rotation.x += 0.05;
    }
  });

  return (
    // Reducimos args a [0.18...] para que sea pequeña (antes era 0.35)
    <Sphere ref={moonRef} args={[0.18, 12, 12]}> 
      <meshBasicMaterial 
        color={color} 
        wireframe={true} 
        transparent 
        opacity={0.9}
      />
    </Sphere>
  );
};

// 3. SISTEMA ORBITAL COMPLETO
const OrbitalSystem = ({ rotation, radius, speed, color, offset }: any) => {
  return (
    <group rotation={rotation}>
      {/* El camino de estrellas que se mueve */}
      <MovingStarRing radius={radius} speed={speed} color={color} />
      {/* La luna pequeña que viaja */}
      <MiniWireframeMoon radius={radius} speed={speed} color={color} offset={offset} />
    </group>
  );
};

// 4. EL NÚCLEO CENTRAL (Sin cambios, ya era perfecto)
const CentralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial color="white" wireframe={true} transparent opacity={0.15} />
      </Sphere>
      <Sphere args={[0.6, 32, 32]}>
        <meshBasicMaterial color="#ffffff" />
        <pointLight distance={8} intensity={3} color="#00F0FF" />
      </Sphere>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        
        <ambientLight intensity={0.5} />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          
          <CentralCore />

          {/* Órbita 1: Azul Cian */}
          <OrbitalSystem 
            rotation={[Math.PI / 3, 0, 0]} 
            radius={3.2} 
            speed={0.4} 
            color="#00F0FF" 
            offset={0} 
          />

          {/* Órbita 2: Blanco */}
          <OrbitalSystem 
            rotation={[-Math.PI / 3, 0, 0]} 
            radius={3.2} 
            speed={0.5} 
            color="#ffffff" 
            offset={2} 
          />

          {/* Órbita 3: Azul Cian */}
          <OrbitalSystem 
            rotation={[0, Math.PI / 2, 0]} 
            radius={3.5} 
            speed={0.3} 
            color="#00F0FF" 
            offset={4} 
          />

          {/* Órbita 4: Blanco */}
          <OrbitalSystem 
            rotation={[Math.PI / 4, Math.PI / 4, 0]} 
            radius={3} 
            speed={0.6} 
            color="#ffffff" 
            offset={1} 
          />

        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;