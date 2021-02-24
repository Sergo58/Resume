import React from 'react';
import style from "./Footer.module.css"
import stylesContainer from "./../common/styles/Container.module.css"




export function Icons(props) {
    return (
                    <div className={style.icon}>
                        {props.icon}
                    </div>



    );
}

