import React from 'react'
import { Button, Col,Container,Row } from 'react-bootstrap'
import img from '../Assets/Images/emp.png'
import '../Assets/CSS/Home.css'

export default function Home() {
  return (
  <>
  <Container fluid>
  <Row>
    <Col lg={12}>
      <img src={img} style={{height:'95vh', width:"98vw"}} />
      <Button type='submit' className='homebtn' href="/login">Login</Button>
    </Col>


  </Row>
  </Container>
  </>
  )
}
