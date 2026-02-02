import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router';
import {
  LogOut,
  Mail,
  Phone,
  User,
  MessageSquare,
  DollarSign,
  Calendar,
  Search,
  Filter,
  Download,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { toast } from 'react-hot-toast';

// Mock data type based on contact schema
interface ContactSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  budgetRange: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'completed';
}

// Mock data - replace with API call to your backend
const mockData: ContactSubmission[] = [
  {
    id: '1',
    fullName: 'John Doe',
    phone: '+1 234 567 8900',
    email: 'john.doe@example.com',
    serviceType: 'Custom Web Development',
    budgetRange: '$5,000+',
    message: 'I need a custom e-commerce website with payment integration.',
    submittedAt: '2024-01-15T10:30:00Z',
    status: 'new',
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    phone: '+91 98765 43210',
    email: 'jane.smith@example.com',
    serviceType: 'Digital Marketing',
    budgetRange: '$1,000 - $5,000',
    message: 'Looking for SEO and social media marketing services for my startup.',
    submittedAt: '2024-01-14T14:20:00Z',
    status: 'contacted',
  },
  {
    id: '3',
    fullName: 'Robert Johnson',
    phone: '+44 20 7123 4567',
    email: 'robert.j@example.com',
    serviceType: 'Branding',
    budgetRange: '$500 - $1,000',
    message: 'Need complete branding package including logo and brand guidelines.',
    submittedAt: '2024-01-13T09:15:00Z',
    status: 'completed',
  },
];

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'completed'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.serviceType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: string, newStatus: 'new' | 'contacted' | 'completed') => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
    toast.success('Status updated successfully');
  };

  const stats = {
    total: submissions.length,
    new: submissions.filter((s) => s.status === 'new').length,
    contacted: submissions.filter((s) => s.status === 'contacted').length,
    completed: submissions.filter((s) => s.status === 'completed').length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'contacted':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage contact form submissions</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground font-medium">Total Submissions</p>
              <Mail className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.total}</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground font-medium">New</p>
              <div className="w-3 h-3 rounded-full bg-blue-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.new}</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground font-medium">Contacted</p>
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.contacted}</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground font-medium">Completed</p>
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.completed}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, email, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">No submissions found</p>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredSubmissions.map((submission) => (
              <div key={submission.id} className="bg-card border border-border rounded-2xl overflow-hidden">
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{submission.fullName}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(submission.submittedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
                      className="p-2 hover:bg-background rounded-lg transition-colors"
                    >
                      {expandedId === submission.id ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{submission.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{submission.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{submission.serviceType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{submission.budgetRange}</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === submission.id && (
                  <div className="border-t border-border p-6 bg-background/50 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <p className="text-sm text-muted-foreground leading-relaxed bg-card border border-border rounded-xl p-4">
                        {submission.message}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-semibold text-foreground">Update Status:</label>
                      <button
                        onClick={() => updateStatus(submission.id, 'new')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          submission.status === 'new'
                            ? 'bg-blue-500 text-white'
                            : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
                        }`}
                      >
                        New
                      </button>
                      <button
                        onClick={() => updateStatus(submission.id, 'contacted')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          submission.status === 'contacted'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
                        }`}
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => updateStatus(submission.id, 'completed')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          submission.status === 'completed'
                            ? 'bg-green-500 text-white'
                            : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                        }`}
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
