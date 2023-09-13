import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';
import Swal from 'sweetalert2';

const SingleProduct = ({product}) => {
  const cart = useContext((CartContext));

  const addToCart = (product)=>{

    let checkItem = cart.cartItems.find((item) => item.id == product.id);
    if(checkItem){
      let newItem = cart.cartItems.map((item)=>{
        if(item.id == product.id){
          item.qty = item.qty + 1;
        }
        return item;
      })
      cart.setCartItems([...newItem]);
    }else{
      let oldItems = cart.cartItems;
      cart.setCartItems([...oldItems, {...product,qty:1}]);
      cart.setCount(cart.count + 1);
    };
    Swal.fire({
      icon: 'success',
      title: 'Added To Cart',
    })
    }
    
  return (
    <>
        <div className='col-lg-4'>
        <Card className='p-4'>
          <Card.Img variant="top" src={product.image} style={{width: "100%", height: "350px"}}/>
          <Card.Body>
            <Card.Title>{product.title.slice(0, 20) + " ..."}</Card.Title>
            <Card.Text>{product.description.slice(0, 50) + " ..."}</Card.Text>
            <p>
              <span className='badge bg-warning'>{product.price} $</span>
            </p>
            <Link to={`/products/${product.id}`}>
              <Button variant="primary" className='mx-2'>Show Details</Button>
            </Link>
            <Link>
              <Button variant="info" onClick={()=>addToCart(product)}>Add To Cart</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default SingleProduct
