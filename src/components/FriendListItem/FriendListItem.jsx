import css from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnline, id}) {   
  return (
    <li key = {id} className={css.friendCard}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={isOnline ? css.onLine : css.offLine}> {isOnline ? "OnLine" : "Offline"}</p> 
    </li>   
  )
}
