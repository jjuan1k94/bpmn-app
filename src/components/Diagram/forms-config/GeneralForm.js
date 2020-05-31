import React from 'react';
import WrapperInput from '../../WrapperInput';


const MODELING_NAME ='modeling';
const INITIAL_STROKE = 'black';
const INITIAL_FILL = 'white';

const GeneralForm = ({ modeler, shape }) => {

    const changeName = (e) => {
        const modeling = modeler.get(MODELING_NAME);
        modeling.updateLabel(shape, e.target.value);
    };
    const changeColor = (e) => {
        const modeling = modeler.get(MODELING_NAME);
        const propColor = {
            [e.target.name]:e.target.value
        }
        modeling.setColor([shape],propColor)
    }
    console.log(shape);
    console.log(shape.businessObject.di.stroke | INITIAL_STROKE);
    return (
        <form className='container-fluid'>
            <WrapperInput label="Id">
                <input
                    className='form-control'
                    name='id'
                    readOnly
                    value={shape.id} />
            </WrapperInput>
            <WrapperInput label='Name'>
                <input
                    className='form-control'
                    name='name'
                    value={shape.businessObject.name || ''}
                    onChange={changeName}
                />
            </WrapperInput>
            <WrapperInput label='Tag'>
                <select className='form-control' name='tag'>
                    <option value='tag1'>tag1</option>
                    <option value='tag2'>tag2</option>
                </select>
            </WrapperInput>
            <WrapperInput label='Stroke'>
                <input 
                    className='form-control' 
                    type="color" id="stroke" 
                    name="stroke" 
                    value={shape.businessObject.di.stroke || INITIAL_STROKE}
                    onChange={changeColor}
                    />

            </WrapperInput>
            <WrapperInput label='fill'>
                <input 
                    className='form-control' 
                    type="color" 
                    id="fill" 
                    name="fill"
                    value={shape.businessObject.di.fill || INITIAL_FILL}
                    onChange={changeColor}
                     />
            </WrapperInput>
        </form>);
}

export default GeneralForm;