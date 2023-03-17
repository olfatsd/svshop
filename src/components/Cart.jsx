import React from 'react'
import './style.css'
import removefromcart from '../images/removefromcart.jfif';


export default function Cart(props) {
  return (
    <div>
      <table>
        <tr>
          <td><img className='cartimg' src={props.val.img} /></td>
          <td><h3>Product : {props.val.name}</h3></td>
          <td><h3>Price : {props.val.price}</h3></td>
          <td><img id='addtocart' src={removefromcart} onClick={() => {props.add(props.index)}}/></td>
        </tr>
      </table>   
    </div>
  )
}
