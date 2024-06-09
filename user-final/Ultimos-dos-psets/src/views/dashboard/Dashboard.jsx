import { useEffect, useState } from 'react';
import Card from './components/Card';
import NavigationBar from '../../shared/NavigationBar';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NavigationBar setSearchTerm={setSearchTerm}>
      <div style={{ display: "flex", flexDirection: 'column', flexFlow: 'wrap', marginTop: '50px' }}>
        {filteredUsers.map((user) => (
          <div key={user.id} style={{ padding: '1%' }}>
            <Card user={user} />
          </div>
        ))}
      </div>
    </NavigationBar>
  );
};

export default Dashboard;
