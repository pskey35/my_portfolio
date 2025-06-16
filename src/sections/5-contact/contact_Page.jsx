import { useRef, useState, useContext, createContext } from "react"
import "./assets/styles/app.scss"
import WhatsappBox from "./assets/components/whatsappBox.jsx"
import Alerta from "./assets/components/alert.jsx"
import Input_Email from "./assets/components/inputEmail.jsx"
import Textarea from "./assets/components/textarea.jsx"
import Email_Icon from "./assets/svg/email.jsx"
import ButtonSend from "./assets/components/Button/buttonPrincipal.jsx"



export const ContactContext = createContext();

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
            <div className="contact-container" id="contact">
                <h1>Contact me</h1>
                <h6>get in touch</h6>
                <div className="contact">
                    <div className="contact-left">
                        <p>Talk to me</p>
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
                                <p>
                                    <span>write me</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flecha"
                                        data-name="Layer 1"
                                        viewBox="0 0 24 24"
                                        id="arrow-right"
                                        width="20px"
                                        height="20px"
                                        fill="white"
                                    >
                                        <path
                                            fill="#undefined"
                                            d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                                        />
                                    </svg>
                                </p>
                            </a>
                        </div>
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
        </ContactContext.Provider>
    );
}




export default Contact