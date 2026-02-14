import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSound } from '../contexts/SoundContext';

// Fix for missing JSX types in R3F
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      lineSegments: any;
      edgesGeometry: any;
      lineBasicMaterial: any;
      planeGeometry: any;
      cylinderGeometry: any;
      capsuleGeometry: any;
      torusGeometry: any;
      ringGeometry: any;
      meshBasicMaterial: any;
      torusKnotGeometry: any;
      sphereGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// --- Types ---
interface Hotspot3D {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
}

interface RoomData {
  id: string;
  name: string;
  bgImage: string;
  hotspots: Hotspot3D[];
}

// --- Data ---
const rooms: RoomData[] = [
  {
    id: 'control',
    name: 'Control Room A',
    bgImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop',
    hotspots: [
        { id: 'h1', position: [0, 1.5, 0], title: 'Holographic Console', description: 'Our custom AI-assisted analog console interface.' },
        { id: 'h2', position: [-2, 0.5, 1], title: 'Left Monitor', description: 'ATC SCM110ASL Pro main monitor.' },
        { id: 'h3', position: [2, 0.5, 1], title: 'Right Monitor', description: 'ATC SCM110ASL Pro main monitor.' }
    ]
  },
  {
    id: 'booth',
    name: 'The Vault (Booth)',
    bgImage: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2000&auto=format&fit=crop',
    hotspots: [
        { id: 'h4', position: [0, 2, 0], title: 'Neumann U87', description: 'The gold standard condenser microphone.' },
        { id: 'h5', position: [0, -1, 0], title: 'Floating Floor', description: 'Decoupled flooring system for zero vibration transfer.' }
    ]
  },
  {
    id: 'lounge',
    name: 'Artist Lounge',
    bgImage: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=2000&auto=format&fit=crop',
    hotspots: [
        { id: 'h6', position: [0, 0, 0], title: 'Vibe Core', description: 'Central relaxation hub with mood-adaptive lighting.' },
        { id: 'h7', position: [2, 1, -1], title: 'Refreshments', description: 'Smart espresso bar and hydration station.' }
    ]
  }
];

// --- 3D Components ---

const ControlRoomModel = () => {
  return (
    <group>
      {/* Main Console Desk */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[4, 1, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(4, 1, 1.5)]} />
          <lineBasicMaterial color="#a855f7" linewidth={2} />
        </lineSegments>
      </mesh>

      {/* Screens/Monitors */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[-2, 0.5, 0.5]} rotation={[0, 0.2, 0]}>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color="#171717" emissive="#3b82f6" emissiveIntensity={0.2} />
          <lineSegments>
             <edgesGeometry args={[new THREE.BoxGeometry(1, 1.5, 1)]} />
             <lineBasicMaterial color="#3b82f6" />
          </lineSegments>
        </mesh>
        <mesh position={[2, 0.5, 0.5]} rotation={[0, -0.2, 0]}>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color="#171717" emissive="#3b82f6" emissiveIntensity={0.2} />
          <lineSegments>
             <edgesGeometry args={[new THREE.BoxGeometry(1, 1.5, 1)]} />
             <lineBasicMaterial color="#3b82f6" />
          </lineSegments>
        </mesh>
      </Float>

      {/* Digital Waves */}
      <mesh position={[0, 1, -2]} rotation={[Math.PI / 4, 0, 0]}>
         <planeGeometry args={[6, 3, 32, 32]} />
         <meshStandardMaterial color="#a855f7" wireframe transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const BoothModel = () => {
  return (
    <group>
      {/* Mic Stand Base */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.5, 0.8, 0.5, 32]} />
        <meshStandardMaterial color="#333" />
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(0.5, 0.8, 0.5, 32)]} />
          <lineBasicMaterial color="#a855f7" />
        </lineSegments>
      </mesh>

      {/* Mic Body */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
            <capsuleGeometry args={[0.3, 1.5, 4, 16]} />
            <meshStandardMaterial color="#e5e5e5" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Pop Filter Ring */}
        <mesh position={[0, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.4, 0.02, 16, 100]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
        </mesh>
      </Float>

      {/* Sound Rings */}
      {[1, 1.5, 2].map((scale, i) => (
         <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[scale, scale + 0.05, 64]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.5 - (i * 0.15)} side={THREE.DoubleSide} />
         </mesh>
      ))}
    </group>
  );
};

