import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {DialogType, MessageType, TypeDataDialogsPage} from "../../redux/state";

export const Dialogs = (props: TypeDataDialogsPage) => {
    return (
        <section className={s.dialogs}>
            <h1 className={s.dialogsTitle}>Dialogs</h1>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    { props.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>) }
                </div>
                <div className={s.messages}>
                    { props.messages.map((m: MessageType) => <Message message={m.message} id={m.id}/>) }
                </div>
            </div>
        </section>
    )
}
