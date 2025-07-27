import { useRef, useState, createContext, useContext } from "react"
import "./assets/styles/app.scss"
import WhatsappBox from "./assets/components/whatsappBox.jsx"
import Alerta from "./assets/components/alert.jsx"
import Input_Email from "./assets/components/inputEmail.jsx"
import Textarea from "./assets/components/textarea.jsx"
import ButtonSend from "./assets/components/Button/buttonPrincipal.jsx"
import Email_Box from "./assets/components/Email_box.jsx"
import "./contact_Page.scss"


export const ContactContext = createContext();





function Contact_CONTEXT() {

    const { message, boleanoAlerta } = useContext(ContactContext)


    return (
        <div className="contact-container" id="contact">

            <h2>Contact me</h2>
            <h7>get in touch</h7>


            <div className="contact">
                <div className="contact-left">
                    <p>Talk to me</p>
                    <Email_Box></Email_Box>
                    <WhatsappBox></WhatsappBox>
                </div>
                <div className="contact-right">
                    <p>Write me your project</p>
                    <Input_Email></Input_Email>
                    <Textarea></Textarea>
                    <span style={{ color: message.color }} className="message_5-contact">{message.text}</span>
                    <ButtonSend></ButtonSend>
                </div>
            </div>



            {/*aqui se pone la alerta de que si ya alcanzo los 4 envios de correo*/}
            {boleanoAlerta ? <Alerta notificacion={alerta} setBoleanoAlerta={setBoleanoAlerta} /> : ""}
        </div>
    )
}

function Contact() {

    const input1 = useRef(null);
    const input2 = useRef(null);


    //boleanoAlerta si es true se muestra un mensaje de que ya tiene 3 mensajes enviados
    const [boleanoAlerta, setBoleanoAlerta] = useState(false);

    //en alerta se le pone el tiempo "espera 5 horas para volver a enviar mensajes"
    const [alerta, setAlerta] = useState("");

    const [message, setMessage] = useState({
        color: "orange",
        text: ""
    })

    return (
        <ContactContext.Provider value={{ setBoleanoAlerta, boleanoAlerta, input1, input2, setBoleanoAlerta, alerta, setAlerta, message, setMessage }}>
            <Contact_CONTEXT />
            {/* <WhatsappBox></WhatsappBox> */}
        </ContactContext.Provider>
    );
}




export default Contact