const LoungeModel = () => {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                {/* Abstract Comfort Shape */}
                <mesh position={[0, 0, 0]}>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <MeshDistortMaterial color="#a855f7" speed={2} distort={0.4} roughness={0.4} />
                </mesh>
            </Float>
            
            {/* Ambient Orbs */}
            <mesh position={[2, 1, -1]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[-2, -1, 1]}>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
            </mesh>
        </group>
    );
};

const HotspotMarker: React.FC<{ 
    hotspot: Hotspot3D; 
    onSelect: (h: Hotspot3D) => void;
    active: boolean;
}> = ({ hotspot, onSelect, active }) => {
    const { playHover, playClick } = useSound();
    
    return (
        <Html position={hotspot.position} center zIndexRange={[100, 0]}>
            <button
                onClick={() => {
                    playClick();
                    onSelect(hotspot);
                }}
                onMouseEnter={playHover}
                className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    active ? 'bg-neonPurple scale-125' : 'bg-black/50 border border-white/30 hover:bg-neonPurple/80'
                }`}
            >
                <div className={`w-2 h-2 bg-white rounded-full ${active ? '' : 'animate-ping'}`} />
                {active && (
                    <div className="absolute top-10 w-48 bg-black/90 backdrop-blur-md border border-neonPurple/50 p-3 rounded-lg text-left shadow-xl pointer-events-none">
                        <h4 className="text-neonPurple font-bold text-sm mb-1">{hotspot.title}</h4>
                        <p className="text-gray-300 text-xs leading-snug">{hotspot.description}</p>
                    </div>
                )}
            </button>
        </Html>
    );
};

const SceneContent: React.FC<{ roomId: string; hotspots: Hotspot3D[] }> = ({ roomId, hotspots }) => {
    const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
            
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            <group position={[0, -0.5, 0]}>
                {roomId === 'control' && <ControlRoomModel />}
                {roomId === 'booth' && <BoothModel />}
                {roomId === 'lounge' && <LoungeModel />}
            </group>

            {hotspots.map(h => (
                <HotspotMarker 
                    key={h.id} 
                    hotspot={h} 
                    active={activeHotspotId === h.id}
                    onSelect={(hotspot) => setActiveHotspotId(activeHotspotId === hotspot.id ? null : hotspot.id)}
                />
            ))}
            
            <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                autoRotate={!activeHotspotId} 
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
            />
        </>
    );
};

const StudioTour: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState(rooms[0].id);
  const { playHover, playClick } = useSound();

  const activeRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];

  return (
    <section id="tour" className="py-24 bg-darkBg relative overflow-hidden transition-all duration-1000">
      
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/90 z-10"></div> {/* Heavy overlay to keep focus on content */}
          {rooms.map(room => (
               <img 
               key={room.id}
               src={room.bgImage} 
               alt={`${room.name} Background`} 
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 blur-sm ${activeRoomId === room.id ? 'opacity-40' : 'opacity-0'}`}
           />
          ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20 mb-4">
               <span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></span>
               <span className="text-xs font-bold text-neonBlue uppercase tracking-widest">Digital Twin Tour</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                HOLOGRAPHIC <span className="text-neonBlue">VIEW</span>
            </h2>
            <p className="text-gray-400">Explore the digital schematic of our facility.</p>
        </div>

        {/* Room Switcher */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {rooms.map(room => (
                <button
                    key={room.id}
                    onClick={() => {
                        setActiveRoomId(room.id);
                        playClick();
                    }}
                    onMouseEnter={playHover}
                    className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                        activeRoomId === room.id 
                        ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                        : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                >
                    {room.name}
                </button>
            ))}
        </div>

        {/* Interactive Viewport */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.1)] bg-black/50">
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs text-neonBlue font-mono border border-neonBlue/30">
                LIVE_RENDER_MODE: ON
            </div>
            
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <Suspense fallback={null}>
                    <SceneContent roomId={activeRoom.id} hotspots={activeRoom.hotspots} />
                </Suspense>
            </Canvas>
            
            {/* Overlay Gradient for cinematics */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <div className="text-center mt-4 text-xs text-gray-600 font-mono">
             DRAG TO ROTATE • SCROLL TO ZOOM • RIGHT CLICK TO PAN
        </div>
      </div>
    </section>
  );
};

export default StudioTour;