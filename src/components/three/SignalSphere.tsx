import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

/**
 * The signature element of the site: a rotating sphere of connected
 * nodes with traveling signal pulses — a stand-in for the SIP/WebRTC
 * mesh networks Biswaranjan's products route calls through.
 */
function useIcosphereNodes(count: number, radius: number) {
  return useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius));
    }
    return pts;
  }, [count, radius]);
}

function buildEdges(nodes: THREE.Vector3[], maxDist: number) {
  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) edges.push([nodes[i], nodes[j]]);
    }
  }
  return edges;
}

function Pulse({ path, delay, color }: { path: [THREE.Vector3, THREE.Vector3]; delay: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = ((clock.getElapsedTime() + delay) % 3) / 3;
    ref.current.position.lerpVectors(path[0], path[1], t);
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = Math.sin(t * Math.PI);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0} />
    </mesh>
  );
}

function Rig({ signalColor, wireColor }: { signalColor: string; wireColor: string }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useIcosphereNodes(46, 2.1);
  const edges = useMemo(() => buildEdges(nodes, 1.05), [nodes]);
  const pulseEdges = useMemo(() => edges.filter((_, i) => i % 5 === 0).slice(0, 14), [edges]);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(Date.now() * 0.00012) * 0.15;
  });

  return (
    <group ref={group}>
      {edges.map((edge, i) => (
        <Line key={i} points={edge} color={wireColor} transparent opacity={0.28} lineWidth={1} />
      ))}
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[i % 7 === 0 ? 0.05 : 0.028, 10, 10]} />
          <meshBasicMaterial color={i % 7 === 0 ? signalColor : wireColor} />
        </mesh>
      ))}
      {pulseEdges.map((edge, i) => (
        <Pulse key={i} path={edge} delay={i * 0.5} color={signalColor} />
      ))}
      <mesh>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export function SignalSphere({ isDark }: { isDark: boolean }) {
  const signalColor = "#1de0a8";
  const wireColor = isDark ? "#7ee6c7" : "#00a87d";

  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Rig signalColor={signalColor} wireColor={wireColor} />
    </Canvas>
  );
}
