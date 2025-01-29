// Dashboard.tsx
import Notifications from './Notifications';

function Dashboard({ user }) {
  return (
    <div>
      <Notifications userId={user.id} />
      {/* Other auction UI */}
    </div>
  );
}

export default Dashboard;
