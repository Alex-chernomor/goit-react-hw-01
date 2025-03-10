import firstLetter from '../renderFunctions.jsx';
import css from '../Profile/Profile.module.css'

export default function Profile({name, tag, location, image, stats}) {
    const statsObjKeys =(stats);
    const arr = Object.entries(statsObjKeys);    
    
    const UsersStats = ({ stats }) => {
        return (
          <ul className={css.statsList}>
            {stats.map((stat, index) => {
              return <li key = {index} className={css.statLi}>           
                <span className={css.statEl}>{firstLetter(stat[0])}</span>
                <span className={css.statEl}>{stat[1]}</span>
              </li>;
            })}
          </ul>
        );
      };


  return (
<div className={css.container}>
<div className={css.card}>
         <img className={css.avatar}
            src={image}
            alt={name}
         />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
         <UsersStats stats = {arr}/>   
    </div>
</div>
  )
}
