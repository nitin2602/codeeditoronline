import { Box, Code, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <HStack justifyContent="center" mt={5}>
      <Text>Made with ❤️ by</Text>
      <Link
        href="https://www.linkedin.com/in/nitin-tripathi-160742253/"
        isExternal
      >
        Nitin Tripathi <Icon as={FaExternalLinkAlt} />
      </Link>
    </HStack>
  );
};

export default Footer;
