import React from 'react';
import style from "./Contacts.module.css"
import {Title} from "../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Icons} from "../footer/Icon";
import {faMailchimp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeOpen, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';
import Tilt from "react-tilt";

export function Contacts() {
    return (

        <div id={'Contacts'} className={style.contactContainer}>

            <div className={style.contact}>
                <Title first={"get in "} second={"touch"}/>
                <Fade left>
                <div className={style.container}>



                    <div className={style.input}>
                        <form action="">
                            <input placeholder={"YOUR NAME"} type="text"/><br/>
                            <input placeholder={"YOUR EMAIL"} type="text"/><br/>
                            <textarea placeholder={"YOUR MESSAGE"}></textarea>
                        </form>
                        <Tilt className="Tilt" options={{ max : 25 }}  >
                            <div className={style.icon}>
                                SEND MESSAGE
                            </div>
                        </Tilt>
                    </div>
                    <div className={style.item}>
                        <div>
                            <div className={style.mail}><FontAwesomeIcon size={"3x"} icon={faEnvelopeOpen}/></div>
                            <p className={style.iconTitle}>MAIL ME</p> <p
                            className={style.iconContent}>s.ilinykh.ekb@gmail.com</p></div>
                        <div className={style.iconMain}>
                            <div className={style.mail}><FontAwesomeIcon size={"3x"} icon={faPhoneSquare}/></div>
                            <p className={style.iconTitle}>CALL ME</p> <p className={style.iconContent}>+7 919 381 30
                            98</p></div>
                    </div>
                </div>

            </Fade>
            </div>

        </div>


    );
}

