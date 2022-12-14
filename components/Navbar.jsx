import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

// import { Cart } from './';
// import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Golden Shoes</Link>
      </p>

      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  )
}

export default Navbar