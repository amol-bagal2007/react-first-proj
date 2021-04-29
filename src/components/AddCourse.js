import React, { Fragment, useEffect } from 'react';

import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';


const AddCourse=()=>{

    useEffect(() => {
        document.title = "Add course";

    },[]);

    return <Fragment>
        <h1 className="text-center my=3">Fill course details</h1>
        <Form>
            <FormGroup>
                <Label>Course Id</Label>
                <Input 
                    type="text" 
                    placeholder="Enter here" 
                    name="UserId" 
                    id="UserId"></Input>
            </FormGroup>

            <FormGroup>
                <Label for="title">Course title</Label>
                <Input type="text" placeholder="Enter title here" id="title"></Input>
            </FormGroup>

            <FormGroup>
                <Label for="description">Course Description</Label>
                <Input type="text-area" placeholder="Enter description here" id="description"> </Input>
            </FormGroup>

            <Container className="text-center">
                <Button color="success">Add Course</Button>
                <Button color="warning ml-3">Clear</Button>
            </Container>

        </Form>

    </Fragment>

};

export default AddCourse;