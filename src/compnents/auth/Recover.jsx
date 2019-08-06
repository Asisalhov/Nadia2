import React from "react";
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";

import path from "./path.svg";
function Recover() {
  return (
    <Container fluid>
      <Row>
        <Col className="login_card login_sidebar">
          <img src={path} alt="path" className="login_path" />
        </Col>
        <Col className="login_card d-flex flex-column justify-content-center align-items-center">
          <div className="text-center pb-4">
            <h2 className="login_title">Nadia 2.0</h2>
            <p className="login_sub_title">
              Enter your email and we send you a password reset link.
            </p>
          </div>
          <form className="login_container">
            <FormGroup>
              {/* <Label>Username</Label> */}
              <Input type="email" placeholder="Email" className="login_input" />
            </FormGroup>

            <div className="mt-5 text-center">
              <Button className="px-4 py-2 login_btn mx-auto">
                Send request
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Recover;
