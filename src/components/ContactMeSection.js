import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack, Spinner
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();




  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: (values) => {


      console.log(values)
      submit('http://localhost:3000',values)
      console.log(response)
    },

    validationSchema: Yup.object({
      firstName: Yup.string().trim().required('Name is required'),
      email: Yup.string().trim().email("Please enter a valid email address").required('Email is required'),
      type: Yup.string().optional(),
      comment: Yup.string().trim().required('Comment is required').min(25, 'Comment has to be at least 25 characters long'),
    }),
  });

  const selectOptionStyle= {
    color:'gray',

  }
  const [submitCount, setSubmitCount] = useState(0)
  useEffect(() => {
    const errorKeys = Object.keys(formik.errors);
//   console.log(errorKeys)
    if (errorKeys.length) {
      const firstElement = document.getElementById(`${errorKeys[0]}`);
      const yOffset = -100;
      const y = firstElement.getBoundingClientRect().top + window.scrollY + yOffset;

      if (firstElement !== document.activeElement) {

       window.scrollTo({top: y, behavior: "smooth"});

      }
    }
  }, [submitCount, formik.errors]);

  useEffect(() => {
    if(!isLoading && response) {
      onOpen(response.type, response.message)
      if(response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response,isLoading]);
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w={{base: '100vw', lg: '80vw'}} p={{base: 5, md:16, lg: 24}} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={1} rounded="md" w="100%">
          <form onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit()
          }}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName &&formik.errors.firstName.length > 1}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <FormErrorMessage name="firstName">
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email && formik.errors.email.length > 1}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"

                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                <FormErrorMessage name="email">{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                >
                  <option style={selectOptionStyle}  value="hireMe">Freelance project proposal</option>
                  <option style={selectOptionStyle} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={selectOptionStyle} value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment && formik.errors.comment.length > 1}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                <FormErrorMessage name="comment">
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button leftIcon={isLoading && <Spinner/>} type="submit" colorScheme="purple" width="full" onClick={() => {
                setSubmitCount(submitCount + 1)
              //  console.log(submitCount)
              }}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
