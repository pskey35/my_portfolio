import Row_Icon from "../svg/row.jsx"
import Email_Icon from "../svg/email.jsx"



function Email_BOX() {
    return (
        <div className="email" style={{ padding: "15px 80px" }}>
            <div className="email-image">
                <Email_Icon></Email_Icon>
            </div>
            <p>Email</p>
            <p className="correo">jayme35371@gmail.com</p>
            <a
                href="mailto:jayme35371@gmail.com"
                target="_blank"
                style={{ textDecoration: "none" }}
            >
                <Row_Icon text_SPAN="write"></Row_Icon>

            </a>
        </div>
    )

    
}


export default Email_BOX;