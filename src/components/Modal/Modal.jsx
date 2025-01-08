import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay'>
            <div className='modal'>
                <button className='closeButton' onClick={onClose}>X</button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
