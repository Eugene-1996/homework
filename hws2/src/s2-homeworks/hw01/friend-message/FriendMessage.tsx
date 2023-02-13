import React from 'react'
import s from './FriendMessage.module.css'

type FriendMessagePropsTypes = {

    message: {
        id: number

        user: {
            avatar: string
            name: string
        }

        message: {
            text: string
            time: string
        }

    }
}




// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsTypes) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar} alt='img'
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                        >
                        <h4>{props.message.user.name}</h4>

                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                         <p>{props.message.message.text}</p>
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                <p>{props.message.message.time}</p>
            </div>
        </div>
    )
}

export default FriendMessage
