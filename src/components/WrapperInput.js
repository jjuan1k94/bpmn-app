import React from 'react';

const WrapperInput = (props) => {
    const { children,label } = props;
    return (
        <div className='form-group row mb-1'>
            <label htmlFor='name' className='col-sm-12 col-form-label'>{label}</label>
            <div className='col-sm-12'>
                {children}
            </div>
        </div>)
}
export default WrapperInput;