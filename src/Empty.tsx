import {  useGLTF } from "@react-three/drei";


import React, { useRef } from "react";


const Empty = () => {

    const empty = useGLTF("./model/empty_cart.glb");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const emptyRef = useRef<any>(null);

    const animate = () => {
      if (emptyRef.current !== null) {
        emptyRef.current.rotation.y += 0.01;
    }

      requestAnimationFrame(animate);
    }

    React.useEffect(() => {
      animate();
    }, []);
  

  return (
    <>
     {/* <OrbitControls /> */}

      <directionalLight />
      <ambientLight intensity={3} />

      

      <primitive
      object={empty.scene}
      ref={emptyRef}
      scale={0.15} 
      rotation={[0, Math.PI / 2, 0]}
      position={[0, -2  , 0.40]}
      
      />

    </>
  );
};

useGLTF.preload("./model/empty_cart.glb");

export default Empty;
