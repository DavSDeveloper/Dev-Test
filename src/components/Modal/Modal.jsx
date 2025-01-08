import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center'>
            <div className='bg-white p-5 rounded-lg shadow-md relative overflow-y-scroll'>
                <button className='absolute top-3 right-3 text-2xl text-slate-900 cursor-pointer p-1 hover:text-red-700 duration-300' onClick={onClose}>x</button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
