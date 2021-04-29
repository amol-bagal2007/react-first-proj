import React, { useEffect } from 'react';
import { jumbotron, Container, Button } from "reactstrap";

const Home = () => {

    useEffect(() => {
        document.title = "Home";

    },[]);

    return (
        <div className="jumbotron" align="center">
            <h1 >LearnCode with Amol</h1>
                <p class="lead">This is entirely being developed using react and bootstrap js </p>
                <Button color="primary" position="center" outline>Start Learning </Button>
                
        </div>
    );
};

export default Home;

