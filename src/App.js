import logo from "./logo.svg";
import image1plan from "./item/FirstMid.png";
import table from "./item/table.png";
import "./App.scss";
import flowrigth from "./item/flow.png";
import flowerleft from "./item/flowerleft.png";
import backrigth from "./item/backrigth.png";
import tableblur from "./item/tableblur.png";
import fullblur from "./item/fullblur.png";
import backtop from "./item/tableblack.png";
import { useRef, useEffect, useState } from "react";
import ImageFadeIn from "./component/fadein";
import AnimatedText from "./component/text";
import SvgAnimation from "./component/animated";

import gsap from "gsap";

function App() {
  const imageRef = useRef(null);

  return (
    <div className="App">
      <div className="Firstpage">
        <SvgAnimation />
        <div className="Header">
          <div className="Header__name">
            <div className="Header__name--firstName">Elevath</div>
            <div className="Header__name--secondName">Design</div>
          </div>
          <div className="Header__menu">
            <div className="Header__menu--item">home</div>
            <div className="Header__menu--item">about</div>
            <div className="Header__menu--item">services</div>
          </div>
        </div>

        <div className="Firstpage__title">
          <AnimatedText
            className="Firstpage__title--first"
            text="  Where Passion and Emotion come together"
          />
        </div>

        <ImageFadeIn
          src={table}
          className="Firstpage__Image__first"
          alt="logo"
          delay={2.5}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
        />
        <ImageFadeIn
          src={image1plan}
          delay={1.8}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          className="Firstpage__Image__image1"
          alt="logo"
        />
        <ImageFadeIn
          delay={1.8}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          src={backtop}
          className="Firstpage__Image__backtop"
          alt="logo"
        />
        <ImageFadeIn
          delay={1.5}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          src={flowrigth}
          className="Firstpage__Image__flowrigth"
          alt="logo"
        />
        <ImageFadeIn
          delay={1}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          src={flowerleft}
          className="Firstpage__Image__flowerleft"
          alt="logo"
        />
        <ImageFadeIn
          delay={2}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          src={backrigth}
          className="Firstpage__Image__backrigth"
          alt="logo"
        />
        <ImageFadeIn
          delay={1.8}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          src={tableblur}
          className="Firstpage__Image__tableblur"
          alt="logo"
        />
        <ImageFadeIn
          delay={1.8}
          duration={5}
          opacity1={0}
          opacity2={1}
          easing="power2.out"
          src={fullblur}
          className="Firstpage__Image__fullblur"
          alt="logo"
        />

        <div className="Firstpage__shop">
          <div className="Firstpage__shop--texte">Shop Now</div>
        </div>
      </div>
    </div>
  );
}

export default App;
