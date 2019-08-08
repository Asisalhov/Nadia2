import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  CustomInput,
  Button
} from "reactstrap";

import path from "./path.svg";

function SignIn() {
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
              Welcome back! Please login to your account.
            </p>
          </div>
          <form className="login_container">
            <FormGroup>
              {/* <Label>Username</Label> */}
              <Input
                type="text"
                placeholder="Username"
                className="login_input"
              />
            </FormGroup>
            <FormGroup>
              {/* <Label>Password</Label> */}
              <Input
                type="Password"
                placeholder="Password"
                className="login_input"
              />
            </FormGroup>
            <div className="mt-4">
              <FormGroup className="d-flex justify-content-between">
                <CustomInput
                  type="checkbox"
                  label="Remember Me"
                  id="remember"
                />
                <Link className="login_forget_password">Forget Password</Link>
              </FormGroup>
              <Button className="px-5 py-2 login_btn">LogIn</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
