import React, {Fragment, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {Box, Flex, HStack, Spacer} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor)  => {

    const target = anchor.target.toString()
    const splitTarget = target.split('#')
    //alert(splitTarget[1]);
    const value = splitTarget[1]
    const id = `${value}-section`;
    //alert(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
        zIndex={10}
      flexWrap="wrap"
      flex={1}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Flex color="white" maxWidth="1280px" margin="0 auto"
        flexWrap="wrap"
      >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flex={1}
          flexWrap={"wrap"}
          maxWidth={"100vw"}
        >
          <nav>

            <HStack gap={{base: 4, lg: 4, xl: 4}}>
              {
                socials.map(data => {
                  return (
                      <Fragment key={data.url}>
                        <a href={data.url}>
                          <FontAwesomeIcon
                            icon={data.icon}
                            size="2x"
                          />
                        </a>
                      </Fragment>

                )
                })
                }


                </HStack>
          </nav>
          <Spacer flex={1}/>
          <nav>
            <HStack spacing={8}>
              <a href="/#contactme" onClick={handleClick}>Contact Me</a>
              <a href="/#projects" onClick={handleClick} >Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Header;
