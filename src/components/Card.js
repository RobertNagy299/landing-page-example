import {
    Heading,
    HStack,
    Image,
    Text,
    VStack,
    Card as ChakraCard,
    CardFooter,
    CardHeader,
    CardBody, Button
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <ChakraCard borderRadius={20} zIndex={1} minWidth={"300px"}>
          <CardHeader p={0}>
              <Image src={imageSrc} borderRadius={20} borderBottomRadius={5} width={"100%"} objectFit="cover"/>
          </CardHeader>
          <CardBody>
              <Heading as="h2" mb={5}>{title}</Heading>
              <Text>{description}</Text>
          </CardBody>
          <CardFooter>
            <Button p={0} _active={{fontWeight: 'bold', textDecoration: 'underline'}} _hover={{textDecoration: "underline"}} rightIcon={<FontAwesomeIcon icon={faArrowRight} size="1x" />} variant={"ghost"}><Text mb={1}>See more</Text></Button>
          </CardFooter>
      </ChakraCard>
  );
};

export default Card;
