import React, {Component} from "react";
import Modal from "react-modal";
import Map from "./Map";


Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      width                 : '80%',
      height                : '25rem',
      top                   : '55%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border: '1px solid #ccc',
      background:'white',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '0.5rem',
      outline: 'none',
      padding: '20px'
    }
};

class MapModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen : false
        }
    }

    openModal = e => {
        e.preventDefault();
        this.setState({ modalIsOpen : !this.state.modalIsOpen});
    }

    closeModal = e => {
        e.preventDefault();
        this.setState({ modalIsOpen : false});
    }

    render(){
        return(
            <div>
                <button className="map-button" onClick={this.openModal}>   
                    <img alt="click to see map" className="image is-64x64" src={process.env.PUBLIC_URL + "/images/location.png"}></img>
                    <span>Click to see location on Map</span>
                </button>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>
                    
                    <div className="hero" style={{width:"100%"}}>
                        <div style={{width:"100%"}} className="container">
                            <Map />
                            <button onClick={this.closeModal} style={{backgroundColor:"red"}} className="button modal-close is-large" aria-label="close"></button>
                        </div>

                    </div>
                
                </Modal>
    
            </div>
        );
    }
}

export default MapModal;