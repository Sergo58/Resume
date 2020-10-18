import React from 'react';
import style from "./Skills.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skil/Skill";



export function Skills() {
    return (
        <div className={style.skillsBlock}>
<div className={`${stylesContainer.container} ${style.skillsContainer}`}>
    <h2 className={style.title}>Skills</h2>
    <div className={style.skills}>
<Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."} />
<Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."} />
<Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>

    </div>
</div>

        </div>
    );
}

