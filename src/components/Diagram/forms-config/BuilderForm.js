import React, { useEffect } from 'react';
import { CUSTOM_PROPS, updateCustomProperty, getCustomProperty } from '../bpmn-types/TypesDiagram';

const OPTIONS_FORM_BUILDER = {
    disabledActionButtons: ['data', 'save', 'clear'],
    actionButtons: [{
        id: 'bpm-save',
        className: 'btn btn-primary',
        label: 'Salvar',
        events: {
            click: () => {
                alert('onClick');
            }
        }
    }]
}
const TYPE_SAVE ='json';

const RefHostDiv = React.createRef();
const BuilderForm = (props) => {
    //const [builder, setBuilder] = useState(null);
    const { modeler, shape } = props;
    const handleSave = (builder) => {
        const jsonDataForm = builder.actions.getData(TYPE_SAVE);
        updateCustomProperty(modeler, shape, CUSTOM_PROPS.BASIC_FORMS, jsonDataForm)
    }
    useEffect(() => {
        const { $ } = window;
        const formProp = getCustomProperty(shape,CUSTOM_PROPS.BASIC_FORMS);
        let configBuilder = { ...OPTIONS_FORM_BUILDER };
        let auxBuilder;
        
        if (!$) {
            console.error('No está instanciado jquery')
            return;
        }

        if (!$(RefHostDiv.current).formBuilder) {
            console.error('No está instanciado el form builder')
            return;
        }

        //Click Salvar
        configBuilder.actionButtons[0].events.click = (e) => {
            handleSave(auxBuilder);
        };
        //Cargar datos
        if(formProp){
            configBuilder.dataType = TYPE_SAVE;
            configBuilder.formData = formProp;
        } 
        auxBuilder =
            $(RefHostDiv.current)
                .formBuilder(configBuilder);

        // no funciona bien,queda el valor antiguo, porque no vuelve a renderizar
        // setBuilder(auxBuilder);
    }, [])

    return (
        <div className='bpm-form-builder-container' ref={RefHostDiv} />
    );
}
export default BuilderForm;