import React from 'react';
import style from "./Footer.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Icons} from "./Icon";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import {faGithubSquare, faInstagramSquare, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {Icon, InlineIcon} from '@iconify/react';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';


export function Footer(props) {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <span className={style.title}>Ilinikh Sergey</span>
                <div className={style.footer}>

                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faFacebookSquare}/>}/>
                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faInstagramSquare}/>}/>
                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faLinkedin}/>}/>
                    <Icons icon={<FontAwesomeIcon size={"2x"} icon={faGithubSquare}/>}/>

                    <span className={style.codeWars}><Icons  icon={<Icon icon={codewarsIcon}  height={28} />}/></span>
                </div>
                <span className={style.bottom}>© 2021 All Rights Reserved.</span>
            </div>
        </div>

    );
}

