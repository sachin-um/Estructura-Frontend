import { AdminAuthenticated } from '../../components/Auth/Authenticated';
import API from '../../lib/API';
import { useState } from 'react';

function AdminDashboard() {
  const [res, setRes] = useState(null);

  return (
    <AdminAuthenticated>
      <h1>Admin Dashboard</h1>
      <button onClick={async () => {
        const res = await API.get('/admin');
        setRes(res);
      }}>Test</button>
      <pre>
        {JSON.stringify(res, null, 2)}
      </pre>
    </AdminAuthenticated>
  );
}

export default AdminDashboard;
