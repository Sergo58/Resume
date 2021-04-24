import React from 'react';
import style from "./Contacts.module.css"
import {Title} from "../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useFormik} from 'formik'
import {Icons} from "../footer/Icon";
import {faMailchimp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeOpen, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';
import Tilt from "react-tilt";
import {useDispatch, useSelector} from 'react-redux'
import {messageTC} from "../reducer/message-reducer";
import {Preloader} from "../common/preloader/Preloader";


export function Contacts() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.message.status)
    const formik = useFormik({
        initialValues: {
            name: '',
            mail: '',
            message: ''
        },
        validate: (values) => {

            const errors = {};

            if (!values.name) {
                errors.name = 'Name is required';
            }
            if (!values.mail) {
                errors.mail = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
                errors.mail = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length < 5) {
                errors.message = 'Why so short message?';
            }

            return errors;

        },
        onSubmit: values => {

            dispatch(messageTC(values));
            formik.resetForm()
        },

    })


    return (
 status==="loading"?<Preloader/>:



        <div id={'Contacts'} className={style.contactContainer}>

            <div className={style.contact}>
                <Title first={"get in "} second={"touch"}/>
                <Fade left>
                    <div className={style.container}>


                        <div className={style.input}>
                            <form onSubmit={formik.handleSubmit}>
                                <input {...formik.getFieldProps("name")} placeholder={"YOUR NAME"} type="text"/>
                                {formik.errors.name && formik.touched.name ?
                                    <div style={{color: '#ffb400', fontFamily: 'sans-serif',}

                                    }>{formik.errors.name}</div> : null}<br/>
                                <input {...formik.getFieldProps("mail")} placeholder={"YOUR EMAIL"} type="text"/>
                                {formik.errors.mail && formik.touched.mail ?
                                    <div style={{color: '#ffb400', fontFamily: 'sans-serif',}
                                    }>{formik.errors.mail}</div> : null}<br/>

                                <  textarea  {...formik.getFieldProps("message")}
                                             placeholder={"YOUR MESSAGE"}></textarea>
                                {formik.errors.message && formik.touched.message ?
                                    <div style={{color: '#ffb400', fontFamily: 'sans-serif',}
                                    }>{formik.errors.message}</div> : null}<br/>
                                <Tilt className="Tilt" options={{max: 25}}>
                                    <button disabled={status === 'loading'} type={'submit'} className={style.icon}>
                                        SEND MESSAGE
                                    </button>
                                </Tilt>
                            </form>

                        </div>
                        <div className={style.item}>
                            <div>
                                <div className={style.mail}><FontAwesomeIcon size={"3x"} icon={faEnvelopeOpen}/></div>
                                <p className={style.iconTitle}>MAIL ME</p> <p
                                className={style.iconContent}>s.ilinykh.ekb@gmail.com</p></div>
                            <div className={style.iconMain}>
                                <div className={style.mail}><FontAwesomeIcon size={"3x"} icon={faPhoneSquare}/></div>
                                <p className={style.iconTitle}>CALL ME</p> <p className={style.iconContent}>+7 919 381
                                30
                                98</p></div>
                        </div>
                    </div>

                </Fade>
            </div>

        </div>


    );
}

