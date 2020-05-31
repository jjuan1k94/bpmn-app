import React, { useState} from 'react'
import GeneralForm from './forms-config/GeneralForm';

const GENERAL_FORM = 'FORM_GENERAL';
const RULE_FORM = 'RULE_FORM';

const FormProps = ({ modeler, shape }) => {
    const [formActive, setFormActive] = useState(GENERAL_FORM)
    let renderForm = '';
    switch(formActive){
        case RULE_FORM:
            renderForm = '';
           break;
        default:
            renderForm = <GeneralForm modeler={modeler} shape={shape}/>;
            break;
    }
    return (
        <div className='container-fluid pt-2'>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <button 
                        className="nav-link active" 
                        onClick={() => setFormActive(GENERAL_FORM)}
                        >
                        General
                        </button>
                </li>
                {/* <li className="nav-item">
                    <button 
                        className="nav-link active" 
                        onClick={() => setFormActive(RULE_FORM)}
                        >
                        Actions
                        </button>
                </li> */}
            </ul>
            {renderForm}
        </div>
    )
}

export default FormProps;