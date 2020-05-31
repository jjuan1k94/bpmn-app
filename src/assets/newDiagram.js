export const XML_DIAGRAMA = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1b8us1t" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="7.0.0">
  <bpmn:collaboration id="Collaboration_12yfa3k">
    <bpmn:participant id="Participant_0i3i4ou" processRef="Process_05apjoh" />
  </bpmn:collaboration>
  <bpmn:process id="Process_05apjoh" isExecutable="false">
    <bpmn:startEvent id="StartEvent_0drj61n">
      <bpmn:outgoing>Flow_0e9jtjo</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0e9jtjo" sourceRef="StartEvent_0drj61n" targetRef="Activity_0nmrsc9" />
    <bpmn:task id="Activity_0nmrsc9">
      <bpmn:incoming>Flow_0e9jtjo</bpmn:incoming>
    </bpmn:task>
    <bpmn:boundaryEvent id="Event_07v9j04" attachedToRef="Activity_0nmrsc9">
      <bpmn:timerEventDefinition id="TimerEventDefinition_0kgrrjk" />
    </bpmn:boundaryEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_12yfa3k">
      <bpmndi:BPMNShape id="Participant_0i3i4ou_di" bpmnElement="Participant_0i3i4ou" isHorizontal="true">
        <dc:Bounds x="106" y="50" width="600" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0e9jtjo_di" bpmnElement="Flow_0e9jtjo">
        <di:waypoint x="192" y="99" />
        <di:waypoint x="250" y="99" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_0drj61n">
        <dc:Bounds x="156" y="81" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0nmrsc9_di" bpmnElement="Activity_0nmrsc9">
        <dc:Bounds x="250" y="59" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_19dz31k_di" bpmnElement="Event_07v9j04">
        <dc:Bounds x="292" y="121" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;