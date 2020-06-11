import React from 'react';

const Clock = (props) => {

    const { workingTime, breakTime, session, isWorkingTime, setTime } = props;

    return (
        <div className="Clock">
            <p>time:</p>
            {setTime}
            <p>session</p>
            <p>{session}</p>

        </div>
    );
}

export default Clock;