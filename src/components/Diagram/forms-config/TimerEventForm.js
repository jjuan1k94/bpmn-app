import React from 'react';
import WrapperInput from '../../WrapperInput';
import { CUSTOM_PROPS, updateCustomProperty, getCustomProperty } from '../bpmn-types/TypesDiagram';

const INITIAL_STATE_TIMEOUT = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}
const TimerEventForm = (props) => {
    const { modeler, shape } = props;
    let timeout = getCustomProperty(shape, CUSTOM_PROPS.TIMEOUT) || INITIAL_STATE_TIMEOUT;
    if(typeof(timeout) === 'string') timeout= JSON.parse(timeout);
    const handleChangeProp = (e) => {
        //validaciónes
        const {target} = e;
        const max = Number(target.max),
            min = Number(target.min),
            value = Number(target.value);
        
        if(value > max){
            console.error(`valor máximo ${max}`);
            return;
        }
        if(value < min){
            console.error(`valor mínimo ${min}`)
        }
        
        const newCustomProp = {
            ...timeout,
            [target.name]: value
        };
        updateCustomProperty(modeler,shape,CUSTOM_PROPS.TIMEOUT,newCustomProp);
    }
    
    return (
        <form className='container-fluid'>
            <WrapperInput label='Horas'>
                <input
                    type="number"
                    className='form-control'
                    name='hours'
                    value={timeout.hours || INITIAL_STATE_TIMEOUT.hours}
                    min="0"
                    max="24"
                    onChange={handleChangeProp}
                />
            </WrapperInput>
            <WrapperInput label='Minutos'>
                <input
                    type="number"
                    className='form-control'
                    value={timeout.minutes || INITIAL_STATE_TIMEOUT.minutes}
                    name='minutes'
                    min="0"
                    max="60"
                    onChange={handleChangeProp}
                />
            </WrapperInput>
            <WrapperInput label='Segundos'>
                <input
                    type="number"
                    className='form-control'
                    name='seconds'
                    value={timeout.seconds || INITIAL_STATE_TIMEOUT.seconds}
                    min="0"
                    max="60"
                    onChange={handleChangeProp}
                />
            </WrapperInput>
        </form>
    );
}

export default TimerEventForm;