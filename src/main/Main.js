import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"


export function Main() {
    return (

        <div className={style.mainBlock}>

            <div className={styleContainer.container}>
                <div className={style.image}>
                    <div className={style.colorBlock}></div>
                    <div className={style.photo}>
                </div>


                </div>
            <div className={style.text}>
                <span className={style.hithere}>Hi there !</span>
                <h1 className={style.name}><span className={style.iam}>I am</span> Ilynikh Sergey</h1>
                <p className={style.description}>React Front-end Developer</p>
            </div>

            </div>
        </div>
    );
}

