import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const RoleDashboard = ({ role, userName }) => {
    const dashboards = {
      STUDENT: (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#00df9a] mb-4">Student Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">My Hall</h4>
              <p className="text-gray-300">View hall information</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Meal Menu</h4>
              <p className="text-gray-300">Check today's menu</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Complaints</h4>
              <p className="text-gray-300">Submit complaints</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Notifications</h4>
              <p className="text-gray-300">Hall notices</p>
            </div>
          </div>
        </div>
      ),
      
      STAFF: (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#00df9a] mb-4">Staff Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Student Management</h4>
              <p className="text-gray-300">Manage student records</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Room Allocation</h4>
              <p className="text-gray-300">Assign rooms to students</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Complaint Management</h4>
              <p className="text-gray-300">Handle student complaints</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Reports</h4>
              <p className="text-gray-300">Generate hall reports</p>
            </div>
          </div>
        </div>
      ),
      
      ADMIN: (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#00df9a] mb-4">Admin Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">User Management</h4>
              <p className="text-gray-300">Manage all users</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">System Settings</h4>
              <p className="text-gray-300">Configure system</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Analytics</h4>
              <p className="text-gray-300">View system analytics</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Hall Management</h4>
              <p className="text-gray-300">Manage all halls</p>
            </div>
          </div>
        </div>
      ),
      
      CANTEEN_MANAGER: (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#00df9a] mb-4">Canteen Manager Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Menu Management</h4>
              <p className="text-gray-300">Update meal menus</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Inventory</h4>
              <p className="text-gray-300">Manage food inventory</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Orders</h4>
              <p className="text-gray-300">View meal orders</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Reports</h4>
              <p className="text-gray-300">Canteen reports</p>
            </div>
          </div>
        </div>
      ),
      
      TEACHER: (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#00df9a] mb-4">Faculty Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Student Info</h4>
              <p className="text-gray-300">View student details</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Hall Notices</h4>
              <p className="text-gray-300">Post announcements</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Meal Plans</h4>
              <p className="text-gray-300">View meal schedules</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
              <h4 className="font-semibold text-white">Complaints</h4>
              <p className="text-gray-300">Address student issues</p>
            </div>
          </div>
        </div>
      )
    };

    return dashboards[role] || dashboards.STUDENT;
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  if (!user || !user.email) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#00df9a]">SUST Hall Management</h1>
            <p className="text-gray-400">Welcome back, {user.name}!</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white bg-[#00df9a] px-3 py-1 rounded-full text-sm font-semibold">
              {user.role}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Role-based Dashboard */}
        <RoleDashboard role={user.role} userName={user.name} />

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold">Hall</h4>
            <p className="text-[#00df9a]">{user.hallName}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold">Email</h4>
            <p className="text-gray-300 text-sm">{user.email}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold">Role</h4>
            <p className="text-[#00df9a]">{user.role}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold">Status</h4>
            <p className="text-green-400">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;