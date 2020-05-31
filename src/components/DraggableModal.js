import React, { useEffect } from 'react';
import Modal from './Modal';
import '../assets/css/components/DraggableModal.css';
//No està funcionando
const refModal = React.createRef();

const DraggableModal = (props) => {    
    useEffect(() => {
        const { $ } = window;
        if(!$){
            console.error('jquery no está instanciado');
            return;
        }
        console.log('draggable');
        $(refModal.current).draggable();
    },[props.isOpen])
    return  <Modal innerRef={refModal} {...props} />;
}
export default DraggableModal;