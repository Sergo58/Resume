import React from "react";
import style from "./Modal.module.css"
import Zoom from 'react-reveal/Zoom';
import {useDispatch, useSelector} from 'react-redux'
import {setStatusAC} from "../../reducer/message-reducer";


function Modal(props) {
    const status = useSelector(state => state.message.status)
    const dispatch = useDispatch()
    const { show, closeModal } = props;
function callback() {
    closeModal()
    dispatch(setStatusAC(null))
}
    return (

        <>
            <Zoom>
            <div className={show ? style.overlay : style.hide} onClick={callback} />
            <div className={show ? style.modal : style.hide}>
                <div className={style.clBtn7}   onClick={
                    callback

                }></div>

                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </Zoom>
        </>

    );
}

export default Modal;