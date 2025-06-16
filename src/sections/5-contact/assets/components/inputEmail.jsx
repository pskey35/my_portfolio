import {useContext} from 'react';
import { ContactContext } from '../../contact_Page';


function Input_Email() {
    const { input1} = useContext(ContactContext);

    return (
        <div className="mail-input">
            <span>Email</span>
            <input placeholder="insert your email" ref={input1}></input>
        </div>
    )
}

export default Input_Email;
