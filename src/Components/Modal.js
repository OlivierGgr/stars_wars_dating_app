import React from 'react'
import './Modal.css'
import '../App.css'

import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

import { connect } from  'react-redux';

class ModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        show: this.props.show,
        valueUpdated: false,
        affiliations: [],
        matches : []
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            show: false,
            valueUpdated: false
        })
        this.handleXBtn()
    }

    handleXBtn() {
        this.props.xBtnInfo(this.state.show)
    }
    

    affiliationList = () => {
      let aff = this.props.affiliations
      if (this.props.affiliations === undefined) {
        aff = [""];
      }
      console.log(this.props.affiliations[0])
      return(
        <div>
          <ul>{Array.from(aff).map(affiliation => <li key={affiliation}> {affiliation} </li>)}</ul>
        </div>
      );
    }
    nopeBtnHover = {background:'red', color:'white'}

    sendMatch(){
      this.props.isMatch(this.props.id)
      this.toggle()
      this.props.dispatch({
        type : "ADD_MATCH",
        matches: this.state.matches,
      })
    }

    render() {

        console.log('before IF STATEMENT   '+this.props.show + 'state : ' + this.state.show)
        if(this.props.show !== this.state.show && !this.state.valueUpdated) {
            this.setState({
              show: this.props.show,
              valueUpdated: true})
        }
      return (
          <div>
              <Modal className="bg-dark openedModal"
                  show={this.state.show}
                  keyboard={true}
                  onEscapeKeyDown={this.toggle}>
                  <ModalHeader 
                  className='modalHeader'>
                      <h2>{this.props.name}</h2>
                    <button onClick={
                          this.toggle
                    }>X</button>
                  </ModalHeader>
                  <ModalBody style={{height: '100%', width: '100%'}}>
                        <img src={this.props.picture} alt={this.props.name} style={{height: '100%', width: '100%', borderRadius:'15px'}} />
                        <div>
                            <div className="row baseInfo">
                            <h3>{this.props.gender}</h3>
                            <h3>{this.props.height} <span className="lowercased">cm</span></h3>
                            </div>
                          <h3>From: <h4>{this.props.homeworld}</h4></h3>
                          <h3>Likes: <h5>{this.affiliationList()}</h5> </h3>
                      </div>
                  </ModalBody>
                <ModalFooter>
                <div className="row baseInfo col-12 modalChoose">
                    <div className="col-6"><Button variant='outline-danger' className='likeOrNotBtn' block onClick={this.toggle}>Nope</Button></div>
                    <div className="col-6"><Button variant='outline-success' className='likeOrNotBtn' block onClick={this.sendMatch.bind(this)}>Let's talk</Button></div>
                </div>
                </ModalFooter>
              </Modal>
          </div>

      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        userName: state.auth.firstName,
        matches: state.matches.matches
    }
}

export default connect(mapStateToProps) (ModalComponent);