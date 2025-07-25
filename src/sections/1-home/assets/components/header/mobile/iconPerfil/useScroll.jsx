import { useEffect,useState } from "react"

export default function useScroll() {
    const [style, setStyle] = useState({ opacity: 1, transform: "translateY(0)" });


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Div objetivo #about
            const targetDiv = document.querySelector("#about");
            if (targetDiv) {
                const divPosition = targetDiv.getBoundingClientRect().top + window.scrollY - 300;
                if (scrollY >= divPosition) {
                    setStyle({ opacity: 0, transform: "translateY(-100%)" });
                } else {
                    setStyle({ opacity: 1, transform: "translateY(0)" });
                }
            }

            // Div objetivo #skills
            const targetDiv2 = document.querySelector("#skills");
            if (targetDiv2) {
                const divPosition2 = targetDiv2.getBoundingClientRect().top + window.scrollY - 120;
                if (scrollY >= divPosition2) {
                    setStyle({ opacity: 1, transform: "translateY(0)" });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { style }

}

