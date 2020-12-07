import React from 'react';
import style from "./Freelance.module.css"
import stylesContainer from "./../common/styles/Container.module.css"




export function Freelance() {
    return (

            <div className={style.freelanceContainer}>

                <div className={style.freelance}>
                    <div><h2 className={style.title}>I Am Available For Freelancer</h2></div>
                    <div className={style.icon}>
                        HIRE ME
                    </div>

                </div>
            </div>


    );
}

