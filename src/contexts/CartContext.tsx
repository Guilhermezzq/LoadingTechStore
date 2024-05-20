import { ReactNode, createContext, useState } from "react";
import { ProductProps } from "../pages/home/home";


interface CartContextData {
    cart : CartProps[];
    cartAmout: number;
    addItemCart: (newItem: ProductProps) => void;
    removeItemCart: (product: CartProps) => void;
    total: string;
}


interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
  amout: number;
  total: number;
}

interface CartProviderPros {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderPros) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ cart, setCart ] = useState<CartProps[]>([])
    const [ total, setTotal] = useState("");

    function addItemCart(newItem: ProductProps) {
        // Adicionar no carrinho

        // Verificar se não existe no carrinho
        const indexItem = cart.findIndex(item => item.id === newItem.id) 
        
        if(indexItem !== -1) {
         const cartList = cart;   
        // Se for diferente de - 1 e porque ele encontrou o item que esta tentando adicionar na lista e após soma +1 na quantidade e calcular o total do carrinho
        cartList[indexItem].amout = cartList[indexItem].amout + 1;
        cartList[indexItem].total = cartList[indexItem].amout * cartList[indexItem].price;

        setCart(cartList);
        totalResultCart(cartList);
        return;

       }
       // Adiciona item na lista
       const data = {
        ...newItem,
        amout: 1,
        total: newItem.price,
       }

       setCart( products => [...products, data])
       totalResultCart([...cart, data])
       }

       function removeItemCart(product: CartProps) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amout > 1) {
            // Diminuir apenas 1 amout do que você tem

            const cartList = cart;
            cartList[indexItem].amout = cartList[indexItem].amout - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList);
            return;

            
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem);
        totalResultCart(removeItem);
       }

       function totalResultCart(items: CartProps[]) {
        const myCart = items; 
        const result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
        const resultFormated = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        setTotal(resultFormated);
       } 







    return (
        <CartContext.Provider
         value={{
             cart,
             cartAmout: cart.length,
             addItemCart,
             removeItemCart,
             total,
            }} 
         
         >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;