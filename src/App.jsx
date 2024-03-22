import { Box } from "@chakra-ui/react";
import React from "react";
import Codeeditor from "./Components/Codeeditor";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Codeeditor />
      <Footer />
    </Box>
  );
};

export default App;
