import { Box, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import Languages from "./Languages";
import Output from './Output';

const Codeeditor = () => {
  const [selectedlanguage, setselectedlanguage] = useState("javascript");
  const [version, setversion] = useState("1.32.3")
  const onselect = (item) => {
    setselectedlanguage(item.language);
    setversion(item.version);
  };
  const [code, setcode] = useState("");
  return (
    <Box>
      <HStack flexDirection={{
        base:"column",
        md:"row"
      }} spacing={4}>
        <Box w={{
          base:"90%",
          md:"50%"
        }}>
          <Languages selectedlanguage={selectedlanguage} onselect={onselect} />
          <Editor
            height="70vh"
            theme="vs-dark"
            language={selectedlanguage}
            defaultValue="// some comment"
            value={code}
            onChange={(value) => setcode(value)}
          />
        </Box>
        <Output code={code} selectedlanguage={selectedlanguage} version={version} />
      </HStack>
    </Box>
  );
};

export default Codeeditor;
