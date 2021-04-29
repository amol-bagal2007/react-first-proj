import React from 'react';
import {Card, CardBody} from "reactstrap"
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css"

function Header() {

    return (
        
        <div className="my-2">
            <Card className="bg-warning my=5">
                <CardBody>
                    <h1 className="text-center">Welcome to Programming Courses</h1>
                </CardBody>
            </Card>
            
      </div>
    );    
}

export default Header;