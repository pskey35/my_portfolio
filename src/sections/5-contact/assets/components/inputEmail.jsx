import { useRef } from 'react';

function Input_Email() {
    const input1 = useRef(null);

    return (
        <div className="mail-input">
            <span>Email</span>
            <input placeholder="insert your email" ref={input1}></input>
        </div>
    )
}

export default Input_Email;
