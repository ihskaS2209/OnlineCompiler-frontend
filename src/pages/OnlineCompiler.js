import React, { useState } from "react";
import axios from "axios";
import "../styles/Compiler.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Editor from "@monaco-editor/react";
import { Output } from "../components/Output";
import Navigation from "../components/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Navbar from "react-bootstrap/Navbar";
import { defaultCode } from "../languages/code";

export const OnlineCompiler = () => {
  const [theme, setTheme] = useState("vs-dark");
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("white");
  const [editorValue, setValue] = useState("");
  const [output, setOutput] = useState("");

  const [changes, setChanges] = useState({
    language: "javascript",
    defaultvalue: defaultCode.javascript,
  });
 console.log(changes.defaultvalue)

  const setLanguage = (e) => {
    let lang = e.target.value;
    let defaultVal = defaultCode[lang]
    setChanges({
      language: lang,
      defaultvalue: defaultVal})
  };

  function handleEditorChange(value, event) {
    setValue(value);
  }

  function toggleTheme() {
    setColor(color === "white" ? "black" : "white");
    setTheme(theme === "light" ? "vs-dark" : "light");

    setFont(font === "black" ? "white" : "black");
  }

  const handleRun = async () => {
    const valueObj = {
      language: changes.language,
      code: editorValue,
    };

    try {
      //extract the data out of this
      const { data } = await axios.post(
        process.env.REACT_APP_RUN_URL,
        valueObj
      );
      setOutput(data.output);
    } catch (err) {
      // let Error = err.response.data.e
      setOutput(err.response.data.e);    
    }
  };


  return (
    <>
      <div className="App">
        <Container className="grid">
          <Row>
            <Col sm={8}>
              {
                <Navigation
                  className="navigation"
                  fn={toggleTheme}
                  label={
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        className="submit-btn"
                        onClick={handleRun}
                        label="Run"
                      >
                        Run
                      </Button>
                    </Stack>
                  }
                  lbl={
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Language</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={changes.language}
                        label="Language"
                        onChange={setLanguage}
                      >
                        <MenuItem value="cpp">C++</MenuItem>
                        <MenuItem value="python">Python</MenuItem>
                        <MenuItem value="javascript">JavaScript</MenuItem>
                      </Select>
                    </FormControl>
                  }
                />
              }
            </Col>
            <Col className="out" sm={4}>
              {
                <Navbar className="out-back" bg="light" variant="light">
                  <Container>
                    <Navbar.Brand>OUTPUT</Navbar.Brand>
                  </Container>
                </Navbar>
              }
            </Col>
          </Row>

          <Row>
            <Col sm={8} className="col2">
              {
                <Editor
                  className="editor"
                  language={changes.language}
                  theme={theme}
                  value={changes.defaultvalue}
                  onChange={handleEditorChange}
                />
              }
            </Col>

            <Col sm={4} className="output-border">
              {
                <Output
                  cssclass="output"
                  label={output}
                  bkcolor={color}
                  fontcolor={font}
                />
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

