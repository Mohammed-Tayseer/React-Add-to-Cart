import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../store/CartContext';
import Swal from 'sweetalert2';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(false);
  const cart = useContext(CartContext);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + params.productId)
    .then((data => {
      setProduct(data.data)
    }));
  }, []);
    
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
    <div className='container'>
      <div className='row mt-5'>
        {product ? (
          <div className='col-lg-5 mx-auto'>
          <Card className='p-4'>
            <Card.Img variant="top" src={product.image} style={{width: "100%", height: "350px"}}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <p>
                <span className='badge bg-warning'>{product.price} $</span>
              </p>
              <Link>
                <Button variant="info" onClick={()=>addToCart(product)}>Add To Cart</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        ) : ( 
          "Not Found"
          )}
      </div>
    </div>
    </>
  );
}

export default Product