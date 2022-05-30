import React from "react";
import { Box, Image,  Text ,Stack,Tag,TagLabel,Heading} from "@chakra-ui/react";
const Product = ({pr}) => {
 

  return (
    <Stack data-cy="product">
      <Image 
      src={pr.imageSrc}
      data-cy="product-image" />
      <Text data-cy="product-category">{pr.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{pr.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{pr.title}</Heading>
      <Box data-cy="product-price">{pr.price}</Box>
    </Stack>
  );
};

export default Product;