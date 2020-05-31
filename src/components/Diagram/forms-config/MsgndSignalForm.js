import React from 'react';
import WrapperInput from '../../WrapperInput';



const LIST_TOPICOS = [{ label: 'topico1', value: 'topico2' }, { label: 'topico2', value: 'topico2' }];

const MsgndSignalForm = (props) => {
    const { modeler, shape } = props;
    return (
        <form className='container-fluid'>
            <WrapperInput label='Tópico'>
                <select>
                    {
                        LIST_TOPICOS.map(topic =>
                            <option
                                key={topic.value}
                                value={topic.value}
                            >
                                {topic.label}
                            </option>)
                    }
                </select>
            </WrapperInput>
        </form>
    );
}
export default MsgndSignalForm;