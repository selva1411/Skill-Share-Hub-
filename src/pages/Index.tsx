import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/Hero";
import { SkillCard } from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Users, 
  Star, 
  TrendingUp, 
  ArrowRight,
  Play,
  CheckCircle,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured skills
const featuredSkills = [
  {
    id: "1",
    title: "Full-Stack Web Development with React & Node.js",
    category: "Programming",
    description: "Learn to build modern web applications from scratch using React, Node.js, Express, and MongoDB.",
    price: 75,
    duration: "2 hours",
    rating: 4.9,
    reviewCount: 127,
    tags: ["React", "Node.js", "JavaScript"],
    mentor: {
      id: "m1",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=150&h=150&fit=crop&crop=face",
      title: "Senior Developer at Google"
    },
    studentsCount: 1250,
    nextAvailable: "Tomorrow at 2:00 PM"
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    description: "Master the principles of user interface and user experience design using modern tools and techniques.",
    price: 60,
    duration: "2.5 hours",
    rating: 4.9,
    reviewCount: 156,
    tags: ["UI Design", "UX Design", "Figma"],
    mentor: {
      id: "m3",
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      title: "Lead Designer at Adobe"
    },
    studentsCount: 2100,
    nextAvailable: "Monday at 10:00 AM"
  },
  {
    id: "3",
    title: "Python for Data Science",
    category: "Programming",
    description: "Dive into data science with Python. Learn pandas, numpy, and machine learning basics.",
    price: 85,
    duration: "2.5 hours",
    rating: 4.8,
    reviewCount: 203,
    tags: ["Python", "Data Science", "ML"],
    mentor: {
      id: "m5",
      name: "Dr. Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      title: "Data Scientist at Microsoft"
    },
    studentsCount: 1800,
    nextAvailable: "Wednesday at 6:00 PM"
  }
];

const stats = [
  { label: "Active Learners", value: "25,000+", icon: Users },
  { label: "Expert Mentors", value: "1,500+", icon: Star },
  { label: "Skills Available", value: "500+", icon: BookOpen },
  { label: "Success Rate", value: "94%", icon: TrendingUp }
];

const features = [
  {
    title: "Expert Mentors",
    description: "Learn from industry professionals with real-world experience",
    icon: Star
  },
  {
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule with our easy booking system",
    icon: Calendar
  },
  {
    title: "Interactive Learning",
    description: "Engage in hands-on projects and receive personalized feedback",
    icon: Play
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners and mentors",
    icon: MessageCircle
  }
];

const testimonials = [
  {
    name: "Jessica Liu",
    role: "Software Developer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    content: "SkillShare Hub helped me transition from marketing to software development. The mentors are incredible!",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The personalized learning approach here is unmatched. I learned more in 3 months than in 2 years of self-study.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "Amazing platform! The mentors are patient, knowledgeable, and truly care about your success.",
    rating: 5
  }
];

const Index = () => {
  const handleBookSkill = (skillId: string) => {
    console.log("Booking skill:", skillId);
  };

  const handleViewDetails = (skillId: string) => {
    console.log("Viewing skill details:", skillId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular skills taught by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onBook={handleBookSkill}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/skills">
              <Button size="lg" className="btn-glow">
                Explore All Skills
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">SkillShare Hub</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of personalized learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card p-6 text-center card-hover">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our amazing community of learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card p-6 card-hover">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering new skills with expert mentors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/skills">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-gradient">SkillShare Hub</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Connecting learners with expert mentors to master new skills and achieve their goals.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">Twitter</Button>
                <Button variant="ghost" size="sm">LinkedIn</Button>
                <Button variant="ghost" size="sm">GitHub</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2">
                <Link to="/skills" className="block text-muted-foreground hover:text-foreground">Browse Skills</Link>
                <Link to="/mentors" className="block text-muted-foreground hover:text-foreground">Find Mentors</Link>
                <Link to="/how-it-works" className="block text-muted-foreground hover:text-foreground">How It Works</Link>
                <Link to="/pricing" className="block text-muted-foreground hover:text-foreground">Pricing</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link to="/help" className="block text-muted-foreground hover:text-foreground">Help Center</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Contact Us</Link>
                <Link to="/terms" className="block text-muted-foreground hover:text-foreground">Terms of Service</Link>
                <Link to="/privacy" className="block text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SkillShare Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
