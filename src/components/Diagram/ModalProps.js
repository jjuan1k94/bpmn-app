import React from 'react';
import ReactDOM from 'react-dom';
import { ROOT_ID_PORTAL } from '../../assets/types';
import DraggableModal from '../DraggableModal';
import FormProps from './FormProps';


const ModalProps = (props) => {
    const {isOpen, onRequestClose, shape, modeler} = props;
    return(ReactDOM.createPortal(
        <DraggableModal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            size='xl'
            header='Configuración de elemento'
            >
            <FormProps 
                key={shape.id}
                modeler={modeler}
                shape={shape} />
        </DraggableModal>,
        document.getElementById(ROOT_ID_PORTAL)
    ))
};
export default ModalProps;