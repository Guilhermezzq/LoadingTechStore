import { Canvas } from '@react-three/fiber';
import { Suspense, useContext, useEffect, useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import { OrbitControls, useGLTF } from '@react-three/drei';
import { api } from '../../services/api';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';
import { MdOutlineDescription } from "react-icons/md";
import { Link } from 'react-router-dom';



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
        scale={1}
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
        scale={0.4}
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




export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext)
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();  
  }, []);

  function handleAddCartItem(product : ProductProps) {
    toast.success("Product added successfully!")
    addItemCart(product);
  }

  function handleDescription() {
    toast.success("Product Description!");
  }

  return (
    <div>
      {/* Primeiro Produto da loja */}
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">TOP RATED PRODUCTS</h1>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <section key={product.id} className="w-full ">
              <div className="w-full h-auto md:h-96 lg:h-96 rounded-lg mb-2" style={{ maxWidth: '100%', height: '500px' }}>
                <Canvas>
                  <Suspense fallback={null}>
                    {product.type === "airpods" && <AirPod /> } 
                    {product.type === "keyboard" && <KeyBoard /> } 
                    {product.type ===  "macbook" && <MacBook /> } 
                    {product.type === "headphones" && <HeadPhones /> } 
                    {product.type === "iphoneX" && <IphoneX /> } 
                    {product.type === "nitendo" && <Nitendo/> } 
                    {product.type === "NES" && <NESController /> } 
                    {product.type === "ultrawide" &&  <Monitor /> } 
                    {product.type === "computer" &&  <CPU /> } 
                    {product.type === "chair" &&  <Ergonomic /> } 
                    {product.type === "GamerChair" &&  <Secretlab /> } 
                    {product.type === "iphone12" && <Iphone12 />  } 
                    {product.type === "iphone13" && <Iphone13 /> } 
                    {product.type === "iphone14" && <Iphone14 />  }
                    {product.type === "iphone15" &&  <Iphone15 /> } 
                    
                  </Suspense>
                </Canvas>
                <p className='font-medium mt-1 mb-2'>
                  {product.title}
                </p>
                <div className='flex gap-3 items-center'>
                  <strong className='text-zinc-700/90'>
                    {product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>
                  <button
                  className='bg-zinc-900 p-1 rounded' 
                  onClick={ () => handleAddCartItem(product)

                   }
                  >
                    <BsCart4 size={30} color='#d1cddc' />
                  </button>

                  <Link to={`/products/${product.id}`} > 
                  <button
                  className='bg-zinc-900 p-1 rounded' 
                  onClick={handleDescription}
                  >
                    <MdOutlineDescription size={30} color='#d1cddc' />
                  </button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
