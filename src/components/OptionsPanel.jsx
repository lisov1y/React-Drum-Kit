import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OptionsPanel(props) {

    function handleVolume(e) {
        const volumeValue = e.target.value;
        props.setVolume(volumeValue);
    }

    return (
        <div className='col-lg-6 col-12 d-flex flex-column justify-content-lg-around justify-content-center pe-lg-5'>
            <div className='text-center mx-auto mb-lg-0 mb-4'>
                <div id='power-display' className='display-panel mb-2'><span>{props.isPowerOn ? 'On' : 'Off'}</span></div>
                <button className='toggler' onClick={props.onPower}><FontAwesomeIcon icon="fa-solid fa-power-off" /></button>
            </div>
            <div className='text-center mb-lg-0 mb-4'>
                <div id='sound-display' className='display-panel mb-lg-4 mb-3 mx-auto'>{props.isPowerOn ? props.soundName : 'No Power...'}</div>
                <div className='d-flex align-items-center mx-lgqq-0 mx-3'>
                    <FontAwesomeIcon className='me-3' icon="fa-solid fa-volume-low" />
                    <input type='range' className='slider' min='0' max='1' step='0.01' value={props.volume} onInput={handleVolume}></input>
                    <FontAwesomeIcon className='ms-3' icon="fa-solid fa-volume-high" />
                </div> 
            </div>
            <div className='text-center mb-lg-0 mb-4'>
                <button className='toggler me-3' onClick={props.onPreset}><FontAwesomeIcon icon="fa-solid fa-rotate" /></button>
                <span>Toggle sounds presets</span>
            </div>
        </div>
    )
}
