import React from 'react';
import Draggable from 'react-draggable';
import '../assets/css/components/DraggableModal.css';

const DraggableModal = (props) => {
    const { header, children, footer, isOpen, onRequestClose, size } = props;

    if (isOpen) {
        return (
            <Draggable>
                <div className='bpm-modal-draggable modal' tabIndex="-1" role="dialog">
                    <div className={`modal-dialog ${size ? 'modal-' + size : ''}`} role="document">
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
                </div>
            </Draggable>
        )
    }
    return '';
}
export default DraggableModal;