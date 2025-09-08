import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { SkillCard } from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";

// Mock data
const mockSkills = [
  {
    id: "1",
    title: "Full-Stack Web Development with React & Node.js",
    category: "Programming",
    description: "Learn to build modern web applications from scratch using React, Node.js, Express, and MongoDB. Perfect for beginners and intermediate developers.",
    price: 75,
    duration: "2 hours",
    rating: 4.9,
    reviewCount: 127,
    tags: ["React", "Node.js", "JavaScript", "MongoDB", "Express"],
    mentor: {
      id: "m1",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=150&h=150&fit=crop&crop=face",
      title: "Senior Full-Stack Developer at Google"
    },
    studentsCount: 1250,
    nextAvailable: "Tomorrow at 2:00 PM"
  },
  {
    id: "2",
    title: "Acoustic Guitar for Beginners",
    category: "Music",
    description: "Start your musical journey with acoustic guitar. Learn basic chords, strumming patterns, and play your first songs in just a few sessions.",
    price: 45,
    duration: "1.5 hours",
    rating: 4.8,
    reviewCount: 89,
    tags: ["Guitar", "Music Theory", "Chords", "Strumming"],
    mentor: {
      id: "m2",
      name: "David Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      title: "Professional Musician & Teacher"
    },
    studentsCount: 890,
    nextAvailable: "Today at 7:00 PM"
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    description: "Master the principles of user interface and user experience design. Learn design thinking, prototyping, and create stunning digital experiences.",
    price: 60,
    duration: "2.5 hours",
    rating: 4.9,
    reviewCount: 156,
    tags: ["UI Design", "UX Design", "Figma", "Prototyping", "Design Thinking"],
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
    id: "4",
    title: "Italian Cooking Masterclass",
    category: "Cooking",
    description: "Learn authentic Italian recipes and cooking techniques. From pasta making to perfect risotto, discover the secrets of Italian cuisine.",
    price: 55,
    duration: "3 hours",
    rating: 4.7,
    reviewCount: 73,
    tags: ["Italian Cuisine", "Pasta", "Cooking Techniques", "Traditional Recipes"],
    mentor: {
      id: "m4",
      name: "Marco Antonelli",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      title: "Head Chef at Michelin Star Restaurant"
    },
    studentsCount: 650,
    nextAvailable: "Sunday at 3:00 PM"
  },
  {
    id: "5",
    title: "Python for Data Science",
    category: "Programming",
    description: "Dive into data science with Python. Learn pandas, numpy, matplotlib, and machine learning basics to analyze and visualize data effectively.",
    price: 85,
    duration: "2.5 hours",
    rating: 4.8,
    reviewCount: 203,
    tags: ["Python", "Data Science", "Machine Learning", "Pandas", "NumPy"],
    mentor: {
      id: "m5",
      name: "Dr. Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      title: "Data Scientist at Microsoft"
    },
    studentsCount: 1800,
    nextAvailable: "Wednesday at 6:00 PM"
  },
  {
    id: "6",
    title: "Digital Photography Basics",
    category: "Photography",
    description: "Master the fundamentals of digital photography. Learn composition, lighting, camera settings, and post-processing techniques.",
    price: 50,
    duration: "2 hours",
    rating: 4.6,
    reviewCount: 91,
    tags: ["Photography", "Camera Settings", "Composition", "Lightroom", "Editing"],
    mentor: {
      id: "m6",
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      title: "Professional Photographer"
    },
    studentsCount: 1100,
    nextAvailable: "Friday at 4:00 PM"
  }
];

const categories = ["All", "Programming", "Design", "Music", "Cooking", "Photography", "Languages", "Fitness"];
const priceRanges = ["All", "Under $50", "$50-$75", "$75-$100", "Over $100"];
const ratings = ["All", "4.5+ Stars", "4.0+ Stars", "3.5+ Stars"];

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const handleBookSkill = (skillId: string) => {
    console.log("Booking skill:", skillId);
    // Implement booking logic
  };

  const handleViewDetails = (skillId: string) => {
    console.log("Viewing skill details:", skillId);
    // Navigate to skill details page
  };

  const filteredSkills = mockSkills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === "All" || 
      (selectedPriceRange === "Under $50" && skill.price < 50) ||
      (selectedPriceRange === "$50-$75" && skill.price >= 50 && skill.price <= 75) ||
      (selectedPriceRange === "$75-$100" && skill.price > 75 && skill.price <= 100) ||
      (selectedPriceRange === "Over $100" && skill.price > 100);
    
    const matchesRating = selectedRating === "All" ||
      (selectedRating === "4.5+ Stars" && skill.rating >= 4.5) ||
      (selectedRating === "4.0+ Stars" && skill.rating >= 4.0) ||
      (selectedRating === "3.5+ Stars" && skill.rating >= 3.5);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Discover Skills</h1>
          <p className="text-muted-foreground">Learn from expert mentors and master new skills</p>
        </div>

        {/* Search and Filters */}
        <Card className="glass-card p-6 mb-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search skills, mentors, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-glow" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Advanced Filters Toggle */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </Button>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">View:</span>
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <Select value={selectedRating} onValueChange={setSelectedRating}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ratings.map((rating) => (
                        <SelectItem key={rating} value={rating}>
                          {rating}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedPriceRange("All");
                      setSelectedRating("All");
                      setSearchQuery("");
                    }}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold">
              {filteredSkills.length} Skills Found
            </h2>
            {searchQuery && (
              <Badge variant="secondary">
                Search: "{searchQuery}"
              </Badge>
            )}
            {selectedCategory !== "All" && (
              <Badge variant="secondary">
                Category: {selectedCategory}
              </Badge>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1 max-w-4xl mx-auto"
        }`}>
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onBook={handleBookSkill}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No skills found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse different categories
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedPriceRange("All");
                setSelectedRating("All");
              }}
              className="btn-glow"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}