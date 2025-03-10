import { useState } from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory  from './components/TransactionHistory/TransactionHistory';
import userData from "./components/Profile/userData.json";
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Profile 
     
     name={userData.username}
     tag={userData.tag}
     location={userData.location}
     image={userData.avatar}
     stats={userData.stats}
     />

     <FriendList friends={friends}/>
     <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
