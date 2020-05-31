import React, { useState } from 'react'
import { hasEventDefinition } from 'bpmn-js/lib/util/DiUtil';
import { EVENT_DEFINITIONS, isEvent } from './bpmn-types/TypesDiagram';
import GeneralForm from './forms-config/GeneralForm';
import TimerEventForm from './forms-config/TimerEventForm';



const GENERAL_FORM = 'GENERAL_FORM';
const PROPS_FORM = 'PROPS_FORM';


const renderPropsForm = (modeler, shape) => {
    let form2Return = null;
    if (isEvent(shape)) {
        if (hasEventDefinition(shape, EVENT_DEFINITIONS.TIMEOUT)) {
            form2Return = <TimerEventForm modeler={modeler} shape={shape} />
        }
    }
    return form2Return;
}

const FormProps = ({ modeler, shape }) => {
    const [formActive, setFormActive] = useState(GENERAL_FORM)
    const propsForm = renderPropsForm(modeler, shape);

    let renderForm = '';

    switch (formActive) {
        case PROPS_FORM:
            renderForm = propsForm;
            break;
        default:
            renderForm = <GeneralForm modeler={modeler} shape={shape} />;
            break;
    }

    console.log(shape);
    return (
        <div className='container-fluid pt-2'>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <button className="nav-link active" onClick={() => setFormActive(GENERAL_FORM)}>General</button>
                </li>
                {
                    propsForm &&
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setFormActive(PROPS_FORM)}>Props</button>
                    </li>
                }
            </ul>
            {renderForm}
        </div>
    )
}

export default FormProps;