import React, { useEffect } from 'react';
import Button from './Button';
import { useState } from 'react';

const TimeMenagment = (props) => {

    const {setWorkingTime, setBreakTime, workingTime, breakTime, session, setSession} = props;   

        const [_work, setWork] = useState(1500)
        const [_break, setBreak] =useState(300);

    const audio = new Audio('src\mp3\bell.mp3')
    
    const [isActive, setIsActive] = useState(false)

    const changeIsActive = () => {
        setIsActive(isActive => !isActive)
    }

    const removeWorkingMinutes = () =>{
        setWorkingTime(workingTime => workingTime - 60)
        setWork(work => work - 60)
        setSession("Work")
    }

    const addWorkingMinutes = () =>{
        setWorkingTime(workingTime => workingTime + 60)
        setWork(work => work + 60)
        setSession("Work")
    }

    const removeBreakMinutes = () =>{
        setBreakTime(breakTime => breakTime - 60)
        setBreak(_break => _break - 60)
        setSession("Break")
    }
    
    const addBreakMinutes = () =>{
        setBreakTime(breakTime => breakTime + 60)
        setBreak(_break => _break + 60)
        setSession("Break")
    }

    useEffect(() => {
        let counter;
        if(isActive){
            setSession("Work")
            if(session === "Work"){
                counter = setInterval(()=>{
                    setWorkingTime(workingTime => workingTime - 1)
                    if(workingTime <= 0){
                        audio.play();
                        window.alert("Please confirm finished work");
                        setSession("Break");
                        setWorkingTime(_work);
                    }
                }, 1000);
            }else if(session === "Break"){
               counter = setInterval(() => {
                    setBreakTime(breakTime => breakTime - 1)
                    if(breakTime <= 0){
                        audio.play();
                        window.alert("Please confirm finished break");
                        setSession("Work");
                        setBreakTime(_break);
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
                    click={isActive ? ()=>{}:removeWorkingMinutes}
                />
                <span>Work time</span>
                <Button
                    name="+"
                    click={isActive ? ()=>{}:addWorkingMinutes}
                />
            </div>
            <div>
                <Button
                    name="-"
                    click={isActive ? ()=>{}:removeBreakMinutes}
                />
                <span>break time</span>
                <Button
                    name="+"
                    click={isActive ? ()=>{}:addBreakMinutes}
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