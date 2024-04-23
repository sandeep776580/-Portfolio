import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {

  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>                                    {/*  here hemisphereLight,spotLight,pointLight provide light on computer screen  */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12}  penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} /> 
      <primitive object={computer.scene}  scale={isMobile ? 0.0 : 0.75} position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]} rotation={[-0.01, -0.5, -0.1]}  />
    </mesh>                                    // and primitive provide position and size and rotation of computer object;                                                                     
  
)};


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");                    // Add a listener for changes to the screen size
    setIsMobile(mediaQuery.matches);                                              // Set the initial value of the `isMobile` state variable
    const handleMediaQueryChange = (event) => {                                  // Define a callback function to handle changes to the media query
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);               // Add the callback function as a listener for changes to the media query
    return () => {                                                               // Remove the listener when the component is unmounted
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);



  return (

    <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}  >
    
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  
)};


export default ComputersCanvas;
