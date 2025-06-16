import { useRef, useState } from "react"
import "./assets/styles/app.scss"

const Alerta = ({ notificacion, setBoleanoAlerta }) => {
    return (
        <div className="container-alerta">
            <div className="alerta">
                <div className="top">
                    <svg
                        fill="red"
                        viewBox="0 0 16 16"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.00016 1.8335C4.59441 1.8335 1.8335 4.59441 1.8335 8.00016C1.8335 11.4059 4.59441 14.1668 8.00016 14.1668C11.4059 14.1668 14.1668 11.4059 14.1668 8.00016C14.1668 4.59441 11.4059 1.8335 8.00016 1.8335ZM0.833496 8.00016C0.833496 4.04212 4.04212 0.833496 8.00016 0.833496C11.9582 0.833496 15.1668 4.04212 15.1668 8.00016C15.1668 11.9582 11.9582 15.1668 8.00016 15.1668C4.04212 15.1668 0.833496 11.9582 0.833496 8.00016ZM8.00016 4.16683C8.27631 4.16683 8.50016 4.39069 8.50016 4.66683V8.00016C8.50016 8.27631 8.27631 8.50016 8.00016 8.50016C7.72402 8.50016 7.50016 8.27631 7.50016 8.00016V4.66683C7.50016 4.39069 7.72402 4.16683 8.00016 4.16683ZM8.00016 10.0002C8.2763 10.0002 8.50016 10.224 8.50016 10.5002L8.50016 10.5835C8.50017 10.8596 8.27631 11.0835 8.00017 11.0835C7.72403 11.0835 7.50017 10.8596 7.50016 10.5835L7.50016 10.5002C7.50016 10.224 7.72402 10.0002 8.00016 10.0002Z"
                        ></path>
                    </svg>
                    <div className="salir" onClick={() => setBoleanoAlerta(false)}>
                        <svg
                            className="ekis"
                            viewBox="0 0 415.188 415.188"
                            width="20"
                            height="20"
                            fill="red"
                        >
                            <path
                                d="M412.861,78.976c3.404-6.636,2.831-14.159-0.15-20.404c0.84-7.106-1.02-14.321-7.746-19.855
c-6.262-5.151-12.523-10.305-18.781-15.457c-11.005-9.055-28.237-11.913-38.941,0c-48.619,54.103-99.461,105.856-152.167,155.725
c-39.185-36.605-78.846-72.713-118.223-108.868c-13.82-12.693-33.824-8.71-42.519,6.411c-12.665,6.286-22.931,14.481-31.42,28.468
c-4.042,6.664-3.727,15.076,0,21.764c25.421,45.578,74.557,85.651,114.957,122.529c-5.406,4.839-10.772,9.724-16.287,14.461
c-54.43,46.742-91.144,76.399-23.029,124.325c0.919,0.647,1.856,0.504,2.789,0.882c1.305,0.602,2.557,1.026,4.004,1.264
c0.45,0.017,0.87,0.093,1.313,0.058c1.402,0.114,2.774,0.471,4.195,0.192c36.621-7.18,70.677-35.878,101.576-67.48
c30.1,29.669,62.151,58.013,97.395,74.831c8.391,4.005,18.395,1.671,24.855-3.931c10.832,0.818,20.708-5.913,25.665-15.586
c0.734-0.454,1.207-0.713,2.002-1.21c15.748-9.838,17.187-29.431,5.534-42.936c-26.313-30.492-54.284-59.478-82.798-87.95
C316.426,196.043,380.533,141.939,412.861,78.976z"
                            ></path>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </div>
                </div>
                <p style={{ color: "gray" }}>
                You can only send 3 messages per day wait until tomorrow{notificacion}
                </p>
            </div>
        </div>
    );
};

