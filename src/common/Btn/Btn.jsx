import React from "react";
import style from './Btn.module.scss';

export function Btn(props) {
    return <div className={style.buttonParent}>


            <div className={style.buttonItem}>

                <a href="" className={style.btn4}>{props.text}</a>
            </div>




    </div>

}