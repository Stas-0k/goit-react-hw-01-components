import PropTypes from 'prop-types';
import css from './friend-list.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className={css.itemFriend}>
            <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
            <img className={css.avatarFriend} src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number,
}