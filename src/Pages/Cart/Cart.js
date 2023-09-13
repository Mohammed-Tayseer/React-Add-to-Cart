import React, { useContext } from 'react'
import { CartContext } from '../../store/CartContext';
import MainTitle from '../../Components/MainTitle/MainTitle';
import Swal from 'sweetalert2'

const Cart = () => {

  const cart = useContext(CartContext);

  const deleteItem = (id)=>{
    let newItem = cart.cartItems.filter((item) => item.id != id);
    cart.setCartItems([...newItem])
    Swal.fire('Item Deleted Successfully !')
    cart.setCount(cart.count - 1)
  }


  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-12'>
            <MainTitle title='Cart Page'/>
            {cart.cartItems.length ? (
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.cartItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.qty}</td>
                      <td><button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>Delete</button></td>
                    </tr>
                  )
                })}
                
              </tbody>
            </table> 
              ):(
              <h2 className='text-center p-3 my-3 text-red'>Cart Empty</h2>
              )}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
