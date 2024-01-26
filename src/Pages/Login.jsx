import React, { useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap';


const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
   
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      let newData = {
       
        email,
        password,
       
      };
  
  
    axios.post('http://localhost:8080/Person/login', newData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }

    return (
        <>
            <div className=' bg-primary'style={{height:'90vh'}}>
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={5}>
                                        <Card className="shadow-lg border-0 rounded-lg mt-5">
                                            <Card.Header>
                                                <h3 className="text-center font-weight-light my-4">Login</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Group className="mb-3">
                                                        <FloatingLabel controlId="inputEmail" label="Email address">
                                                            <Form.Control type="email" placeholder="name@example.com"
                                                            value={email}
                                                            onChange={(e) => setemail(e.target.value)}
                                                            required />
                                                        </FloatingLabel>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <FloatingLabel controlId="inputPassword" label="Password">
                                                            <Form.Control type="password" placeholder="Password"
                                                            value={password}
                                                            onChange={(e) => setpassword(e.target.value)}
                                                            required  />
                                                        </FloatingLabel>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Check
                                                            type="checkbox"
                                                            id="inputRememberPassword"
                                                            label="Remember Password"
                                                        />
                                                    </Form.Group>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        {/* <a className="small" href="password.html"> */}
                                                        <a className="small" href="/pass">
                                                            Forgot Password?
                                                        </a>

                                                        <Button variant="primary" href="/register">
                                                            Login
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </Card.Body>
                                            <Card.Footer className="text-center py-3">
                                                <div className="small">
                                                    <a href="/Createaccount">Need an account? Sign up!</a>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
\
        </>
    );
}


export default Login;



