import React, { useState } from 'react'
import { is } from 'bpmn-js/lib/util/ModelUtil';
import { hasEventDefinition } from 'bpmn-js/lib/util/DiUtil';
import { EVENT_DEFINITIONS, EVENT_TYPES, isEvent } from './bpmn-types/TypesDiagram';
import GeneralForm from './forms-config/GeneralForm';
import TimerEventForm from './forms-config/TimerEventForm';
import BuilderForm from './forms-config/BuilderForm';


const GENERAL_FORM_ID = 'GENERAL_FORM';
const PROPS_FORM_ID = 'PROPS_FORM';
const BUILDER_FROM_ID = 'BUILDER_FORM';

const FormProps = ({ modeler, shape }) => {
    const [formActive, setFormActive] = useState(GENERAL_FORM_ID)
    

    let generalForm = <GeneralForm modeler={modeler} shape={shape} />,
        propsConfigForm = null,
        builderForm = null;

    if (isEvent(shape)) {
        if (hasEventDefinition(shape, EVENT_DEFINITIONS.TIMEOUT)) {
            propsConfigForm = <TimerEventForm modeler={modeler} shape={shape} />
        }
    }

    if (is(shape, EVENT_TYPES.START_EVENT)) {
        builderForm = <BuilderForm modeler={modeler} shape={shape} />
    }

    return (
        <div className='container-fluid pt-2'>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <button className="nav-link active" onClick={() => setFormActive(GENERAL_FORM_ID)}>General</button>
                </li>
                {
                    propsConfigForm &&
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setFormActive(PROPS_FORM_ID)}>Props</button>
                    </li>
                }
                {
                    builderForm &&
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setFormActive(BUILDER_FROM_ID)}>Form</button>
                    </li>
                }
            </ul>
            <div className={`container-fluid ${formActive === GENERAL_FORM_ID ? '' :'d-none'}`}>
                {generalForm}
            </div>
            <div className={`container-fluid ${formActive === PROPS_FORM_ID ? '' :'d-none'}`}>
                {propsConfigForm}
            </div>
            <div className={`container-fluid ${formActive === BUILDER_FROM_ID ? '' :'d-none'}`}>
                {builderForm}
            </div>
        </div>
    )
}

export default FormProps;