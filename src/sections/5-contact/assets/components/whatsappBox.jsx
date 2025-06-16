import { WhatsApp_Icon } from "../svg/whatsapp.jsx"


    const Text_WaMe = () => {

        return (
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
        )


    }


const WhatsappBox = () => {


    return (
        <div className="whatsapp">
            <div className="whatsapp-image">
                <WhatsApp_Icon />
            </div>
            <p>WhatsApp</p>
            <p>+51 906 090 587</p>

            <Text_WaMe></Text_WaMe>
        </div>
    )
}


export default WhatsappBox;