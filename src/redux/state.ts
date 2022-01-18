import {rerenderEntireTree} from "../render";

export type PostType = {
    id: number
    like: number
    message: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type TypeDataDialogsPage = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type ProfileDataType = {
    posts: Array<PostType>
}

export type MessageDataType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type StateType = {
    profilePage: ProfileDataType
    messagePage: MessageDataType
    sidebar?: object
    addPost?: (postMessage: string) => void
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, like: 1, message: 'text 1'},
            {id: 2, like: 3, message: 'text 2'},
            {id: 3, like: 1, message: 'text 3'},
            {id: 4, like: 5, message: 'text 4'},
        ],
    },
    messagePage: {
        messages: [
            {id: 1, message: 'h1'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'bye'},
            {id: 4, message: 'yo'},
        ],
        dialogs: [
            {id: 1, name: 'Name 1'},
            {id: 2, name: 'Name 2'},
            {id: 3, name: 'Name 3'},
            {id: 4, name: 'Name 4'},
        ],
    },
    sidebar: {}
}

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 5, message: postMessage, like: 0
    }

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}