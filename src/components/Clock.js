import React from 'react';

const Clock = (props) => {

    const { session, setTime } = props;

    return (
        <div className="Clock">
            <div className="timer">
                <p>TIME:</p>
                {setTime}
                <p>SESSION:</p>
                <p>{session}</p>
            </div>
        </div>
    );
}

export default Clock;