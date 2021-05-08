import React from 'react';
import style from "./CV.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import Tilt from 'react-tilt'
import resume from "./../images/SergeyIlinykh.pdf"


export function CV() {
    return (

            <div className={style.freelanceContainer}>

                <div className={style.freelance}>
                    <div className={style.block} ><h2 className={style.title}>DOWNLOAD CV</h2></div>
                    <Tilt className="Tilt" options={{ max : 25 }}  >
                        <a href={resume}>
                            <div className={style.icon}>
                                DOWNLOAD
                            </div>
                        </a>

                    </Tilt>


                </div>
            </div>


    );
}

