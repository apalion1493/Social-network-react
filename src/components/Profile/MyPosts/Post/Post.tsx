import s from './Post.module.css'

type contentType = {
    message: string,
    likeCount: number,
    id: number
}

export const Post = (props: contentType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}/>
            <span>{props.message}</span>
            <span className={s.like}>Like - {props.likeCount}</span>
        </div>
    )
}
