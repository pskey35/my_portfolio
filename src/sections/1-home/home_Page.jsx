import Header from "./assets/header/header.jsx"
import "./assets/icons/ondas/ondas.scss";
import "./home.scss";


//icons - buttons
//import OndasCircles from "./assets/icons/ondas.jsx";
import OndasCircles from "./assets/icons/ondas/ondas.jsx";
import Button_Github from "./assets/Buttons/Button_github.jsx";
import Button_Linkedin from "./assets/Buttons/Button_linkedin.jsx";
import Button_Whatsapp from "./assets/Buttons/Button_whatsapp.jsx";

import RightContent from "./rightContent/rightContent.jsx";








function HomeContent() {

  return (
    <div className="home" id="home">

      {/* aqui en left solo van los de left*/}
      <div className="left">

        <Button_Github height="30px" width="30px"
          to="https://github.com/pskey35"
          stroke="currentColor"
          fill="currentColor" />


        <Button_Linkedin
          width="30px"
          height="30px"
          to="https://www.linkedin.com/in/jayme-alejo-lino-7597a6268/"
          fill="white"
        />



        <Button_Whatsapp
          width="30px"
          height="30px"
          fill="currentColor"
        />




      </div>
      <RightContent></RightContent>

    </div>
  )
}


export default function Home() {


  return (
    <>
      <Header></Header>
      <HomeContent></HomeContent>
      <OndasCircles></OndasCircles>
    </>
  );
}

