import React from 'react';
import BpmnJS from 'bpmn-js/lib/Modeler';
import Toolbox from '../components/Diagram/ToolBox';
import ModalProps from '../components/Diagram/ModalProps';
import { XML_DIAGRAMA } from '../assets/newDiagram';
import '../assets/css/pages/Diagram.css';
import '../../node_modules/bpmn-js/dist/assets/diagram-js.css'
import '../../node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

const INITIAL_SATE = {
    modeler: null,
    modalIsOpen: false,
    selectedShape: null,
}
class Diagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_SATE;
        this.refHostDiv = React.createRef();
    }
    handleDownload = async () => {
        const { xml } = await this.state.modeler.saveXML({ format: true });
        const fileName = 'diagram.bpmn';
        const blob = new Blob([xml], { type: 'text/plain' });
        const pom = document.createElement('a');

        pom.setAttribute('href', window.URL.createObjectURL(blob));
        pom.setAttribute('download', fileName);
        pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
        pom.draggable = true;
        pom.classList.add('dragout');
        pom.click();
    }
    handleDownloadSVG = async () => {
        const { svg } = await this.state.modeler.saveSVG({});
        const fileName = 'diagram.svg';
        const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const pom = document.createElement('a');

        pom.setAttribute('href', window.URL.createObjectURL(blob));
        pom.setAttribute('download', fileName);
        pom.dataset.downloadurl = ['image/svg+xml;charset=utf-8', pom.download, pom.href].join(':');
        pom.draggable = true;
        pom.classList.add('dragout');
        pom.click();
    }
    loadDiagram = async () => {
        const { modeler } = this.state;
        await modeler.importXML(XML_DIAGRAMA);

        modeler.on('selection.changed', (e) => {
            console.log('selection.changed')
            if (e.newSelection.length > 0) {
                this.setState({ selectedShape: e.newSelection[0] })
            }
        })
        
        modeler.on('element.changed', (e) => {
            const { element: newShape } = e;
            this.setState({ selectedShape: newShape });
        })

    }
    componentDidMount() {
        let _modeler = new BpmnJS({
            container: this.refHostDiv.current
        })
        this.setState({ modeler: _modeler }, this.loadDiagram)
    }
    render() {
        const { selectedShape, modalIsOpen, modeler } = this.state;
        return (
            <>
                <div id="bpm-diagram-container" ref={this.refHostDiv} />
                <Toolbox
                    onClickProps={() => this.setState({ modalIsOpen: true })}
                    onClickDwl={this.handleDownload}
                    onCLickDwlSvg={this.handleDownloadSVG}
                />
                {
                    selectedShape && <ModalProps
                        isOpen={modalIsOpen}
                        modeler={modeler}
                        shape={selectedShape}
                        onRequestClose={() => this.setState({ modalIsOpen: false })} />
                }
            </>)
    }
}
export default Diagram;