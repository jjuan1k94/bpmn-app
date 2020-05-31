import React from 'react';
import { is } from 'bpmn-js/lib/util/ModelUtil';
import { TASK_TYPES, EVENT_DEFINITIONS, attachBoundaryEvent2Shape } from '../bpmn-types/TypesDiagram';


const ActionButton = (props) =>
    (
        <button className='btn' onClick={props.onClick}>
            {props.text}
        </button>
    )

const ActionsForm = (props) => {
    const { modeler, shape } = props;


    //timeout event
    //cualquier task
    const _attachTimeOut = () => {
        attachBoundaryEvent2Shape(modeler, shape, EVENT_DEFINITIONS.TIMEOUT);
    }

    //Evento de mensaje
    //similar a signal pero solo es para el proceso actual
    //cualquier task 
    const _attachMessageEvent = () => {
        attachBoundaryEvent2Shape(modeler, shape, EVENT_DEFINITIONS.MESSAGE)
    }

    //Signal event (publisher)
    //evento de escuccha a un publicador
    //cualquier task
    const _attachSignalEvent = () => {
        attachBoundaryEvent2Shape(modeler, shape, EVENT_DEFINITIONS.SIGNAL)
    }

    //Evento condicional
    //Cualquier task
    const _attachConditionalEvent = () => {
        attachBoundaryEvent2Shape(modeler, shape, EVENT_DEFINITIONS.CONDITIONAL)
    }
    
    //Evento de error
    //Solo para scripts type o service type
    const _attachErrorEvent = () => {
        attachBoundaryEvent2Shape(modeler,shape, EVENT_DEFINITIONS.ERROR)
    }

    return (
        <div className='col-sm-12'>
            {
                is(shape, TASK_TYPES.GENERAL) && 
                <>
                    <ActionButton text='Attach Time Event' onClick={_attachTimeOut} />
                    <ActionButton text='Attach Message Event' onClick={_attachMessageEvent} />
                    <ActionButton text='Attach Message Event' onClick={_attachSignalEvent} />
                    <ActionButton text='Attach Conditional Event' onClick={_attachConditionalEvent} />
                </>
            }
            {
                is(shape, TASK_TYPES.GENERAL) && (is(shape,TASK_TYPES.SERVICE) || is(shape, TASK_TYPES.SCRIPT)) &&
                <ActionButton text='Attach Error Event' onClick={_attachErrorEvent} />
            }
        </div>
    )
}

export default ActionsForm;