
import React, { useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


export default function PasswordRecovery() {

    const [email, setemail] = useState('');
   
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      let newData = {
       
        email,
       
       
      };
          // const handleResetPassword = () => {
    //     // Implement your logic for password reset here
    //     console.log('Reset password for email:', email);
    // };
  
  
    axios.post('http://localhost:8080/Recovery/adds', newData)
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
                                                <h3 className="text-center font-weight-light my-4">Password Recovery</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="small mb-3 text-muted">
                                                    Enter your email address and we will send you a link to reset your password.
                                                </div>
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Floating className="mb-3">
                                                        <Form.Control id="inputEmail" type="email" placeholder="name@example.com"
                                                         value={email}
                                                         onChange={(e) => setemail(e.target.value)}
                                                         required />
                                                        <label htmlFor="inputEmail">Email address</label>
                                                    </Form.Floating>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <a className="small" href="/login">
                                                            Return to login
                                                        </a>
                                                        <Button variant="primary" href="/login">
                                                            Reset Password
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </Card.Body>
                                            <Card.Footer className="text-center py-3">
                                                <div className="small">
                                                    <a href="/login" >Need an account? Sign up!</a>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </main>
                    </div>
                    
                </div>
            </div>
        </>
    )
}



// export {Footer}