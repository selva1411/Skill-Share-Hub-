import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { 
  Star, 
  MessageCircle, 
  Calendar as CalendarIcon,
  Clock,
  Users,
  Award,
  Linkedin,
  Github,
  Twitter,
  Video,
  Phone,
  MapPin,
  BookOpen,
  TrendingUp,
  Heart,
  Share2,
  DollarSign
} from "lucide-react";
import { format } from "date-fns";

const mockMentor = {
  id: "m1",
  name: "Sarah Chen",
  title: "Senior Full-Stack Developer at Google",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=400&h=400&fit=crop&crop=face",
  rating: 4.9,
  reviewCount: 127,
  location: "San Francisco, CA",
  memberSince: "2022",
  responseTime: "Usually responds within 2 hours",
  badges: ["Top Mentor", "React Expert", "JavaScript Guru"],
  bio: "I'm a passionate full-stack developer with 8+ years of experience building scalable web applications. I love teaching and helping others master React, Node.js, and modern JavaScript. My teaching approach focuses on practical, hands-on learning with real-world projects.",
  skills: [
    { name: "React Development", price: 75, sessions: 45, rating: 4.9 },
    { name: "Node.js Backend", price: 70, sessions: 32, rating: 4.8 },
    { name: "JavaScript Fundamentals", price: 60, sessions: 67, rating: 4.9 },
    { name: "TypeScript", price: 65, sessions: 28, rating: 4.7 },
    { name: "MongoDB", price: 55, sessions: 22, rating: 4.8 },
    { name: "API Development", price: 70, sessions: 38, rating: 4.9 }
  ],
  stats: {
    totalSessions: 232,
    studentsHelped: 156,
    successRate: 98,
    avgRating: 4.9
  },
  social: {
    linkedin: "linkedin.com/in/sarahchen",
    github: "github.com/sarahchen",
    twitter: "@sarahchen_dev"
  },
  availability: {
    timezone: "PST",
    workingHours: "9 AM - 6 PM",
    daysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  }
};

const mockReviews = [
  {
    id: "1",
    student: "Alex Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "2 days ago",
    skill: "React Development",
    content: "Sarah is an incredible mentor! She explained React hooks in a way that finally clicked for me. Her real-world examples and hands-on approach made all the difference."
  },
  {
    id: "2",
    student: "Maria Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "1 week ago",
    skill: "Node.js Backend",
    content: "Amazing session on building REST APIs! Sarah's patience and detailed explanations helped me understand complex concepts easily. Highly recommended!"
  },
  {
    id: "3",
    student: "David Park",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "2 weeks ago",
    skill: "JavaScript Fundamentals",
    content: "Perfect for beginners! Sarah broke down complex JavaScript concepts into digestible parts. The practical exercises were incredibly helpful."
  }
];

const availableSlots = [
  { date: "2024-01-15", time: "10:00 AM", available: true },
  { date: "2024-01-15", time: "2:00 PM", available: true },
  { date: "2024-01-16", time: "9:00 AM", available: true },
  { date: "2024-01-16", time: "3:00 PM", available: false },
  { date: "2024-01-17", time: "11:00 AM", available: true },
  { date: "2024-01-17", time: "4:00 PM", available: true }
];

export default function MentorProfile() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSkill, setSelectedSkill] = useState(mockMentor.skills[0]);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="relative mb-8">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 p-1">
                    <Avatar className="w-full h-full border-4 border-primary shadow-glow">
                      <AvatarImage src={mockMentor.avatar} alt={mockMentor.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                        {mockMentor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mockMentor.badges.map((badge) => (
                      <Badge key={badge} className="bg-primary text-primary-foreground">
                        <Award className="w-3 h-3 mr-1" />
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{mockMentor.name}</h1>
                  <p className="text-xl text-muted-foreground mb-4">{mockMentor.title}</p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium">{mockMentor.rating}</span>
                      <span>({mockMentor.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{mockMentor.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{mockMentor.responseTime}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3 w-full lg:w-auto">
                  <Button size="lg" className="btn-glow">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Book Session
                  </Button>
                  <Button variant="outline" size="lg" className="btn-outline-glow">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{mockMentor.stats.totalSessions}</div>
              <div className="text-sm text-muted-foreground">Total Sessions</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{mockMentor.stats.studentsHelped}</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{mockMentor.stats.successRate}%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{mockMentor.stats.avgRating}</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>About {mockMentor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{mockMentor.bio}</p>
              </CardContent>
            </Card>

            {/* Skills Offered */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Skills Offered</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockMentor.skills.map((skill) => (
                    <Card 
                      key={skill.name} 
                      className="glass-card card-hover cursor-pointer border-2 border-transparent hover:border-primary/30"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{skill.name}</h4>
                          <Badge variant="outline" className="text-primary border-primary">
                            ${skill.price}/hr
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{skill.sessions} sessions</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-primary text-primary" />
                            <span>{skill.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-primary" />
                    <span>Reviews ({mockMentor.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-bold">{mockMentor.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-6">
                    {mockReviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12 border-2 border-primary/20">
                            <AvatarImage src={review.avatar} alt={review.student} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {review.student.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h5 className="font-semibold">{review.student}</h5>
                                <p className="text-sm text-muted-foreground">{review.date}</p>
                              </div>
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                              </div>
                            </div>
                            <Badge variant="secondary" className="mb-2">
                              {review.skill}
                            </Badge>
                            <p className="text-foreground">{review.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="glass-card sticky top-8">
              <CardHeader>
                <CardTitle className="text-center">Book a Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Selected Skill */}
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-1">{selectedSkill.name}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price per hour</span>
                    <span className="font-bold text-primary">${selectedSkill.price}</span>
                  </div>
                </div>

                {/* Calendar */}
                <div>
                  <h5 className="font-medium mb-3">Select Date</h5>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-lg border border-border bg-card"
                  />
                </div>

                {/* Available Times */}
                {selectedDate && (
                  <div>
                    <h5 className="font-medium mb-3">Available Times</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots
                        .filter(slot => slot.date === format(selectedDate, "yyyy-MM-dd"))
                        .map((slot, index) => (
                          <Button
                            key={index}
                            variant={slot.available ? "outline" : "ghost"}
                            size="sm"
                            disabled={!slot.available}
                            className={slot.available ? "btn-outline-glow" : "opacity-50"}
                          >
                            {slot.time}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <Button size="lg" className="w-full btn-glow">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Book Session - ${selectedSkill.price}
                </Button>

                {/* Contact Options */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="btn-outline-glow">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" className="btn-outline-glow">
                    <Video className="w-4 h-4 mr-2" />
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-sm">Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Timezone</span>
                  <span className="text-sm font-medium">{mockMentor.availability.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Working Hours</span>
                  <span className="text-sm font-medium">{mockMentor.availability.workingHours}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block mb-2">Available Days</span>
                  <div className="flex flex-wrap gap-1">
                    {mockMentor.availability.daysAvailable.map((day) => (
                      <Badge key={day} variant="secondary" className="text-xs">
                        {day.slice(0, 3)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full w-14 h-14 btn-glow shadow-xl">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}