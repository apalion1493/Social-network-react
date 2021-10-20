import s from './Navbar.module.css';

const Navbar = () => {
    return(
        <aside className={s.sidebar}>
            <nav className={s.sidebar__nav}>
                <ul className={s.sidebar__ul}>
                    <li className={s.sidebar__navLink}>
                        <a href="/profile">Profile</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="/dialogs">Messages</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="/news">News</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="/music">Music</a>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <a href="/settings">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar