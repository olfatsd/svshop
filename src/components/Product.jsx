import React from 'react'
import './style.css'
import addtocart from '../images/addtocart.jfif';



export default function Product(props) {
  return (
    <div className='productDiv'>
      <table>
        <tr>
          <td><img className='img' src={props.val.img} /></td>
          <td><h3>Product : {props.val.name}</h3></td>
          <td><h3>Price : {props.val.price}</h3></td>
          <td><img id='addtocart' src={addtocart} onClick={() => {props.add(props.index)}}/></td>
        </tr>
      </table>
        
        
        
        
    </div>
  )
}
