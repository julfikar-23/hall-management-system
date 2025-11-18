import Home from "./pages/public/Home";
import AboutHall from "./pages/public/AboutHall";
import Contact from "./pages/public/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/student/Dashboard";
import Meal from "./pages/student/Meal";
import Complaint from "./pages/student/Complaint";
import Notification from "./pages/student/Notification";
import ProtectedRoute from "./components/ProtectedRoute";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutHall /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { 
    path: "/dashboard", 
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/meal", 
    element: (
      <ProtectedRoute>
        <Meal />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/complaint", 
    element: (
      <ProtectedRoute>
        <Complaint />
      </ProtectedRoute>
    ) 
  },
  { 
    path: "/notification", 
    element: (
      <ProtectedRoute>
        <Notification />
      </ProtectedRoute>
    ) 
  },
];