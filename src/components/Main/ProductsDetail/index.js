import React from 'react';
import './product-detail.css';

const Modal = () => {
    return (
        <div id="modal" className="dialog">
            <div className="dialog-overlay"></div>
                <div className="dialog-content">
                    <h1>Modal Box</h1>
                    <button className="dialog-close">Close</button>
                </div>
        </div>
    );
}

export default Modal;