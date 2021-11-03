import s from './Profile.module.css';
import MyPosts, {PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: PostsType) => {
    return (
        <section className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </section>
    )
}

export default Profile
