import React from 'react';

const Clock = (props) => {

    const {session, setTime } = props;

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