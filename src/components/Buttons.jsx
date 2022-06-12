import React, { useEffect, useState } from 'react'
import { bankOne, bankTwo } from '../sounds';
import playSound from '../playSound';

export default function ButtonsPanel(props) {
  return (
    <div className='col-lg-6 col-12 mx-auto'>
        <ButtonRows isPowerOn={props.isPowerOn} preset={props.preset} setSoundName={props.setSoundName} volume={props.volume} />
    </div>
  )
}

function ButtonRows(props) {

    const assignButtons = props.preset.map(sound => {
        return <Button
            key={sound.id}
            id={sound.id}
            keyCode={sound.keyCode}
            keyTrigger={sound.keyTrigger}
            url={sound.url}
            isPowerOn={props.isPowerOn}
            setSoundName = {props.setSoundName}
            volume = {props.volume}
        />
    });

    // ToDo: Think about smater way to assign the buttons to the rows

    return (
        <div>
            <div className='d-flex justify-content-center mt-3'>
                {assignButtons[0]}
                {assignButtons[1]}
                {assignButtons[2]}
            </div>
            <div className='d-flex justify-content-center'>
                {assignButtons[3]}
                {assignButtons[4]}
                {assignButtons[5]}
            </div>
            <div className='d-flex justify-content-center mb-3'>
                {assignButtons[6]}
                {assignButtons[7]}
                {assignButtons[8]}
            </div>
        </div>

    );
}

function Button(props) {
    // Track pressed buttons
    useEffect(() => {
        const keyDownHandler = e => {
            if (e.keyCode === props.keyCode) {
                playSound(props.url, props.volume, props.isPowerOn);
                props.setSoundName(props.id);
            }
        };
        document.addEventListener('keydown', keyDownHandler);

        return () => document.removeEventListener('keydown', keyDownHandler);
    }, [props.isPowerOn, props.volume])

    function handleClick() {
        playSound(props.url, props.volume, props.isPowerOn);
        props.setSoundName(props.id);
    }

    return (
        <div className='node m-1 d-flex justify-content-center align-items-center' onClick={handleClick}>
            <span className='fw-bold fs-2'>{props.keyTrigger}</span>
        </div>
    );
}

