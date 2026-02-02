import AdminProtectedRoute from "@/components/AdminProtectedRoute";
import AdminDashboard from "./AdminDashboard";

export default function AdminRoute() {
  return (
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  );
}