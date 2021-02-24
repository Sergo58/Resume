import React from "react";
import style from './Title.module.css';

export function Title(props) {
    return <div className={style.titleBlock}><h2 className={style.title}><span
        className={style.color}>{props.first}</span> {props.second}
    </h2></div>;
}