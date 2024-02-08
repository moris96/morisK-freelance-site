import React from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from "./pages/home/Home";
import About from "./pages/about/About";

import Navbar from "./components/navbar/Navbar";
import "./Transition.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Container>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </>
  );
}

export default App;
