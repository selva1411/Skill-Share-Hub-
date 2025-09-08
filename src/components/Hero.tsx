import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Play, Users, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People learning and teaching skills" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Stats bar */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">10K+ Learners</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">500+ Skills</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Learn Any Skill,
            <br />
            <span className="text-gradient">Teach Your Passion</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with expert mentors and passionate learners. From coding to cooking, 
            guitar to graphic design - master new skills or share your expertise.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="What do you want to learn today? (e.g., Python, Guitar, Cooking...)"
                className="w-full h-14 pl-12 pr-32 text-lg bg-card/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary rounded-2xl"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Button className="absolute right-2 top-2 h-10 px-6 btn-glow">
                Search
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/register">
              <Button size="lg" className="btn-glow text-lg px-8 py-4 h-auto">
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="btn-outline-glow text-lg px-8 py-4 h-auto">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Popular categories */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-muted-foreground">Popular categories:</span>
            {['Programming', 'Design', 'Music', 'Cooking', 'Languages', 'Fitness'].map((category) => (
              <Link
                key={category}
                to={`/skills?category=${category.toLowerCase()}`}
                className="px-3 py-1 bg-muted/50 hover:bg-primary/20 text-sm rounded-full transition-all duration-200 hover:text-primary border border-muted hover:border-primary/30"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};