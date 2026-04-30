import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Grid, Center, Text } from '@react-three/drei';
import * as THREE from 'three';

// A component that renders a stylized architectural wireframe
function ArchitecturalModel({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create a stylized structure of a building
  const lines = useMemo(() => {
    const beams: [number, number, number, [number, number, number]][] = [];
    
    // Base floor
    beams.push([4, 0.1, 4, [0, 0, 0]]);
    // Pillars
    beams.push([0.1, 4, 0.1, [-1.8, 2, -1.8]]);
    beams.push([0.1, 4, 0.1, [1.8, 2, -1.8]]);
    beams.push([0.1, 4, 0.1, [-1.8, 2, 1.8]]);
    beams.push([0.1, 4, 0.1, [1.8, 2, 1.8]]);
    
    // Second floor
    beams.push([4, 0.1, 4, [0, 4, 0]]);
    
    // Roof structure
    beams.push([0.1, 2, 0.1, [0, 5, 0]]);
    beams.push([4, 0.05, 0.05, [0, 6, 0]]);
    
    return beams;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Parallax effect based on mouse
    const targetX = mouse.current[0] * 0.2;
    const targetY = -mouse.current[1] * 0.2;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    
    // Subtle auto-rotation
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      <Center top>
        {lines.map((beam, i) => (
          <mesh key={i} position={beam[3] as any}>
            <boxGeometry args={[beam[0], beam[1], beam[2]]} />
            <meshBasicMaterial 
              color="#C9A227" 
              wireframe 
              transparent 
              opacity={0.6}
            />
          </mesh>
        ))}
        
        {/* Some floating data points */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={[2, 4.5, 0]}
            fontSize={0.2}
            color="#C9A227"
            font="/fonts/Inter-Bold.ttf" // Fallback to system font if not found
          >
            STRUCTURAL_REV_04
          </Text>
        </Float>
      </Center>
    </group>
  );
}

export default function Blueprint3D() {
  const mouse = useRef<[number, number]>([0, 0]);
  const [hasOrientation, setHasOrientation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1,
      ];
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null) {
        setHasOrientation(true);
        // Normalize orientation values
        mouse.current = [
          (e.gamma / 45), // Left/Right tilt
          (e.beta - 45) / 45, // Front/Back tilt (adjusted for natural holding angle)
        ];
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleOrientation);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-40 md:opacity-100 pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={35} />
        <color attach="background" args={['#2B2B2B']} />
        <fog attach="fog" args={['#2B2B2B', 8, 15]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <ArchitecturalModel mouse={mouse} />
        
        <Grid 
          infiniteGrid 
          fadeDistance={20} 
          fadeStrength={5} 
          cellSize={1} 
          sectionSize={5} 
          sectionColor="#C9A227" 
          cellColor="#5C5C5C" 
          sectionThickness={1} 
          cellThickness={0.5}
          position={[0, -1, 0]}
        />
        
        {/* Background visual elements */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial color="#2B2B2B" transparent opacity={0.5} />
        </mesh>
      </Canvas>
      
      {/* Overlay to darken further if needed */}
      <div className="absolute inset-0 bg-charcoal/40 z-10" />
    </div>
  );
}