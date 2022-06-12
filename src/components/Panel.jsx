import React, { useState } from 'react';
import ButtonsPanel from './Buttons';
import OptionsPanel from './OptionsPanel';
import { bankOne, bankTwo } from '../sounds';

export default function Panel() {

    const [power, setPower] = useState(true);
    const [preset, setPreset] = useState(bankOne)
    const [soundName, setSoundName] = useState('Start playing!');
    const [volume, setVolume] = useState(0.5);

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
        <div id='panel'>
            <div className='row d-flex flex-lg-row flex-column'>
                <ButtonsPanel isPowerOn={power} preset={preset} setSoundName={setSoundName} volume={volume} />
                <OptionsPanel isPowerOn={power} onPower={handlePower} onPreset={handlePreset} volume={volume} soundName={soundName} setVolume={setVolume} />
            </div>
        </div>
  )
}
