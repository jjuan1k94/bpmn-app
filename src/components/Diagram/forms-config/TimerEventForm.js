import React from 'react';
import WrapperInput from '../../WrapperInput';
import { CUSTOM_PROPS, updatePropShape } from '../bpmn-types/TypesDiagram';

const TimerEventForm = (props) => {
    const { modeler, shape } = props;
    return (
        <form className='container-fluid'>
            <WrapperInput label='Horas'>
                <input
                    type="number"
                    className='form-control'
                    name='hours'
                    min="0"
                    max="24"
                    onChange={(e) => updatePropShape(modeler, shape, CUSTOM_PROPS.TIMEOUT, new Date())}
                />
            </WrapperInput>
            <WrapperInput label='Minutos'>
                <input
                    type="number"
                    className='form-control'
                    name='minutes'
                    min="0"
                    max="60"
                />
            </WrapperInput>
            <WrapperInput label='Segundos'>
                <input
                    type="number"
                    className='form-control'
                    name='seconds'
                    min="30"
                    max="60"
                />
            </WrapperInput>
        </form>
    );
}

export default TimerEventForm;