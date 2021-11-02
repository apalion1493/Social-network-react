import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
        {id: 4, name: 'Name 4'},
    ]

    const messagesData = [
        {id: 1, message: 'h1'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'bye'},
        {id: 4, message: 'yo'},
    ]

    return (
        <section className={s.dialogs}>
            <h1 className={s.dialogsTitle}>Dialogs</h1>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    {
                        dialogsData.map(t => <DialogItem name={t.name} id={t.id}/>)
                    }
                </div>
                <div className={s.messages}>
                    {
                        messagesData.map(t => <Message message={t.message} id={t.id}/>)
                    }
                </div>
            </div>
        </section>
    )
}