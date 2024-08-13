import React from "react";
import { Avatar, Heading, VStack,Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Hello, I am Robert!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (

    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src={"https://i.pravatar.cc/150?img=7"} boxSize={"4xs"}></Avatar>
      <Text mb={10}>{greeting}</Text>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
