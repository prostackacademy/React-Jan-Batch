import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/Message/message.action'
const Message = () => {
    let dispatch = useDispatch();

    let msg = useSelector((state) => {
        return state
    })
    let gmHandler = () => {
        //dispatch an action
        dispatch(gmAction());
    }
    let gnHandler = () => {
        //dispatch an action
        dispatch(gnAction());
    }
    return (
        <div>
            <pre>{JSON.stringify(msg)}</pre>
            {/*   <h1>Message:{msg}</h1> */}

            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message
