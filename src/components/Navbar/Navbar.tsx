import s from './Navbar.module.css';

const Navbar = () => {
    return(
        <aside className={s.sidebar}>
            <nav className={s.sidebar__nav}>
                <ul className={s.sidebar__ul}>
                    <li className={s.sidebar__navLink}>
                        <a href="#">Profile</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="#">Messages</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="#">News</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="#">Music</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar