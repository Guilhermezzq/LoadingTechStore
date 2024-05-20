
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

import { TiShoppingCart } from "react-icons/ti";



export function Header() {

  const { cartAmout } = useContext(CartContext)
   
    return (
      <header className="w-full px-1 " style={{backgroundColor: '#6ca1ee' }} >
        <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
          <Link to="/" className="font-bold text-2xl">
            Loading Tech
          </Link>

          <Link className="relative " to="/cart">
            <TiShoppingCart  size={24} color="#121212" />
            
            {cartAmout > 0 && (
              <span
              className="absolute
              -top-3
              -right-3
              px-2.5
              bg-blue-600
              text-white
              rounded-full
              w-6
              h-6
              flex
              items-center
              justify-center
              text-xs "
            >
              {cartAmout}
            </span>
            )}
         </Link>

        </nav>
      </header>
    );
}