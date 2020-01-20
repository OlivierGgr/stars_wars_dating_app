import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class MessagesComponent extends Component {

    render() {
        return (
            <div className="snippets">
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
              <div>
                <div className="panel" id="chat">

                  <div className="panel-body">
                    <div className="chats">
                      <div className="chat">
                        <div className="chat-avatar">
                          <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
                            <img src={this.props.userImage} alt="..."/>
                            <i></i>
                          </a>
                        </div>
                        <div className="chat-body">
                          <div className="chat-content">
                            <p>
                              sup boi?
                            </p>
                            <time className="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-avatar">
                          <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                            <img src={require(`./TFA2.jpg`)} alt="..."/>
                            <i></i>
                          </a>
                        </div>
                        <div className="chat-body">
                          <div className="chat-content">
                            <p>just chillin'</p>
                            <time className="chat-time" datetime="2015-07-01T11:39">11:39:57 am</time>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-avatar">
                          <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
                            <img src={this.props.userImage} alt="..."/>
                            <i></i>
                          </a>
                        </div>
                        <div className="chat-body">
                          <div className="chat-content">
                            <p>
                              aight
                            </p>
                            <time className="chat-time" datetime="2015-07-01T11:40">11:40:10 am</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <form className='formContainer'>
                        <input type="text" className="form-control inputForm" placeholder="Say something"/>
                        <button className='btnSend'>Send</button>
                  </form>
                </div>
              </div>
            </div>
            </div>
        )
    
    }}

    export default MessagesComponent;