import React from 'react';
import style from "./Contacts.module.css"





export function Contacts() {
    return (

            <div className={style.contactContainer}>

                <div className={style.contact}>
                    <div><h2 className={style.title}>Contact</h2></div>
                    <div className={style.input} >
                        <input  type="text"/><br/>
                        <input  type="text"/><br/>
                        <textarea ></textarea>
                    </div>
                    <div className={style.icon}>
                        SEND MESSAGE
                    </div>

                </div>
            </div>


    );
}

