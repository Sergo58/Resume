import React from 'react';
import style from "./Footer.module.css"
import Tilt from "react-tilt";



export function Icons(props) {
    return (


    <Tilt className="Tilt" options={{ max : 25 }}  >
        <a href={props.link}>
            <div  className={style.icon}>
                {props.icon}
            </div>
        </a>

    </Tilt>

    );
}

