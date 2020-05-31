import React from 'react';
import ItemActionForm from './ItemActionForm';

const ActionForm = (props) => {
    return (
        <div className='row'>
            <div className='col-3'>
                <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                    <button
                        className='btn nav-link active'
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true">
                        Add New
                </button>
                </div>
            </div>
            <div className='col-9'>
                <ItemActionForm/>
            </div>
        </div>
    );
}
export default ActionForm;