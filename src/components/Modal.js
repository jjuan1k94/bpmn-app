import React from 'react';
import '../assets/css/components/Modal.css';
const Modal = (props) => {
    const { header, children, footer, isOpen, onRequestClose, size, innerRef } = props;
    if (isOpen) {
        return (
            <div className='bpm-modal modal' tabIndex="-1" role="dialog">
                <div className={`modal-dialog ${size ? 'modal-' + size : ''}`} role="document" ref={innerRef}>
                    <div className='modal-content'>
                        <div className="modal-header">
                            {header}
                            <button type="button" className="close" aria-label="Close" onClick={onRequestClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        {
                            footer && <div className="modal-footer">
                                {footer}
                            </div>
                        }
                    </div>
                </div>
            </div>)
    }
    return '';
}
export default Modal;