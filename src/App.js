import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donation from "./pages/Donation";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/donate" element={<Donation />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
