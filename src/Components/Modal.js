import React from 'react'
import ReactDom from 'react-dom'

const Modal = ( { children, nodo, cName }) => {

       return  ReactDom.createPortal( <div className={cName}>
           {children}
       </div>, document.getElementById(nodo))
}

export default Modal
