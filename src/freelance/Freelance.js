import React from 'react';
import style from "./Freelance.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import Tilt from 'react-tilt'



export function Freelance() {
    return (

            <div className={style.freelanceContainer}>

                <div className={style.freelance}>
                    <div className={style.block} ><h2 className={style.title}>I Am Available For Freelancer</h2></div>
                    <Tilt className="Tilt" options={{ max : 25 }}  >
                        <div className={style.icon}>
                            HIRE ME
                        </div>
                    </Tilt>


                </div>
            </div>


    );
}

