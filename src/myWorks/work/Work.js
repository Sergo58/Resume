import React from 'react';
import style from "./Work.module.css"



export function Work(props) {
    return (
        <div  className={style.work}>
<div style={props.style} className={style.image} >
    <div className={style.icon}>

    </div>
</div>

            <div className={style.footer} >
                <div className={style.title}>{props.title}</div>
                <div className={style.description} >
                {props.description}
                </div>
            </div>

        </div>
    );
}

