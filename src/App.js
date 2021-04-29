import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Header from "./components/Header_New";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Contact from "./components/Contact";
import Menus from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() { 

  const btnHandle = () =>{
    toast.error("done", {
      position:"top-center",
    });
  };

  return (
    <Router>
    <div>
     <Container >
        <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>

            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-courses" component={AllCourses} exact/>
              <Route path="/contact" component={Contact} exact/>

            </Col>
          </Row>
      </Container>
    </div>
    </Router>
  );
};


export default App;
