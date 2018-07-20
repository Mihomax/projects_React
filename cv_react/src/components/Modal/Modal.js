import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
    constructor(props) {
      super(props);
      this.closeFunction = this.closeFunction.bind(this);
      this.showMore = this.showMore.bind(this);
    }
  
    closeFunction(event) {
      this.props.closeModal();
      event.preventDefault();
    }

    showMore(event) {
        this.props.morepositive();
        event.preventDefault();
      }

  
    render() {
      
        let random = Math.floor(Math.random() * this.props.content.length);
        return (
    <div className = "myModal">
        <h4>Your daily portion of positive !</h4>
        <h3>{this.props.content[random].message}</h3>
        <button className="btn1" onClick={this.closeFunction}>Continue surfing</button>
        <button className="btn2"onClick={this.showMore}>One more positive </button>
</div>
);

}
}


export default Modal;