import React from 'react';
import Button from './Button';
import { useState } from 'react';

const TimeMenagment = ({setWorkingTime, setBreakTime, workingTime, breakTime}) => {
    
    const [isActive, setIsActive] = useState(true)

    const changeIsActive = () => {
        setIsActive(isActive => !isActive)
    }

    const removeWorkingMinutes = () =>{
        setWorkingTime(workingTime => workingTime - 60)
    }

    const addWorkingMinutes = () =>{
        setWorkingTime(workingTime => workingTime + 60)
    }

    const removeBreakMinutes = () =>{
        setBreakTime(breakTime => breakTime - 60)
    }
    
    const addBreakMinutes = () =>{
        setBreakTime(breakTime => breakTime + 60)
    }

    return (
        <div className="timeMenagment">
            <div>
                <Button
                    name="-"
                    click={removeWorkingMinutes}
                />
                <span>Work time</span>
                <Button
                    name="+"
                    click={addWorkingMinutes}
                />
            </div>
            <div>
                <Button
                    name="-"
                    click={removeBreakMinutes}
                />
                <span>break time</span>
                <Button
                    name="+"
                    click={addBreakMinutes}
                />
            </div>
            <div>
                <Button
                    name={isActive ? "Start":"Stop"}
                    click={changeIsActive}
                />
            </div>
        </div>
    );
}

export default TimeMenagment;