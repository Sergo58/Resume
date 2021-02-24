import React from 'react';
import style from "./MyWorks.module.css"
import stylesContainer from "./../common/styles/Container.module.css"
import {Work} from "./work/Work";
import {Title} from "../common/Title/Title";
import socialNetwork from "./../images/socialNetwork.jpg"
import todolist from "./../images/todolist.jpg"


export function MyWorks() {
    const social={
        backgroundImage:`url(${socialNetwork}`

    }
    const toDo={
        backgroundImage:`url(${todolist}`
    }
    return (
        <div className={style.worksBlock}>
<div className={`${stylesContainer.container} ${style.worksContainer}`}>
  <Title first={"MY"} second={"Projects"}/>
    <div className={style.works}>
<Work style={social} title={"Social network"} description={"Development of social network using React, Redux. " +
"Application authorization, profile editing, navigation through user pages, subscribing and unsubscribing " +
"from users, adding posts."} />
<Work style={toDo} title={"Todo list"}
      description={"Development of Todo list using React, Redux." +
      "Application authorization. Adding, editing and deletion todo lists adn tasks "

      } />


    </div>
</div>

        </div>
    );
}

