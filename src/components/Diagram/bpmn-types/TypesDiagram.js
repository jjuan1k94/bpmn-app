export const PROPS_MODELER =  {
    MODELING: 'modeling',
    AUTOPLACE: 'autoPlace',
    ELEMENT_FACTORY: 'elementFactory'
};

export const TASK_TYPES = {
    GENERAL: 'bpmn:Task',
    SEND:'bpmn:SendTask',
    RECEIVE: 'bpmn:ReceiveTask',
    SERVICE: 'bpmn:ServiceTask',
    SCRIPT: 'bpmn:ScriptTask',
    MANUAL: 'bpmn:ManualTask',
    USER: 'bpmn:UserTask '
}   

export const EVENT_DEFINITIONS = {
    TIMEOUT: 'bpmn:TimerEventDefinition',
    MESSAGE: 'bpmn:MessageEventDefinition',
    SIGNAL: 'bpmn:SignalEventDefinition',
    CONDITIONAL: 'bpmn:ConditionalEventDefinition',
    ERROR: 'bpmn:ErrorEventDefinition'
    }

//Agregar evento a shape
export const attachBoundaryEvent2Shape = (modeler, shape, eventDefinitionType) => {

    if(!Object.values(EVENT_DEFINITIONS).indexOf(eventDefinitionType) < 0){
        console.error(`${eventDefinitionType} no es válido`);
        return;
    }

    const modeling = modeler.get(PROPS_MODELER.MODELING);
    const attrs = {
        type: 'bpmn:BoundaryEvent',
        eventDefinitionType
    };
    const position = {
        x: shape.x + shape.width,
        y: shape.y + shape.height
    };

    modeling.createShape(attrs, position, shape, { attach: true });
}

export const appendShape = (modeler, shape, attrs) => {

    const autoPlace = modeler.get(PROPS_MODELER.AUTOPLACE);
    const elementFactory = modeler.get(PROPS_MODELER.ELEMENT_FACTORY);
    let newShape = elementFactory.createShape(attrs);
    return autoPlace.append(shape, newShape);
}