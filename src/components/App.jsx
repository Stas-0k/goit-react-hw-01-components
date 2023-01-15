import { Profile } from './profile/Profile';
import user from '../data/user.json';
import statistics from '../data/statistics.json'
import {StatisticsList } from './statistics/StatisticsList'
import friends from '../data/friends.json'
import { FriendList } from './friend-list/FriendList'
import transactions from '../data/transactions.json'
import { TransactionHistory } from './transaction-history/TransactionHistory'
import { Container } from 'components/container/Container';
const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <Container>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <StatisticsList title="Upload stats"
    statistics={statistics} 
    />
    <FriendList friends={friends}/>    
      <TransactionHistory transactions={transactions} />
      </Container>
  );
};
