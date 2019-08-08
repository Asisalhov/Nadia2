import React from "react";
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";

import path from "./path.svg";

function SignUp() {
  return (
    <Container fluid>
      <Row>
        <Col className="login_card login_sidebar">
          <img src={path} alt="path" className="login_path" />
        </Col>
        <Col className="login_card d-flex flex-column justify-content-center align-items-center bg-white">
          <div className="text-center pb-4">
            <h2 className="login_title">Nadia 2.0</h2>
            <p className="login_sub_title">
              Please complete to create your account.
            </p>
          </div>
          <form className="login_container">
            <FormGroup className="d-flex justify-content-between">
              {/* <Label>Username</Label> */}
              <Input
                type="text"
                placeholder="First Name"
                className="login_input login_input_inline "
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="login_input login_input_inline "
              />
            </FormGroup>
            <FormGroup>
              {/* <Label>Username</Label> */}
              <Input
                type="text"
                placeholder="Username"
                className="login_input"
              />
            </FormGroup>
            <FormGroup>
              {/* <Label>Username</Label> */}
              <Input type="email" placeholder="Email" className="login_input" />
            </FormGroup>
            <FormGroup>
              {/* <Label>Password</Label> */}
              <Input
                type="Password"
                placeholder="Password"
                className="login_input"
              />
            </FormGroup>
            <FormGroup>
              {/* <Label>Password</Label> */}
              <Input
                type="Password"
                placeholder="Confirm Password"
                className="login_input"
              />
            </FormGroup>
            <div className="mt-5 text-center">
              <Button className="px-5 py-2 login_btn mx-auto ">Sign Up</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
