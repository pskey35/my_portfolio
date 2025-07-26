import { useEffect, useRef } from 'react';
import perfilImage from "../../assets/image/jaymeAlejoLino.jpg";

const AboutImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "goUp 140ms ease forwards";
          } else {
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.4 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="about__image-container">
      <div className="about__image-wrapper" ref={imageRef}>
        <img 
          src={perfilImage} 
          alt="Jayme Alejo Lino" 
          className="about__image"
        />
      </div>
      <div className="about__info">
        <h3 className="about__name">Jayme Ln</h3>
        <p className="about__role">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default AboutImage;
