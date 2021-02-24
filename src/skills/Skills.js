import React from 'react';
import style from "./Skills.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skil/Skill";
import {Title} from "../common/Title/Title";
import jscript from "../images/javascript.svg"
import tscript from "../images/ts.svg"
import cssimage from "../images/css-3.svg"
import htmlimage from "../images/html.svg"
import reactimage from "../images/react_original_logo_icon_146374.svg"
import reduxtimage from "../images/redux.svg"
export function Skills() {
    const js={
        backgroundImage:`url(${jscript}`

    }

    const ts={
        backgroundImage:`url(${tscript}`

    }
    const css={
        backgroundImage:`url(${cssimage}`

    }
    const html={
        backgroundImage:`url(${htmlimage}`

    }
    const react={
        backgroundImage:`url(${reactimage}`

    }
    const redux={
        backgroundImage:`url(${reduxtimage}`

    }
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <Title first={"MY"} second={"Skills"}/>
                <div className={style.skills}>
                    <Skill style={js} title={"JS"}/>
                    <Skill style={css} title={"CSS"}/>
                    <Skill style={react} title={"React"}/>
                    <Skill style={ts}  title={"TS"}    />
                    <Skill style={redux} title={"Redux"}   />
                    <Skill  style={html}  title={"Html"}   />
                </div>
            </div>

        </div>
    );
}

