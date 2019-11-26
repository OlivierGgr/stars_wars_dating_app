import React, { Component } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



class MessagesComponent extends Component {

    render() {
        return (
            <div className=" snippets" >
            <div >
              <div className="panel" id="chat">

                <div className="panel-body">
                  <div className="chats">
                    <div className="chat">
                      <div className="chat-avatar">
                        {/* <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane"> */}
                          <img src={this.props.userImage} alt="..."/>
                          {/* <i></i>
                        </a> */}
                      </div>
                      <div className="chat-body">
                        <div className="chat-content">
                          <p>
                            &#x2661; &#x2661; &#x2661; 
                            <br/>What is your name?
                          </p>
                          <time className="chat-time" dateTime="2015-07-01T11:37">11:37:08 am</time>
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
                          <p>R2D2</p>
                          <time className="chat-time" dateTime="2015-07-01T11:39">11:39:57 am</time>
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
                            You are really cute <span className='smile'>&#x263B;</span>
                          </p>
                          <time className="chat-time" dateTime="2015-07-01T11:40">11:40:10 am</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <form className="container">
                    {/* <div className="input-group"> */}
                      <input type="text" className="form-control" placeholder="Say something"/>
                      {/* <span className="input-group-btn"> */}
                        {/* <button className="btn pull-center btn-primary btnSend" type="button">Send</button> */}
                        <button className='btnSend'>Send</button>

                      {/* </span> */}
                    {/* </div> */}
                  </form>
                </div>
              </div>
            </div>
            </div>
        )
    
    }}

    export default MessagesComponent;