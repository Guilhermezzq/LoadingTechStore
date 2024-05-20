import { Suspense, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {  Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import Empty from "../../Empty";

import { useGLTF } from "@react-three/drei";




const AirPod = () => {

    const airpod = useGLTF("./model/airpods_pro.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={airpod.scene}
          scale={80}
          position={[0, -1, 0]}
          
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/airpods_pro.glb");

  const KeyBoard = () => {

    const keyboard = useGLTF("./model/MechanicalKeyboard.gltf");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={keyboard.scene}
          scale={1}
          rotation={[1, 0, 0.55]}
          
          />
        
      </>  
    )
  }
  
  useGLTF.preload("./model/MechanicalKeyboard.gltf");
  
  
  const MacBook = () => {
  
    const macbook = useGLTF("./model/macbook.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={macbook.scene}
          scale={-0.90}
          position={[-0, -2, 0]}
          rotation={[-3, 0, 0]}
          
          
          
          />
  
      </>  
    )
  }
  
  useGLTF.preload("./model/macbook.glb");
   
  
  const HeadPhones = () => {
  
    const headphones = useGLTF("./model/Headphones.gltf");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={headphones.scene}
          scale={1}
          position-y={-1}
          rotation={[0, -0.50, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/Headphones.gltf");
  
  
  const IphoneX = () => {
  
    const iphoneX = useGLTF("./model/iPhoneX.gltf");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={iphoneX.scene}
          scale={1}
          position={[0, -0.75, 0]}
          rotation={[0, 0, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/iPhoneX.gltf");
  
  
  
  const Nitendo = () => {
  
    const nitendo = useGLTF("./model/NintendoEntertainmentSystem.gltf");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={nitendo.scene}
          scale={1}
          position={[0, 0, 0]}
          rotation={[0.75, 0, 0.]}
          
          />
        
      </>  
    )
  }
  
  useGLTF.preload("./model/NintendoEntertainmentSystem.gltf");
  
  
  const NESController = () => {
  
    const nesController = useGLTF("./model/NESController.gltf");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={nesController.scene}
          scale={1.5}
          position={[-1, -2, 0]}
          rotation={[1.5, 0, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/NESController.gltf");
  
  
  const Monitor = () => {
  
    const monitor = useGLTF("./model/ultrawide_monitor.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={monitor.scene}
          scale={0.4}
          position={[0 , -1, 0]}
          rotation={[0, 0, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/ultrawide_monitor.glb");
  
  const CPU = () => {
  
    const cpu = useGLTF("./model/computer.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={cpu.scene}
          scale={0.90}
          position={[0 , -2.5, 0]}
          rotation={[0, 3.5, 0]}
          
          />
        
      </>  
    )
  }
  
  useGLTF.preload("./model/computer.glb");
  
  const Ergonomic = () => {
  
    const ergonomic = useGLTF("./model/Ergonomic.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={ergonomic.scene}
          scale={4}
          position={[0 , -2, 0]}
          rotation={[0, 0, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/Ergonomic.glb");
  
  const Secretlab = () => {
  
    const secretlab = useGLTF("./model/gamingChair.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={secretlab.scene}
          scale={1.1}
          position={[0 , -3, 0]}
          rotation={[0, 0, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/gamingChair.glb");
  
  const Iphone12 = () => {
  
    const iphone12 = useGLTF("./model/iphone_12_pro.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={iphone12.scene}
          scale={0.06}
          position={[0 , -3, 0]}
          rotation={[0, 0, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/iphone_12_pro.glb");
  
  const Iphone13 = () => {
  
    const iphone13 = useGLTF("./model/iphone_13.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={iphone13.scene}
          scale={0.008}
          position={[0 , -0.22, 0]}
          rotation={[0, 2.5, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/iphone_13.glb");
  
  const Iphone14 = () => {
  
    const iphone14 = useGLTF("./model/iphone_14_pro_max_gold.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={iphone14.scene}
          scale={31}
          position={[0 , -2.8, 0]}
          rotation={[0, 2.5, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/iphone_14_pro_max_gold.glb");
  
  const Iphone15 = () => {
  
    const iphone15 = useGLTF("./model/apple_iphone_15.glb");
  
    return (
      <>
      <directionalLight />
      <ambientLight intensity={4} />
        <primitive
         object={iphone15.scene}
          scale={33}
          position={[0 , -0.10, 0]}
          rotation={[0, 2.5, 0]}
          
          />
        
  
      </>  
    )
  }
  
  useGLTF.preload("./model/apple_iphone_15.glb");
  
  


export function Cart() {

    const { cart, total, addItemCart, removeItemCart} = useContext(CartContext);
   
    return (
        <div className="w-full max-w-7xl mx-auto" >
            <h1 className="font-bold  mb-4 mt-10 text-2xl text-center my-4">PRODUTO E SERVIÇO / PRODUCT AND SERVICE</h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center ">
                    <h2 className="font-bold text-2xl" >Oops your cart is empty.....</h2>
                    <Link to="/" className="my-11 text-center md:h-96 lg:h-96 "> {/* Adicione a classe "text-center" para centralizar o texto */}
                   
                        <Canvas >
                            <Suspense>
                                <Empty />
                            </Suspense>
                        </Canvas>
                        <p className="font-bold text-2xl mt-8" >Go back to shop</p>
                    
                </Link>
                </div>
            )}

            {cart.map( (item) => (
                <section
                key={item.id}
                className="flex items-center justify-between mt-20 border-b-2 border-gray-300 pb-4 ">
                <Canvas style={{ width: "112px" }}>
                <Suspense fallback={null}>
                    {item.type === "airpods" && <AirPod />}
                    {item.type === "keyboard" && <KeyBoard />}
                    {item.type === "macbook" && <MacBook />}
                    {item.type === "headphones" && <HeadPhones />}
                    {item.type === "iphoneX" && <IphoneX />}
                    {item.type === "nitendo" && <Nitendo />}
                    {item.type === "NES" && <NESController />}
                    {item.type === "ultrawide" && <Monitor />}
                    {item.type === "computer" && <CPU />}
                    {item.type === "chair" && <Ergonomic />}
                    {item.type === "GamerChair" && <Secretlab />}
                    {item.type === "iphone12" && <Iphone12 />}
                    {item.type === "iphone13" && <Iphone13 />}
                    {item.type === "iphone14" && <Iphone14 />}
                    {item.type === "iphone15" && <Iphone15 />}
                    {/* Adicione mais condições conforme necessário para outros tipos de produtos */}
                </Suspense>
                 </Canvas>
                 
                <strong>Price: {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })} 
                </strong>

                <div className="flex items-center justify-center gap-3" >

                    <button
                    onClick={ () => removeItemCart(item)}
                    className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                        -
                    </button>

                    {item.amout}

                    <button 
                    onClick={ () => addItemCart(item)}
                    className="bg-slate-600 px-2 mr-4 rounded text-white font-medium flex items-center justify-center">
                        +
                    </button>

                </div>

                <strong className="float-right" >
                Subtotal: {item.total.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                </strong>

            </section>
            ))}

            {cart.length !== 0 && <p className="font-bold mt-4">Bundle Total: {total} </p> }

        </div>


    );
}
