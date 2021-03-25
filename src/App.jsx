import user from './json-files/users.json';
import statisticalData from './json-files/statistical-data.json';
import friends from './json-files/friends.json';
import transactions from './json-files/transactions.json';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </div>
  );
};

export default App;
