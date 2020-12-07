import React from 'react';
import style from "./MyWorks.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Work} from "./work/Work";



export function MyWorks() {
    return (
        <div className={style.worksBlock}>
<div className={`${stylesContainer.container} ${style.worksContainer}`}>
   <div><h2 className={style.title}>My Works</h2></div>
    <div className={style.works}>
<Work title={"Work1"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"} />
<Work title={"Work2"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"} />


    </div>
</div>

        </div>
    );
}

