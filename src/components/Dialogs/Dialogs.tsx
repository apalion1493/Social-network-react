import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type TypeDataDialogsPage = {
    messages: Array<TypeMessages>
    dialogs: Array<TypeDialogs>
}

export type TypeDialogs = {
    id: number
    name: string
}

export type TypeMessages = {
    id: number
    message: string
}

export const Dialogs = (props: TypeDataDialogsPage) => {

    return (
        <section className={s.dialogs}>
            <h1 className={s.dialogsTitle}>Dialogs</h1>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    { props.dialogs.map((d: TypeDialogs) => <DialogItem name={d.name} id={d.id}/>) }
                </div>
                <div className={s.messages}>
                    { props.messages.map((m: TypeMessages) => <Message message={m.message} id={m.id}/>) }
                </div>
            </div>
        </section>
    )
}
