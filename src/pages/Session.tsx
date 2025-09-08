import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { 
  Star, 
  MessageCircle, 
  Calendar as CalendarIcon,
  Clock,
  Video,
  Phone,
  MapPin,
  AlertCircle,
  CheckCircle,
  XCircle,
  Send,
  Paperclip,
  RotateCcw,
  Edit3,
  Download,
  Share2
} from "lucide-react";
import { format } from "date-fns";

const mockUser = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  role: "learner" as const
};

const mockSession = {
  id: "session-123",
  title: "Advanced React Hooks & State Management",
  description: "Deep dive into React hooks, custom hooks, and advanced state management patterns including Context API and useReducer.",
  status: "upcoming", // upcoming, in-progress, completed, cancelled
  mentor: {
    id: "m1",
    name: "Sarah Chen",
    title: "Senior Developer at Google",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    responseTime: "Usually responds within 2 hours"
  },
  datetime: new Date("2024-01-20T14:00:00"),
  duration: 120, // minutes
  price: 75,
  timezone: "PST",
  meetingLink: "https://meet.google.com/abc-defg-hij",
  materials: [
    { name: "React Hooks Cheatsheet", url: "#", type: "pdf" },
    { name: "Practice Project Files", url: "#", type: "zip" },
    { name: "Additional Resources", url: "#", type: "link" }
  ],
  learningGoals: [
    "Master advanced React hooks (useCallback, useMemo, useRef)",
    "Understand when and how to use Context API",
    "Learn custom hook patterns and best practices",
    "Implement useReducer for complex state management"
  ],
  sessionNotes: "Please review the React docs on hooks before our session. We'll be building a todo app with advanced state management.",
  canReschedule: true,
  canCancel: true
};

const chatMessages = [
  {
    id: "1",
    sender: "Sarah Chen",
    content: "Hi Alex! Looking forward to our React hooks session tomorrow. Did you get a chance to review the materials I sent?",
    time: "2:30 PM",
    isOwn: false,
    timestamp: new Date("2024-01-19T14:30:00")
  },
  {
    id: "2",
    sender: "You",
    content: "Hi Sarah! Yes, I went through the cheatsheet. I have some questions about useCallback and when to use it.",
    time: "2:45 PM",
    isOwn: true,
    timestamp: new Date("2024-01-19T14:45:00")
  },
  {
    id: "3",
    sender: "Sarah Chen",
    content: "Perfect! That's exactly what we'll cover. useCallback is great for optimizing performance when passing functions to child components. We'll see practical examples tomorrow.",
    time: "2:47 PM",
    isOwn: false,
    timestamp: new Date("2024-01-19T14:47:00")
  },
  {
    id: "4",
    sender: "You",
    content: "Awesome! Should I set up any specific development environment?",
    time: "3:00 PM",
    isOwn: true,
    timestamp: new Date("2024-01-19T15:00:00")
  },
  {
    id: "5",
    sender: "Sarah Chen",
    content: "Just have VS Code ready with React dev tools extension. I'll share a CodeSandbox link during our session for hands-on coding.",
    time: "3:05 PM",
    isOwn: false,
    timestamp: new Date("2024-01-19T15:05:00")
  }
];

export default function Session() {
  const [newMessage, setNewMessage] = useState("");
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [newDate, setNewDate] = useState<Date | undefined>(new Date());

  const getStatusBadge = (status: string) => {
    const variants = {
      upcoming: { variant: "default" as const, icon: Clock, text: "Upcoming" },
      "in-progress": { variant: "default" as const, icon: Video, text: "In Progress" },
      completed: { variant: "secondary" as const, icon: CheckCircle, text: "Completed" },
      cancelled: { variant: "destructive" as const, icon: XCircle, text: "Cancelled" }
    };
    
    const config = variants[status as keyof typeof variants];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center space-x-1">
        <Icon className="w-3 h-3" />
        <span>{config.text}</span>
      </Badge>
    );
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleJoinSession = () => {
    window.open(mockSession.meetingLink, '_blank');
  };

  const handleReschedule = () => {
    console.log("Rescheduling to:", newDate);
    setShowRescheduleModal(false);
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback:", { rating, feedback });
    setShowFeedbackModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={mockUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Session Header */}
        <Card className="glass-card border-primary/20 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  {getStatusBadge(mockSession.status)}
                  <Badge variant="outline" className="text-primary border-primary">
                    Session ID: {mockSession.id}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{mockSession.title}</h1>
                <p className="text-muted-foreground text-lg mb-4">{mockSession.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <span>{format(mockSession.datetime, "EEEE, MMMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{format(mockSession.datetime, "h:mm a")} ({mockSession.timezone})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{mockSession.duration} minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-bold text-primary">${mockSession.price}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3 w-full lg:w-auto">
                {mockSession.status === "upcoming" && (
                  <>
                    <Button size="lg" onClick={handleJoinSession} className="btn-glow">
                      <Video className="w-5 h-5 mr-2" />
                      Join Session
                    </Button>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowRescheduleModal(true)}
                        className="btn-outline-glow flex-1"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reschedule
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
                
                {mockSession.status === "completed" && (
                  <Button 
                    size="lg" 
                    onClick={() => setShowFeedbackModal(true)}
                    className="btn-glow"
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Leave Feedback
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mentor Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Your Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16 border-2 border-primary">
                    <AvatarImage src={mockSession.mentor.avatar} alt={mockSession.mentor.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {mockSession.mentor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{mockSession.mentor.name}</h3>
                    <p className="text-muted-foreground">{mockSession.mentor.title}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-medium">{mockSession.mentor.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{mockSession.mentor.responseTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="btn-outline-glow">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Learning Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockSession.learningGoals.map((goal, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Session Notes */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Edit3 className="w-5 h-5 text-primary" />
                  <span>Session Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-foreground">{mockSession.sessionNotes}</p>
                </div>
              </CardContent>
            </Card>

            {/* Chat Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Session Chat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollArea className="h-80 p-4 border border-border rounded-lg">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.isOwn
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isOwn
                                ? "text-primary-foreground/70"
                                : "text-muted-foreground"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="btn-glow"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Materials */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Session Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockSession.materials.map((material, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Download className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{material.name}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Meeting Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Meeting Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Platform</span>
                    <span className="text-sm font-medium">Google Meet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Meeting ID</span>
                    <span className="text-sm font-medium">abc-defg-hij</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Link</span>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {mockSession.status === "upcoming" && (
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-primary">
                      <AlertCircle className="w-4 h-4" />
                      <span>Session starts in 2 hours</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full btn-outline-glow">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Mentor
                </Button>
                <Button variant="outline" className="w-full btn-outline-glow">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full btn-outline-glow">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reschedule Modal */}
        {showRescheduleModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="glass-card w-full max-w-md">
              <CardHeader>
                <CardTitle>Reschedule Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Calendar
                  mode="single"
                  selected={newDate}
                  onSelect={setNewDate}
                  className="rounded-lg border border-border"
                />
                <div className="flex space-x-2">
                  <Button onClick={handleReschedule} className="flex-1 btn-glow">
                    Reschedule
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowRescheduleModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Feedback Modal */}
        {showFeedbackModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="glass-card w-full max-w-lg">
              <CardHeader>
                <CardTitle>Session Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Rate your session</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        key={star}
                        variant="ghost"
                        size="sm"
                        onClick={() => setRating(star)}
                        className="p-1"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                          }`} 
                        />
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-3 block">Your feedback</label>
                  <Textarea
                    placeholder="Share your experience with this session..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button onClick={handleSubmitFeedback} className="flex-1 btn-glow">
                    Submit Feedback
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFeedbackModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}