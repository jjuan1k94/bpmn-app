import React from 'react';

const ToolBox = (props) => {
    const { onClickDwl, onCLickDwlSvg, onClickProps } = props;

    return (<ul className="nav nav-pills" id="bpm-toolbox">
        <li className="nav-item">
            <button className='btn nav-link' onClick={onClickDwl}>Download</button>
        </li>
        <li className="nav-item">
            <button className='btn nav-link' onClick={onCLickDwlSvg}>DownloadSVG</button>
        </li>
        <li className="nav-item">
            <button className='btn nav-link' onClick={onClickProps}>PanelProps</button>
        </li>
    </ul>)
};
export default ToolBox;