import css from '../FriendList/FriendList.module.css'

export default function FriendList({friends}) {   

  return (
    <ul className={css.friendList}>
           {
                    friends.map((friend)=>{
                        return <li key = {friend.id} className={css.friendCard}>
                                    <img src={friend.avatar} alt={friend.name} className={css.avatar} />
                                    <p className={css.name}>{friend.name}</p>
                                    <p className={friend.isOnline ? css.onLine : css.offLine}> {friend.isOnline ? "OnLine" : "Offline"}</p>
                                 </li>
                    })
                }
    </ul>
    
  )
}
