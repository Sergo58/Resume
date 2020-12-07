import React from 'react';
import style from "./Footer.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Icon} from "./Icon";




export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <span>Ilinikh Sergey</span>
                <div className={style.footer}>

                   <Icon/>
                   <Icon/>
                   <Icon/>
                   <Icon/>

                </div>
                <span>© 2020 All Rights Reserved.</span>
            </div>
        </div>

    );
}

