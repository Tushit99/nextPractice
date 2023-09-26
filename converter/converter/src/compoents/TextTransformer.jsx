import React, { useState } from "react";
import copy from "copy-to-clipboard";
import tree from "./tree.jpg";
import { Box, Button, Input, NumberInput, NumberInputField, Text, Textarea, useToast } from "@chakra-ui/react";

const TextTransformer = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [price, setPrice] = useState(0);
  const [percent, setPercent] = useState(30);
  const [priceout, setPriceOut] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const transformText = () => {
    setOutputText(inputText.toUpperCase());
    setInputText("");
  };

  const copyToClipboard = () => {
    copy(outputText);
    toast({
      title: "Text copyed Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const copyToClipboardpercent = () => {
    copy(priceout);
    toast({
      title: "price copyed Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  const handleprice = () => {
    let num = price * percent / 100
    let total = Number(price) + Number(num);
    setPriceOut(total);
  }


  return (
    <div>
      {/* <video autoPlay loop muted id="background-video">
        <source src={video} type="video/mp4" />
      </video> */}
      <img src={tree} id="background-video" alt="backimg" />
      <div className="mybox">
        <Box className="white_box">
          <h2>Text Transformer web </h2>
          <Box display={"flex"} alignItems={"center"} gap={"4px"} justifyContent={"center"} >
            <Input
              type="text"
              placeholder="Enter text"
              value={inputText}
              w={"400px"}
              border={"1px solid red"}
              onChange={handleInputChange}
            />
            <Box position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"} h={"50px"} w={110}>
              <Button
                bg={"unset"}
                color={"yellow"}
                border={"1px solid red"}
                className="hover_btn"
                _hover={{ backgroundColor: "black" }}
                onClick={transformText}>
                Transform
              </Button>
            </Box>
          </Box>
          <div>
            <h3>Output:</h3>
            <textarea
              className="outputbox"
              onClick={copyToClipboard}
              value={outputText}
              readOnly
            />
          </div>
        </Box>
        <Box className="white_box">
          <NumberInput value={price}>
            <NumberInputField onChange={(e) => setPrice(e.target.value)} />
          </NumberInput>

          <Text margin={0} padding={0}> Percent % </Text>
          <NumberInput value={percent}>
            <NumberInputField onChange={(e) => setPercent(e.target.value)} />
          </NumberInput>

          <Button onClick={handleprice} >Add {percent}%</Button>
          <div>
            <h3>Output:</h3>
            <Textarea
              className="outbox"
              onClick={copyToClipboardpercent}
              value={priceout}
              readOnly 
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default TextTransformer;
