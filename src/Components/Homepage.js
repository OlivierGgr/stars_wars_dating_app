import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap';
import '../../src/App.css';



class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            alive: '',
            gender: '',
            lookingFor: '',
            homeworld: '',
            jedi: '',
            affiliation: '',
            json: {}
        }
    }

    // validateJson(json) {
    //     let validJson

    //     try {
    //         validJson = JSON.stringify(this.state.json, null, 2)
    //     } catch (e) {
    //         throw e
    //     }

    //     return validJson
    // }

    // loadJson = () => {
    //     const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    //     this.setState({ json })
    //     console.log(json);
    // }

    // saveJson = () => {
    //     const validJson = this.validateJson(this.state.json)

    //     if (!validJson) return;

    //     window.localStorage.setItem(
    //         LOCALSTORAGE_KEY,
    //         validJson
    //     )
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log('this.state: ', this.state)
        this.setState({
            json: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                //    alive: this.state.alive,
                gender: this.state.gender,
                lookingFor: this.state.lookingFor,
                homeworld: this.state.homeworld,
                jedi: this.state.jedi,
                affiliation: this.state.affiliation,
            }
        })
        setTimeout(
            () => this.sendData(),
            1000
        )
    }

    sendData = () => {
        this.props.saveJson(this.state.json);
    }

    render() {
        console.log('this.state: ', this.state)
        return (
            <div class="container">
                <Card className='cardContainer'>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formGroupFirstName" >
                                <Form.Label><h4>First Name</h4></Form.Label>
                                <Form.Control type="text" size='lg' name="firstName" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formGroupLastName">
                                <Form.Label><h4>Last Name</h4></Form.Label>
                                <Form.Control type="text" size='lg' name='lastName' onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formGroupPassword">
                                <Form.Label><h4>Password</h4></Form.Label>
                                <Form.Control type="password" size='lg' />
                            </Form.Group>

                            <Form.Group controlId="formGroupConfirmPassword">
                                <Form.Label><h4>Confirm Password</h4></Form.Label>
                                <Form.Control type="password" size='lg' />
                            </Form.Group>

                            <Form.Group controlId="formGroupAge">
                                <Form.Label><h4>Age</h4></Form.Label>
                                <Form.Control type="number" size='lg' name='age' onChange={this.handleChange} />
                            </Form.Group>

                            {/* <div className='sectionChoose'>
                            <h4>Alive</h4>
                            <div>
                                <input type="radio" className='radio' name='alive' value='yes' onChange={this.handleChange} />  <label htmlFor='yesLabel' className='sectionChooseText'>Yes</label>
                                <input type="radio" className='radio' name='alive' value='no' onChange={this.handleChange} />  <label htmlFor='noLabel' className='sectionChooseText'>No</label>
                            </div>
                        </div> */}

                            <div className='sectionChoose'>
                                <h4>Gender</h4>
                                <div>
                                    <input id="maleLabel" type="radio" name="gender" value="male" className='radio' onChange={this.handleChange} />  <label htmlFor="maleLabel" className='sectionChooseText'>Male</label>
                                    <input id="femaleLabel" type="radio" name="gender" value="female" className='radio' onChange={this.handleChange} />  <label htmlFor="femaleLabel" className='sectionChooseText'>Female</label>
                                </div>

                            </div>

                            <div className='sectionChoose'>
                                <h4>Looking For</h4>
                                <div>
                                    <input type="radio" name="lookingFor" value="male" className='radio' onChange={this.handleChange} />  <label htmlFor="maleLabel" className='sectionChooseText'>Male</label>
                                    <input type="radio" name="lookingFor" value="female" className='radio' onChange={this.handleChange} />  <label htmlFor="femaleLabel" className='sectionChooseText'>Female</label>
                                    <input type="radio" name="lookingFor" value="both" className='radio' onChange={this.handleChange} />  <label htmlFor="bothLabel" className='sectionChooseText'>Both</label>
                                </div>
                            </div>

                            {/* <Form.Group controlId="formGroupHomeworld">
                            <Form.Label><h4>Homeworld</h4></Form.Label>
                            <Form.Control as="select" size='lg'>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group> */}

                            <Form.Group controlId="formGroupAge">
                                <Form.Label><h4>Homeworld</h4></Form.Label>
                                <Form.Control type="text" size='lg' name='homeworld' onChange={this.handleChange} />
                            </Form.Group>

                            <div className='sectionChoose'>
                                <h4>Jedi</h4>
                                <div>
                                    <input type="radio" name="jedi" value="yes" className='radio' onChange={this.handleChange} />  <label htmlFor='yesLabel' className='sectionChooseText'>Yes</label>
                                    <input type="radio" name="jedi" value="no" className='radio' onChange={this.handleChange} />  <label htmlFor='noLabel' className='sectionChooseText'>No</label>
                                </div>
                            </div>

                            <div className='sectionChoose'>
                                <h4>Affiliation</h4>
                                <div>
                                    <input type="radio" name="affiliation" value="resistance" className='radio' onChange={this.handleChange} />  <label htmlFor='' className='sectionChooseText'>Resistance</label>
                                    <input type="radio" name="affiliation" value="empire" className='radio' onChange={this.handleChange} />  <label htmlFor='' className='sectionChooseText'>Empire</label>
                                </div>
                            </div>

                            <div className='containerButtons'>
                                <Button variant="secondary" className='button'>Upload Image</Button>
                                <Button variant="secondary" className='button'>Link Facebook</Button>
                                <Button variant="primary" className='button' onClick={this.handleSubmit}>Sign Up</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <div class='soldier'></div>
            </div>



        );
    }
}

export default Homepage;