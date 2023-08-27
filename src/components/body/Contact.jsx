import React, { Component, Fragment } from 'react'
import { Container, Row, Form, Button, Col, FloatingLabel } from 'react-bootstrap'

export class Contact extends Component {

    constructor(){
        super();
        this.state={
            firstname: "",
            lastname: "",
            mobile: "",
            email: "",
            agree: false,
            message: ""
        }
    }

    handleInputChange = e =>{
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        })
    }
    hanleSubmit = e =>{
        console.log(this.state);
        e.preventDefault();
    }

  render() {
    document.title = "Contact Page"
    return (
      <div>
        <Fragment>
            <Container>
            <h1>Send us your FeedBack</h1>
            <Form onSubmit={this.hanleSubmit}>
                <Row className="mb-3">
                <Form.Group as={Col}>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='firstname' placeholder="First Name" value={this.state.firstname}
         onChange={this.handleInputChange} />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastname' placeholder="Last Name" value={this.state.lastname} 
        onChange={this.handleInputChange} />
      </Form.Group>
            </Row>

        <Row className="mb-3">
                <Form.Group as={Col}>
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="phone" name='mobile' placeholder="Mobile" value={this.state.mobile} 
        onChange={this.handleInputChange} />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter Email" value={this.state.email} 
        onChange={this.handleInputChange} />
      </Form.Group>
    </Row>

    <Form.Label>Message</Form.Label>
      <FloatingLabel controlId="floatingTextarea" label="Message"className="mb-3">
        <Form.Control as="textarea" name='message' placeholder="Leave a Message here" value={this.state.message} 
        onChange={this.handleInputChange}/>
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='agree' label="May we contact you?" checked={this.state.agree} 
        onChange={this.handleInputChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Container>
        </Fragment>
      </div>
    )
  }
}

export default Contact
