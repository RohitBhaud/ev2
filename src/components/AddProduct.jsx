import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button,useDisclosure,Input,Radio,RadioGroup,Select } from '@chakra-ui/react'
import axios from "axios";


const AddProduct = ({total}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  
const [detol,setDetol]=React.useState({});




  const onSubmit = (e) => {
     axios.post('http://localhost:8080/products',detol).then((res)=>{
        console.log(res)
        setDetol(res)
      }
    ).catch((err)=>{
      console.log(err)
    }
    )
  }
  const handleChange = (e) => {
    setDetol({
      ...detol,
      [e.target.name]: e.target.value
    })
  }
  

  

  return (
    <>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">Add Products</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" placeholder="Title"  onChange={handleChange}  />
          <Select data-cy="add-product-category" onChange={handleChange} name="Category" >
             <option data-cy="add-product-category-shirt" value="Shirt">Shirt</option>
             <option data-cy="add-product-category-pant" value="Pant">Pant</option>
           <option data-cy="add-product-category-jeans" value="Jeans">Jeans</option>
           </Select>
          <RadioGroup data-cy="add-product-gender">
            {/* <Radio data-cy="add-product-gender-male" name="Gender" value="Male" onChange={handleChange}>male</Radio>
            <Radio data-cy="add-product-gender-female"onChange={handleChange}>female</Radio>
            <Radio data-cy="add-product-gender-unisex">others</Radio> */}


            <Radio data-cy="add-product-gender-male" name="Gender" value="Male" onChange={handleChange}>male</Radio>
             <Radio data-cy="add-product-gender-female" name="Gender" value="Female" onChange={handleChange}>female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="Gender" value="Unisex" onChange={handleChange}>others</Radio>



          </RadioGroup>
          <Input data-cy="add-product-price" text="number" name="Price" placeholder="price" />
          <Button data-cy="add-product-submit-button" onClick={onSubmit}>POST</Button>
        </ModalBody>
        </ModalContent>
      </Modal>

    </>
  );
};



export default AddProduct;



