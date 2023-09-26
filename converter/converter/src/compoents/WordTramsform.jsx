import React, { useState } from "react";
import copy from "copy-to-clipboard";
import tree from "./tree.jpg";
import "../App.css";
import { Box, Button, Input, useToast } from "@chakra-ui/react";

const WordTramsform = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const toast = useToast();

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const transformText = () => {

        let words = inputText.split(' ');

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        setOutputText(words.join(" "));

        setInputText("");
    }

    const copyToClipboard = () => {
        copy(outputText);
        toast({
            title: "Text copyed Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };




    return (
        <div>
            <img src={tree} id="background-video" alt="backimg" />
            <div>
                <Box className="white_grid">
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
                                onClick={transformText}>
                                change
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
            </div>
        </div>
    )
};

export default WordTramsform;
