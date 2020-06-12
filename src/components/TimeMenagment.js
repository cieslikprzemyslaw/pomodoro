import React, { useEffect } from 'react';
import Button from './Button';
import { useState } from 'react';

const TimeMenagment = (props) => {

    const {setWorkingTime, setBreakTime, workingTime, breakTime, session, setSession} = props;
    
    const [isActive, setIsActive] = useState(false)

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

    useEffect(() => {
        let counter;
        if(isActive){
            if(session === "Work"){
                counter = setInterval(()=>{
                    setWorkingTime(workingTime => workingTime - 1)
                    if(workingTime === 0){
                        setSession("Break")
                    }
                }, 1000);
            }else if(session === "Break"){
               counter = setInterval(() => {
                    setBreakTime(breakTime => breakTime - 1)
                    if(breakTime === 0){
                        setSession("Work")
                    }
                }, 1000)
                
            }
        }
        return function clenup () {
            clearInterval(counter)
        }
    })

    
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
                    name={isActive ? "Stop":"Start"}
                    click={changeIsActive}
                />
            </div>
        </div>
    );
}

export default TimeMenagment;