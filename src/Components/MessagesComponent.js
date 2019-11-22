import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class MessagesComponent extends Component {

    render() {
        return (
            <div class="container bootstrap snippets" >
            <div class="col-md-7 col-xs-12 col-md-offset-2">
              <div class="panel" id="chat">

                <div class="panel-body">
                  <div class="chats">
                    <div class="chat">
                      <div class="chat-avatar">
                        <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
                          <img src={this.props.userImage} alt="..."/>
                          <i></i>
                        </a>
                      </div>
                      <div class="chat-body">
                        <div class="chat-content">
                          <p>
                            &#x2661; &#x2661; &#x2661; 
                            <br/>What is your name?
                          </p>
                          <time class="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
                        </div>
                      </div>
                    </div>
                    <div class="chat chat-left">
                      <div class="chat-avatar">
                        <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                          <img src={require(`./TFA2.jpg`)} alt="..."/>
                          <i></i>
                        </a>
                      </div>
                      <div class="chat-body">
                        <div class="chat-content">
                          <p>R2D2</p>
                          <time class="chat-time" datetime="2015-07-01T11:39">11:39:57 am</time>
                        </div>
                      </div>
                    </div>
                    <div class="chat">
                      <div class="chat-avatar">
                        <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
                          <img src={this.props.userImage} alt="..."/>
                          <i></i>
                        </a>
                      </div>
                      <div class="chat-body">
                        <div class="chat-content">
                          <p>
                            You are really cute <span className='smile'>&#x263B;</span>
                          </p>
                          <time class="chat-time" datetime="2015-07-01T11:40">11:40:10 am</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel-footer">
                  <form>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Say something"/>
                      <span class="input-group-btn">
                        {/* <button class="btn pull-center btn-primary btnSend" type="button">Send</button> */}
                        <button className='btnSend'>Send</button>

                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
        )
    
    }}

    export default MessagesComponent;