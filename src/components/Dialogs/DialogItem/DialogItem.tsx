import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props: any) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}