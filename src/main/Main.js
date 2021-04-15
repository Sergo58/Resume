import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Particles from 'react-particles-js'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesOptions = {
    particles: {
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        },
        number: {
            value: 80,

            density: {
                enable: true,
                value_area: 800

            }

        }
    }
};

export function Main() {
    return (

        <div id={'Main'} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <div className={styleContainer.container}>
                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <div className={style.image}>

                        <div className={style.colorBlock}></div>
                        <div className={style.photo}>
                        </div>


                    </div>
                </Tilt>

                <div className={style.text}>
                <span className={style.hithere}>
                Hi there !</span>
                    <h1 className={style.name}><span className={style.iam}>I am</span> Ilynikh Sergey</h1>
                    <p className={style.description}><ReactTypingEffect
                        text={["React Front-end Developer"]}/></p>
                </div>

            </div>
        </div>
    );
}

