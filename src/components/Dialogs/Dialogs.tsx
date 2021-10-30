import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            <h1 className={s.dialogsTitle}>Dialogs</h1>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    <div className={`${s.dialog} ${s.active}`}>
                        <NavLink to="/dialogs/1">Name 1</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/2'>Name 2</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/3'>Name 3</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/4'>Name 4</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/5'>Name 5</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/6'>Name 6</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>hi</div>
                    <div className={s.message}>hello</div>
                    <div className={s.message}>bye</div>
                    <div className={s.message}>yo</div>
                </div>
            </div>
        </section>
    )
}