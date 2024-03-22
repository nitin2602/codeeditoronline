import { Box, Button, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Output = ({ code, selectedlanguage, version }) => {
  const [output, setoutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  
  const runfunction = async () => {
    const sourcecode = code;

    try {
      setIsLoading(true);
      const data = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: selectedlanguage,
        version: version,
        files: [
          {
            content: sourcecode,
          },
        ],
      });

      data.data.run.stderr ? setIsError(true) : setIsError(false);
      console.log(isError);

      setoutput(data.data.run.output.split("\n")); // Assuming you want to log the response data
    } catch (error) {
      console.log("ERROR:", error); // Log the error for debugging purposes
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w={{
      base:"90%",
      md:"50%"
    }}>
      {" "}
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        isLoading={isLoading}
        onClick={() => runfunction()}
        variant="outline"
        colorScheme="blue"
        mb={4}
      >
        Run Code
      </Button>
      <Box
        height="70vh"
        p={2}
        border="1px solid"
        color={isError ? "red.400" : ""}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;
