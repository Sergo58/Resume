import React from 'react';
import style from "./Work.module.css"



export function Work(props) {
    return (
        <div className={style.work}>
<div className={style.icon}>
смотреть
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

