import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex,Grid} from '@chakra-ui/react'
import React, { useEffect,useState } from "react";
import axios from "axios"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [product, setProduct] = useState([]);

  useEffect(()=>{
      getdata()
  },[])
  const getdata=()=>{
    axios.get('http://localhost:8080/products').then((res)=>{
      console.log(res.data)
      setProduct(res.data)
    }).catch((err)=>{
      console.log(err)
      })
    }
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct total={getdata}/>
      <Grid>{/* List of Products */}
        {product.map((el)=>(
          <Product key={el.id} pr={el}/>
        ))}
      {/* <Product/> */}
      </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;