export default function Contact() {
    const input1 = useRef();
    const input2 = useRef();
    //esto sirve para contar clicks hechos en el boton "enviar"
    //const [contador,setContador] = useState({document.cookie.valor})
    const objetoCookies = () => {
        const cook = document.cookie;
        //aqui tiene que ser si o si con el espacio "; "
        const array = cook.split("; ");
        const cookObject = {};
        for (let i = 0; i < array.length; i++) {
            const separador = array[i].split("=");
            const key = separador[0];
            const valor = separador[1];
            cookObject[key] = valor;
        }

        return cookObject;
    };

    const cook = objetoCookies();
    //aqui verificamos si existe la cookie conteo
    //si existe que inicie con su valor guardado sino con el valor 0
    const [cont, setCont] = useState(
        cook.conteo !== undefined ? parseInt(cook.conteo) : 0
    );
    //console.log(cont);
    // console.log("-------arriba---------");

    //esto de aqui es el load del boton "enviando..."
    const [load, setLoad] = useState(false);

    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState("normal");
    //boleanoAlerta si es true se muestra un mensaje de que ya tiene 3 mensajes enviados
    const [boleanoAlerta, setBoleanoAlerta] = useState(false);

    //en alerta se le pone el tiempo "espera 5 horas para volver a enviar mensajes"
    const [alerta, setAlerta] = useState("");

    const [message, setMessage] = useState({
        color: "orange",
        text: ""
    })

    const ErrorEnvio = () => {
        return (
            <>
                <svg
                    fill="red"
                    viewBox="0 0 16 16"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00016 1.8335C4.59441 1.8335 1.8335 4.59441 1.8335 8.00016C1.8335 11.4059 4.59441 14.1668 8.00016 14.1668C11.4059 14.1668 14.1668 11.4059 14.1668 8.00016C14.1668 4.59441 11.4059 1.8335 8.00016 1.8335ZM0.833496 8.00016C0.833496 4.04212 4.04212 0.833496 8.00016 0.833496C11.9582 0.833496 15.1668 4.04212 15.1668 8.00016C15.1668 11.9582 11.9582 15.1668 8.00016 15.1668C4.04212 15.1668 0.833496 11.9582 0.833496 8.00016ZM8.00016 4.16683C8.27631 4.16683 8.50016 4.39069 8.50016 4.66683V8.00016C8.50016 8.27631 8.27631 8.50016 8.00016 8.50016C7.72402 8.50016 7.50016 8.27631 7.50016 8.00016V4.66683C7.50016 4.39069 7.72402 4.16683 8.00016 4.16683ZM8.00016 10.0002C8.2763 10.0002 8.50016 10.224 8.50016 10.5002L8.50016 10.5835C8.50017 10.8596 8.27631 11.0835 8.00017 11.0835C7.72403 11.0835 7.50017 10.8596 7.50016 10.5835L7.50016 10.5002C7.50016 10.224 7.72402 10.0002 8.00016 10.0002Z"
                    ></path>
                </svg>
                <p style={{ color: "red", marginLeft: "6px" }}>Error</p>
            </>
        );
    };

    const CorrectoEnvio = () => {
        return (
            <>
                <svg
                    className="em68LXdMm8ygrRPqXGbx TBxJ_8X_wmCUCyvqlVj8 Hn7C9np7FdLcb_wuwZee L9La1RMJmAL5ILZyihV1"
                    dataIcon="true"
                    viewBox="0 0 16 16"
                    fill="green"
                    height="20px"
                    width="20px"
                >
                    <g transform="translate(3.23 4.823)">
                        <path d="M3.177,7.353A1,1,0,0,1,2.47,7.06L-.707,3.884a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0l2.47,2.47L8.835-.708a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414L3.883,7.061A1,1,0,0,1,3.177,7.353Z"></path>
                    </g>
                </svg>
                <p style={{ marginLeft: "6px", color: "green" }}>sent out</p>
            </>
        );
    };

    const meses = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];
    

    const envio = () => {
        //validamos si el correo es valido para un mejor user experience


        //input1.current.value

        if (!/@.*\./g.test(input1.current.value.trim())) {
            //si el email no es valido entra aqui y deja de ejecutar lo de abajo con return
            setMessage({
                color: "red",
                text: "This email is not valid"
            })

            return;
        } else if (input2.current.value.trim() <= 3) {
            setMessage({
                color: "red",
                text: "Enter more characters in your message"
            })
            return;
        }


        if (cont < 3) {
            const input1valor = input1.current.value.trim();
            const input2valor = input2.current.value.trim();
            if (input1valor.length > 3 && input2valor.length > 3) {
                setMessage({
                    color: "transparent",
                    text: ""
                })
                //setCont(cont => cont+1); esto de aqui no funciona
                setCont((cont) => {
                    cont = cont + 1;
                    const fecha = new Date();
                    //getTime obtiene milisegundos desde 1970(ephoc) hasta la hora actual
                    const tiempoExpiracion = fecha.getTime() + 24 * 60 * 60 * 1000; //esto obtiene cuantos milisegundos tiene un dia adelantado desde 1970 ephoc
                    const fechaExpiracion = new Date(tiempoExpiracion);
                    // console.log("------cookies------");

                    document.cookie = `conteo=${cont}; expires=${fechaExpiracion}`;
                    // console.log("------conteo---------");
                    // console.log("cuenta: " + cont);
                    if (cont == 3) {
                        document.cookie = `cookieExpiracion=${fechaExpiracion.getDate()}; expires=${fechaExpiracion}`;
                    }
                    return cont;
                });
                //alert("verificado");
                const input1 = input1valor.replace(/\s+/g, " ");
                
                const input2 = input2valor.replace(/\s+/g, " ");
                setLoad(true);

                //setTimeout(() => {
                //  setLoad(false); // aqui poner false despues de pasar los 10 segundos y salir. si es correcto enviado o incorrecto enviado
                //setMensaje("no se pudo enviar");
                /* setMensaje(Errorenvio)
                  setEnviado("incorrecto");
                  setTimeout(() => {
                    setEnviado("normal");
                    setMensaje("");
                  }, 5000);
                }, 3000);*/

                //en local poner fetch("localhost:8000/data")
                fetch(`${import.meta.env.VITE_API}/data`, {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    //credentials: "include",
                    //comenta el credentials solo sirve en local,en vercel No
                    body: JSON.stringify({
                        correo: input1,
                        mensaje: input2,
                    }),
                })
                    .then((e) => e.json())
                    .then((e) => {
                        //console.log(e);
                        setLoad(false);
                        if (e.error == null) {
                            setMensaje(<CorrectoEnvio />);
                            setEnviado("correcto");
                        } else {
                            setMensaje(<ErrorEnvio />);
                            setEnviado("incorrecto");
                            console.log(e)
                        }
                        setTimeout(() => {
                            setMensaje("");
                            setEnviado("");
                        }, 5000);
                    }).catch(e => {
                        console.log(e)
                    })
            } else if (input1valor.length <= 3) {
                setMessage({
                    color: "red",
                    text: "Enter more characters to your email"
                })
            } else if (input2valor.length > 3) {
                setMessage({
                    color: "red",
                    text: "Enter more characters to your message"
                })
            }
            /*
              //esto es igual que arriba?
             setCont(cont=>cont+1)
             const fecha = new Date();
              const tiempoExpiracion = fecha.getTime() + (24 * 60 * 60 * 1000); //esto obtiene cuantos milisegundos tiene un dia
              const fechaExpiracion = new Date(tiempoExpiracion);
              console.log("------cookies------");
      
              document.cookie = `conteo=${cont}; expires=${fechaExpiracion}`;
              console.log(document.cookie);
              console.log("------conteo---------");
              console.log("cuenta: "+cont);
             */
        } else if (cont == 3) {
            setBoleanoAlerta(true); //si es true se muestra la alerta
            const fech = new Date();
            if (cook.cookieExpiracion == fech.getDate()) {
                //aqui falta borrar las cookies de conteo y de expiracion
                document.cookie = "conteo=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "conteo=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                return "";
            }

            //alert("tienes mas de 3 envios no puedes enviar mas");
            setAlerta(cook.cookieExpiracion + " de " + meses[fech.getMonth()]);
        }



    };

    //esto valida una clase
    const claseEnvio = (en) => {
        if (en == "normal") {
            return "";
        } else if (en == "correcto") {
            return "correcto";
        } else if (en == "incorrecto") {
            return "incorrecto";
        }
    };

    //esto es jsx para mostrar el loader
    const Sending = () => {
        return (
            <>
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </>
        );
    };



    return (
        <div className="contact-container" id="contact">
            <h1>Contact me</h1>
            <h6>get in touch</h6>
            <div className="contact">
                <div className="contact-left">
                    <p>Talk to me</p>
                    <div className="email" style={{ padding: "15px 80px" }}>
                        <div className="email-image">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                id="fast-mail"
                                fill="white"
                                height="45px"
                                width="45px"
                            >
                                <path
                                    fill="#undefined"
                                    d="M4.79,10.5h-2a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2ZM21.57,7.66l0-.06,0,0h0A3,3,0,0,0,19.2,6.5H11.27a3,3,0,0,0-2,.74h0v0A2.93,2.93,0,0,0,8.31,9l-.88,5a3,3,0,0,0,.66,2.45,3,3,0,0,0,2.29,1.07h7.94a3,3,0,0,0,3-2.48l.88-5A3,3,0,0,0,21.57,7.66Zm-2.74.84-3.4,2.76a1,1,0,0,1-1.38-.12L11.72,8.5Zm.48,6.17a1,1,0,0,1-1,.83H10.38a1,1,0,0,1-.76-.36,1,1,0,0,1-.22-.81l.8-4.53,2.35,2.66a3,3,0,0,0,4.14.35L20.13,10ZM5.79,6.5h-3a1,1,0,1,0,0,2h3a1,1,0,0,0,0-2Z"
                                ></path>
                            </svg>
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
                    <div className="whatsapp">
                        <div className="whatsapp-image">
                            <svg
                                version="1.1"
                                fill="white"
                                width="28px"
                                height="28px"
                                viewBox="0 0 90 90"
                            >
                                <g>
                                    <path
                                        id="WhatsApp"
                                        d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522
          c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982
          c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537
          c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938
          c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537
          c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333
          c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882
          c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977
          c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344
          c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223
          C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"
                                    />
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                            </svg>
                        </div>
                        <p>WhatsApp</p>
                        <p>+51 906 090 587</p>
                        <a
                            href="https://wa.me/51906090587"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                        >
                            <span>wa me</span>
                            <svg
                                fill="white"
                                className="flecha"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                id="arrow-right"
                            >
                                <path
                                    fill="#undefined"
                                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <p>Write me your project</p>
                    <div className="mail-input">
                        <span>Email</span>
                        <input placeholder="insert your email" ref={input1}></input>
                    </div>
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
                    <span style={{ color: message.color }} className="message_5-contact">{message.text}</span>
                    <div
                        className={`botonEnviar ${load ? "disabled" : ""} ${claseEnvio(
                            enviado
                        )}`}
                        onClick={envio}
                    >
                        {load ? (
                            <Sending />
                        ) : (
                            mensaje || (
                                <>
                                    <span>send Message</span>
                                    <svg
                                        className="button__icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <path
                                            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                            fill="var(--container-color)"
                                        ></path>
                                        <path
                                            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                            fill="var(--container-color)"
                                        ></path>
                                    </svg>
                                </>
                            )
                        )}
                    </div>
                </div>
            </div>
            {/*aqui se pone la alerta de que si ya alcanzo los 4 envios de correo*/}
            {boleanoAlerta ? <Alerta notificacion={alerta} setBoleanoAlerta={setBoleanoAlerta} /> : ""}
        </div>
    );
}
