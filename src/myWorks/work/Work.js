import React from 'react';
import style from "./Work.module.css"
import Fade from 'react-reveal/Fade';

export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image2}>

                <a href={props.linkDemo}>
                    <Fade>
                <div  className={style.icon}>
                    Demo
                </div>
                    </Fade>
                </a>

                <a href={props.linkGit}>
                    <Fade>
                <div className={style.icon}>
                    GitHub
                </div>
                    </Fade>
                </a>

            </div>
            <div style={props.style} className={style.image}>

            </div>

            <div className={style.footer}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>
                    {props.description}
                </div>
            </div>

        </div>
    );
}

