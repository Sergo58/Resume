import React from 'react';
import preloader from '../../images/preloader.svg'
import style from './Preloader.module.css'

export function Preloader() {
    return <div className={style.preloaderContainer}>
        <img className={style.preloader} src={preloader}/>
    </div>





}
