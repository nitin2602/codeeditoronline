import { Box, Button, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Languages = ({ selectedlanguage, onselect }) => {
  const [languages, setlanguages] = useState([]);
  const call = () => {
    axios.get("https://emkc.org/api/v2/piston/runtimes").then((res) => {
      
      setlanguages(res.data);
    });
  };
  useEffect(() => {
    call();
  }, []);
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          {selectedlanguage}
        </MenuButton>
        <MenuList maxHeight="25rem" overflow="auto" scrollBehavior="smooth">
          {languages.map((item, index) => (
            <MenuItem
              position="relative"
              onClick={() => onselect(item)}
              bg={item.language === selectedlanguage ? "gray.300" : ""}
              fontWeight={item.language === selectedlanguage ? "medium" : ""}
              _hover={{
                color: "#0f0a19",
                bg: "gray.200",
                fontWeight: "medium",
              }}
              key={index}
            >
              {item.language}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="12px">
               {item.version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Languages;
