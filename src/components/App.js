import React from 'react';
import '../css/App.css';
import Clock from './Clock';
import TimeMenagment from './TimeMenagment';
import { useState } from 'react';

function App() {

  const [workingTime, setWorkingTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [session, setSession] = useState("Work");
  const [timeWorkingSession, setTimeWorkingSession] = useState(true)
  const [isActive, setIsActive] = useState(false)


  const setTime = () => {
    let minutes;
    let seconds;
    if (session === "Work") {
      minutes = Math.floor(workingTime / 60);
      seconds = workingTime % 60;
      return (
        <p>{`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</p>
      )
    } else if (session === "Break") {
      minutes = Math.floor(breakTime / 60);
      seconds = breakTime % 60;
      return (
        <p>{`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</p>
      )
    }
  }

  return (
    <div className="App">
      <Clock
        session={session}
        setTime={setTime()}
      />
      <TimeMenagment
        setWorkingTime={setWorkingTime}
        setBreakTime={setBreakTime}
        workingTime={workingTime}
        breakTime={breakTime}
        session={session}
        setSession={setSession}
        timeWorkingSession={timeWorkingSession}
        setTimeWorkingSession={setTimeWorkingSession}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}

export default App;
