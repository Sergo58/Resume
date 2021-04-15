import React from 'react';
import style from "./Footer.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Icons} from "./Icon";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import {
    faGithubSquare, faLinkedin, faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {Icon} from '@iconify/react';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';
import telegram from "@iconify-icons/simple-icons/telegram";
import tripadvisor from "@iconify-icons/simple-icons/tripadvisor";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons/faTelegramPlane";




export function Footer(props) {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <span className={style.title}>Ilinikh Sergey</span>
                <div className={style.footer}>



                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faLinkedinIn}/>}/>
                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faGithub}/>}/>
                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faTelegramPlane}/>}/>
                    <span className={style.codeWars}><Icons icon={<Icon icon={codewarsIcon} color="#111" height={32}  />}/></span>
<span className={style.square}></span>
                </div>
                <span className={style.bottom}>© 2021 All Rights Reserved.</span>
            </div>
        </div>

    );
}

