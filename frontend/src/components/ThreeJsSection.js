import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"

const Box = () => {
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.001
    })
    return (
        <mesh ref={mesh}>
            <torusKnotGeometry args={[0.7, 2, 406, 20, 20, 20]}/>
            <meshBasicMaterial color={"#ffffff"} wireframe />
        </mesh>
    )
}

const ThreeJsSection = () => {
    return (
        <>
        <Canvas style={{backgroundColor:"black"}} gl={{
            
        }}>
        <OrbitControls enableZoom={false} enablePan={false} />
            <Box/>
        </Canvas>
        </>
    )
}

export default ThreeJsSection