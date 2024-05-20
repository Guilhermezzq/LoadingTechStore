
import { useState, useEffect, useContext, Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { BsCartPlus } from 'react-icons/bs'

import toast from 'react-hot-toast'
import { CartContext } from '../contexts/CartContext';
import { ProductProps } from '../pages/home/home';
import { api } from '../services/api';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


const AirPod = () => {

  const airpod = useGLTF("./model/airpods_pro.glb");

  return (
    <>
    <directionalLight />
    <ambientLight intensity={4} />
      <primitive
       object={airpod.scene}
        scale={60}
        position={[0, -0.95, 0]}
        
        
        />
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
        scale={1.5}
        rotation={[1, 0, 0.55]}
        
        />
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
        scale={0.5}
        position={[0 , -1, 0]}
        rotation={[0, 0, 0]}
        
        />
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
      <OrbitControls 
      minDistance={6}
       maxDistance={7}
       
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
        <OrbitControls 
        minDistance={6}
         maxDistance={7}
         
         />
  
      </>  
    )
  }
  
  useGLTF.preload("./model/apple_iphone_15.glb");
  







export function ProductDetail(){
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>()
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct(){
      const response = await api.get(`/products/${id}`)
      setProduct(response.data);
    }

    getProduct();
  }, [id])


  function handleAddItem(product: ProductProps){
    toast.success("Product added to cart.", {
      style:{
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#FFF"
      }
    })
    addItemCart(product)

    navigate("/cart")
  }


  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
            <div className='flex-1 w-full max-h-90 object-contain' >
                <Canvas>
                      <Suspense fallback={null}>
                        {product?.type === "airpods" && <AirPod /> }
                        {product?.type === "keyboard" && <KeyBoard /> }
                        {product?.type ===  "macbook" && <MacBook /> }
                        {product?.type === "headphones" && <HeadPhones /> }
                        {product?.type === "iphoneX" && <IphoneX /> }
                        {product?.type === "nitendo" && <Nitendo/> }
                        {product?.type === "NES" && <NESController /> }
                        {product?.type === "ultrawide" &&  <Monitor /> }
                        {product?.type === "computer" &&  <CPU /> }
                        {product?.type === "chair" &&  <Ergonomic /> }
                        {product?.type === "GamerChair" &&  <Secretlab /> }
                        {product?.type === "iphone12" && <Iphone12 />  }
                        {product?.type === "iphone13" && <Iphone13 /> }
                        {product?.type === "iphone14" && <Iphone14 />  }
                        {product?.type === "iphone15" &&  <Iphone15 /> }
                
                      </Suspense>
                    </Canvas>
            </div>

              <div className="flex-1">
                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                <p className="my-4">{product?.description}</p>
                <strong className="text-zinc-700/90 text-xl">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </strong>
                <button className="bg-zinc-900 p-1 rounded ml-3" onClick={ () => handleAddItem(product) }>
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>

            </div>
          </section>
        )}
      </main>
    </div>
  )
}