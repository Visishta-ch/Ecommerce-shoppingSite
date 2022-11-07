import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
// import './Modal.css'
import './Modalstyle.css'


const ModalOverlay = props => {
    return <div className="modal"> 
        
        <div>{props.children}</div>
    </div>
}

const portalID = document.getElementById('overlays')
const Modal = (props) => {
   
  return (
    <Fragment>
           
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalID)}
    </Fragment>
  )
}

export default Modal