import React from 'react';
import WrapperInput from '../../WrapperInput';
const ACTION_TYPES = [{ label: 'javaScript function', id: 'js' }, { label: 'EndPoint WebApi', id: 'webapi' }]
const ItemActionForm = (props) => {
    const { id, path, type } = props;
    return (
        <form className='container-fluid'>
            <WrapperInput label='Name'>
                <input className='form-control' name="id" />
            </WrapperInput>
            <WrapperInput label='Path'>
                <input
                    className='form-control'
                    name='path'
                />
            </WrapperInput>
            <WrapperInput label='Type'>
                <select name='type' className='form-control'>
                    {ACTION_TYPES.map(type =>
                        <option key={type.id} value={type.id}>{type.label}</option>)}
                </select>
            </WrapperInput>
        </form>
    )
}
export default ItemActionForm;