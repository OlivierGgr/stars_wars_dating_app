import React from 'react';
import Particles from 'react-particles-js';

import '../Style/signUpStyle.scss';
import '../Style/signUpPageBackground';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: 'Female',
            lookingFor: 'Female',
            homeworld: '',
            jedi: 'Yes',
            affiliation: 'Resistance',
            json: {}
        }
    }

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
        this.props.signUp(true)
    }

    render() {
        console.log('this.state: ', this.state)
        return (
            <div className='containerBody'>
                <div className='particlesContainer'>
                    <Particles
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        params={{
                            "particles": {
                                'shape': {
                                    'type': 'image',
                                    'image': {
                                        'src': require('../Image/heart.png'),
                                        'height': 10,
                                        'width': 10
                                    }
                                },
                                "number": {
                                    "value": 60,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1500
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "opacity": 0.02
                                },
                                "move": {
                                    "speed": 1,
                                    "out_mode": "out"
                                },
                                "size": {
                                    "value": 5,
                                    "anim": {
                                        "enable": true,
                                        "speed": 4,
                                        "size_min": 10,
                                        "sync": false
                                    }
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": false
                        }} />
                </div>
                <div className='formContainer'>
                    <Card className='formContainer'>
                        <Container maxWidth="sm">
                            <div>
                                <form noValidate className='formStyle'>
                                    <TextField
                                        onChange={this.handleChange}
                                        color='secondary'
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        name="firstName"
                                        autoComplete="firstName"
                                        autoFocus
                                    />

                                    <TextField
                                        onChange={this.handleChange}
                                        color='secondary'
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lastName"
                                    />

                                    <TextField
                                        color='secondary'
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Enter Password"
                                        type="password"
                                        id="password"
                                        autoComplete="password"
                                    />

                                    <TextField
                                        color='secondary'
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Confirm  Password"
                                        type="password"
                                        id="passwordConfirm"
                                        autoComplete="password"
                                    />

                                    <TextField
                                        onChange={this.handleChange}
                                        color='secondary'
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="age"
                                        label="Age"
                                        type="number"
                                        id="age"
                                        autoComplete="age"
                                    />

                                    <div>
                                        <FormControl component='fieldset' >
                                            <div className='alignField'>
                                                <FormLabel component='legend' className='label'>Gender</FormLabel>
                                                <RadioGroup
                                                    className='alignRadioButtons'
                                                    name='gender'
                                                    onChange={this.handleChange}>
                                                    <span>
                                                        <FormControlLabel
                                                            name='gender'
                                                            value='female'
                                                            control={<Radio />}
                                                            label='Female'
                                                        />
                                                    </span>
                                                    <span>
                                                        <FormControlLabel
                                                            name='gender'
                                                            value='male'
                                                            control={<Radio />}
                                                            label='Male'
                                                        />
                                                    </span>
                                                </RadioGroup>
                                            </div>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl component='fieldset' >
                                            <div className='alignField'>
                                                <FormLabel component='legend' className='label'>Looking For</FormLabel>
                                                <RadioGroup name='gender' onChange={this.handleChange} className='alignRadioButtons'>
                                                    <FormControlLabel
                                                        name='lookingFor'
                                                        value='female'
                                                        control={<Radio />}
                                                        label='Female'
                                                    />
                                                    <FormControlLabel
                                                        name='lookingFor'
                                                        value='male'
                                                        control={<Radio />}
                                                        label='Male'
                                                    />
                                                    <FormControlLabel
                                                        name='lookingFor'
                                                        value='both'
                                                        control={<Radio />}
                                                        label='Both'
                                                    />
                                                </RadioGroup>

                                            </div>
                                        </FormControl>
                                    </div>
{/* 
                                    <TextField
                                        onChange={this.handleChange}
                                        color='secondary'
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="homeworld"
                                        label="Homeworld"
                                        name="homeworld"
                                        type='text'
                                        autoComplete="homeworld"
                                    /> */}

                                    <div>
                                        <FormControl component='fieldset'  >
                                            <div className='alignField'>
                                                <FormLabel component='legend' className='label' name='jedi'>Jedi</FormLabel>
                                                <RadioGroup name='jedi' onChange={this.handleChange} className='alignRadioButtons'>
                                                    <FormControlLabel
                                                        name='jedi'
                                                        value='yes'
                                                        control={<Radio />}
                                                        label='Yes'
                                                    />
                                                    <FormControlLabel
                                                        name='jedi'
                                                        value='no'
                                                        control={<Radio />}
                                                        label='No'
                                                    />
                                                </RadioGroup>
                                            </div>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl component='fieldset'  >
                                            <div className='alignField'>
                                                <FormLabel component='legend' className='label'>Affiliation</FormLabel>
                                                <RadioGroup name='gender' onChange={this.handleChange} className='alignRadioButtons'>
                                                    <FormControlLabel
                                                        name='affiliation'
                                                        value='resistance'
                                                        control={<Radio />}
                                                        label='Resistance'
                                                    />
                                                    <FormControlLabel
                                                        name='affiliation'
                                                        value='empire'
                                                        control={<Radio />}
                                                        label='Empire'
                                                    />
                                                </RadioGroup>
                                            </div>
                                        </FormControl>
                                    </div>
{/* 
                                    <div>
                                        <input
                                            accept="image/*"
                                            className='uploadPhotoInput'
                                            id="outlined-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="outlined-button-file">
                                            <Button variant="outlined" component="span" className='uploadPhotoButton'>
                                                Upload profile photo
                                            </Button>
                                        </label>
                                    </div> */}

                                    <div>
                                        <Button
                                            variant='text'
                                            size='large'
                                            className='signUpButton'
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            onClick={this.handleSubmit}
                                        >
                                            Sign Up
                                       </Button>
                                    </div>
                                </form>
                            </div>
                        </Container>
                    </Card>
                </div>
            </div>
        );
    }
}

export default SignUp;