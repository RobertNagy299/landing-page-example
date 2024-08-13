import React, {Fragment, useEffect, useRef, useState} from "react";
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

    const yOffset = 0;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    if (element) {
     window.scrollTo({top: y, behavior: "smooth"});
    }
  };

  const [lastScrollTop, setlastScrollTop] = useState(0);
  const navbarBoxRef = useRef(null)



  useEffect( () => {

    const boxref = navbarBoxRef.current;

    const handleScroll = () => {
      let st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

      if (st > lastScrollTop) {
        // downscroll code
        //console.log("scrolling down")
        boxref.style.transform = "translateY(-200px)"

      } else if (st < lastScrollTop) {
        // upscroll code
        boxref.style.transform= "translateY(0px)"
        //console.log('scrolling up')
      } // else was horizontal scroll
      let newLastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      setlastScrollTop(newLastScrollTop)
    }
    window.addEventListener('scroll', handleScroll)

    return () => (
        window.removeEventListener('scroll', handleScroll)
    )
  }, [lastScrollTop])

  return (
    <Box
        ref={navbarBoxRef}
        zIndex={10}
      flexWrap="wrap"
      flex={1}
      position="fixed"
      top={0}
      left={0}
      right={0}
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
          flexWrap="wrap"
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
