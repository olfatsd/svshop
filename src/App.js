import './App.css';
import { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Purchase from './components/Purchase';
import cartLogo from './images/cartlogo.png';
import homeLogo from './images/homelogo.png';
import computer from './images/computer.webp';
import phone from './images/phone.jfif';
import tv from './images/tvhd.jfif';
import laptop from './images/laptop.jfif';
import stereo from './images/stereo.jpeg';


function App() {

  const [products, setProducts] = useState([{ img: computer, name: 'computer', price: 6000 }, { img: phone, name: 'phone', price: 4000 }, {img: tv,  name: 'tv', price: 14000 }, {img: laptop, name: 'laptop', price: 7000 }, {img: stereo, name: 'stereo', price: 2000 }]);
  const [cart, setCart] = useState([]);

  const addToCart = (ind) => {
    setCart([...cart, products[ind]]);
  }
  const removeFromCart = (ind) => {
    let newArr = cart.filter((val, index) => (ind != index));
    setCart([...newArr]);
  }
  const moveToHome = () => {
    document.getElementById('productsDiv').style.display = "block";
    document.getElementById('cartDiv').style.display = "none";
    document.getElementById('buyDiv').style.display = "none";
  }
  const moveToCart = () => {
    document.getElementById('cartDiv').style.display = "block";
    document.getElementById('productsDiv').style.display = "none";
    document.getElementById('buyDiv').style.display = "none";
  }
  const purchase = () => {
    let newArr = [];
    setCart([...newArr]);
    document.getElementById('buyDiv').style.display = "block";
    document.getElementById('cartDiv').style.display = "none";
    document.getElementById('productsDiv').style.display = "none";
  }
  const totalSum = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
      sum += cart[i].price;
    }
    return sum;
  }


  return (
    <div className="App">
      <div className='navbar'>
        <img id='homeLogo' onClick={() => { moveToHome() }} src={homeLogo} />
        <p className='text'>SV-SHOP</p>
        <img id='cartLogo' onClick={() => { moveToCart() }} src={cartLogo} />
      </div>

      <div id='productsDiv'>
        <p id='text'>List Of Products</p>
        {products.map((val, index) => {
          return <Product val={val} index={index} add={addToCart} />
        })}
      </div>

      <div id='cartDiv'>
        <div className='parent'>
          <div className='child1'>C<br/>A<br/>R<br/>T</div>
          <div className='child2'>
            {cart.map((val, index) => {
              return <Cart val={val} index={index} remove={removeFromCart} />
            })}
            <h5  id='total'>TOTAL: {totalSum()}</h5>
            <button id='buy' onClick={() => { purchase() }}>BUY</button>
          </div>
        </div>
      </div>

      <div id='buyDiv'>
        <Purchase />
      </div>
    </div>
  );
}

export default App;
