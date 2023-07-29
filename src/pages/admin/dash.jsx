import { AdminAuthenticated } from '../../components/Auth/Authenticated';
import API from '../../lib/API';

function AdminDashboard() {
  return (
    <AdminAuthenticated>
      <h1>Admin Dashboard</h1>
    </AdminAuthenticated>
  );
}

export default AdminDashboard;
