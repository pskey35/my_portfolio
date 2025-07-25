import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../../contact_Page";



function getCookiesAsObject() {
    return Object.fromEntries(
        document.cookie
            .split("; ")
            .map(cookie => cookie.split("="))
    );
}


const ButtonSend = () => {


    const { setBoleanoAlerta, setAlerta, setMessage, input1, input2 } = useContext(ContactContext);

    useEffect(() => {
        getCookiesAsObject()
    }, [])



    //aqui verificamos si existe la cookie conteo
    //si existe que inicie con su valor guardado sino con el valor 0
    const [cont, setCont] = useState(
         getCookiesAsObject().conteo !== undefined ? parseInt( getCookiesAsObject().conteo) : 0
    );
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

   





    //esto de aqui es el load del boton "enviando..."
    const [load, setLoad] = useState(false);

    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState("normal");


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




    return (
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
    )
}



export default ButtonSend;