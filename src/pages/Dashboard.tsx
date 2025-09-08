import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  BookOpen, 
  Star, 
  Users, 
  MessageCircle, 
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  Plus
} from "lucide-react";

const mockUser = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  role: "both" as const,
  email: "alex@example.com",
  memberSince: "January 2024",
  stats: {
    skillsLearned: 12,
    skillsTaught: 8,
    totalSessions: 45,
    rating: 4.8,
    earnings: 2150,
    students: 89
  }
};

const upcomingSessions = [
  {
    id: "1",
    title: "React Hooks Deep Dive",
    type: "learning",
    mentor: "Sarah Chen",
    date: "Tomorrow",
    time: "2:00 PM",
    duration: "2 hours",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    type: "teaching",
    student: "Emily Davis",
    date: "Friday",
    time: "10:00 AM",
    duration: "1.5 hours",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const recentActivity = [
  {
    id: "1",
    type: "session_completed",
    title: "Completed Python for Data Science",
    time: "2 hours ago",
    icon: BookOpen
  },
  {
    id: "2",
    type: "review_received",
    title: "Received 5-star review for Guitar lesson",
    time: "1 day ago",
    icon: Star
  },
  {
    id: "3",
    type: "booking_received",
    title: "New booking for Web Development session",
    time: "2 days ago",
    icon: Calendar
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "learning" | "teaching">("overview");

  const StatCard = ({ title, value, icon: Icon, trend }: { 
    title: string; 
    value: string | number; 
    icon: any; 
    trend?: string;
  }) => (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {trend && (
              <p className="text-xs text-success">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                {trend}
              </p>
            )}
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={mockUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              Welcome back, {mockUser.name}!
            </h1>
            <p className="text-muted-foreground">
              Track your learning progress and manage your sessions
            </p>
          </div>
          <div className="flex space-x-3">
            <Button className="btn-glow">
              <Plus className="w-4 h-4 mr-2" />
              Create Skill
            </Button>
            <Button variant="outline" className="btn-outline-glow">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-muted/50 rounded-lg p-1 mb-8 w-fit">
          {[
            { id: "overview", label: "Overview" },
            { id: "learning", label: "Learning" },
            { id: "teaching", label: "Teaching" }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id as any)}
              className={activeTab === tab.id ? "btn-glow" : ""}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Skills Learned"
            value={mockUser.stats.skillsLearned}
            icon={BookOpen}
            trend="+2 this month"
          />
          <StatCard
            title="Skills Taught"
            value={mockUser.stats.skillsTaught}
            icon={Users}
            trend="+1 this month"
          />
          <StatCard
            title="Total Sessions"
            value={mockUser.stats.totalSessions}
            icon={Calendar}
            trend="+8 this month"
          />
          <StatCard
            title="Earnings"
            value={`$${mockUser.stats.earnings}`}
            icon={DollarSign}
            trend="+15% this month"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Upcoming Sessions</span>
                </CardTitle>
                <CardDescription>
                  Your scheduled learning and teaching sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={session.avatar} />
                        <AvatarFallback>
                          {(session.type === "learning" ? session.mentor : session.student)?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {session.type === "learning" ? `with ${session.mentor}` : `teaching ${session.student}`}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                          <span>{session.date} at {session.time}</span>
                          <span>•</span>
                          <span>{session.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={session.type === "learning" ? "secondary" : "default"}>
                        {session.type === "learning" ? "Learning" : "Teaching"}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Sessions
                </Button>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Learning Progress</span>
                </CardTitle>
                <CardDescription>
                  Track your skill development journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">React Development</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Python Data Science</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Overview */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-16 h-16 border-2 border-primary">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {mockUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{mockUser.name}</h3>
                    <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{mockUser.stats.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-primary">{mockUser.stats.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-lg font-bold text-primary">{mockUser.stats.totalSessions}</div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Top Mentor</p>
                    <p className="text-xs text-muted-foreground">Reached 4.8+ rating</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Quick Learner</p>
                    <p className="text-xs text-muted-foreground">Completed 10+ skills</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-warning rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Community Builder</p>
                    <p className="text-xs text-muted-foreground">Helped 50+ students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}