import React, { useState } from 'react'
import ButtonsPanel from './Buttons'
import { bankOne, bankTwo } from '../sounds';

export default function Panel() {

    const [power, setPower] = useState(true);
    const [preset, setPreset] = useState(bankOne)

    function handlePower() {
        setPower(!power);
    }

    function handlePreset() {
        if (preset[0].id === 'Heater-1') {
            setPreset(bankTwo);
        } else {
            setPreset(bankOne);
        }
    }

    return (
        <div className='border'>
            <div className='row d-flex flex-md-row flex-column'>
                <ButtonsPanel isPowerOn={power} preset={preset} />
                <div className='col-md-6 col-12'>
                    {power ? <h1>Power on</h1> : <h1>Power off</h1>}
                    <button className='btn btn-primary' onClick={handlePower}>Toggle Power</button>
                    <button className='btn btn-primary' onClick={handlePreset}>Toggle Preset</button>
                </div>
            </div>
        </div>
  )
}
