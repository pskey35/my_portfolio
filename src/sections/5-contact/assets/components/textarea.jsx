import { useRef } from 'react';


function Textarea() {
    const input2 = useRef(null);
    return (
        <div className="textarea-input">
            <span>Message</span>
            <textarea
                minlegth="10"
                required
                cols="30"
                rows="10"
                placeholder="Write your message"
                className="email-textarea"
                ref={input2}
            ></textarea>
        </div>
    )
}


export default Textarea;