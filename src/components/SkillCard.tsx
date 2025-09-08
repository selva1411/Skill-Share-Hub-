import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Clock, DollarSign, Users } from "lucide-react";

interface SkillCardProps {
  skill: {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    duration: string;
    rating: number;
    reviewCount: number;
    tags: string[];
    mentor: {
      id: string;
      name: string;
      avatar: string;
      title: string;
    };
    studentsCount: number;
    nextAvailable: string;
  };
  onBook: (skillId: string) => void;
  onViewDetails: (skillId: string) => void;
}

export const SkillCard = ({ skill, onBook, onViewDetails }: SkillCardProps) => {
  return (
    <Card className="group card-hover glass-card p-6 h-full flex flex-col">
      {/* Header with Category Badge */}
      <div className="flex justify-between items-start mb-4">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
          {skill.category}
        </Badge>
        <div className="flex items-center space-x-1 text-sm">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-medium">{skill.rating}</span>
          <span className="text-muted-foreground">({skill.reviewCount})</span>
        </div>
      </div>

      {/* Skill Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
        {skill.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {skill.tags.slice(0, 3).map((tag) => (
          <Badge 
            key={tag} 
            variant="outline" 
            className="text-xs bg-muted/50 text-muted-foreground border-muted"
          >
            {tag}
          </Badge>
        ))}
        {skill.tags.length > 3 && (
          <Badge variant="outline" className="text-xs bg-muted/50 text-muted-foreground border-muted">
            +{skill.tags.length - 3}
          </Badge>
        )}
      </div>

      {/* Mentor Info */}
      <div className="flex items-center space-x-3 mb-4 p-3 bg-muted/30 rounded-lg">
        <Avatar className="w-10 h-10 border-2 border-primary/20">
          <AvatarImage src={skill.mentor.avatar} alt={skill.mentor.name} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {skill.mentor.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">{skill.mentor.name}</p>
          <p className="text-xs text-muted-foreground truncate">{skill.mentor.title}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div className="flex flex-col items-center">
          <DollarSign className="w-4 h-4 text-primary mb-1" />
          <span className="font-bold text-sm">${skill.price}</span>
          <span className="text-xs text-muted-foreground">per session</span>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-4 h-4 text-primary mb-1" />
          <span className="font-bold text-sm">{skill.duration}</span>
          <span className="text-xs text-muted-foreground">duration</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-4 h-4 text-primary mb-1" />
          <span className="font-bold text-sm">{skill.studentsCount}</span>
          <span className="text-xs text-muted-foreground">students</span>
        </div>
      </div>

      {/* Next Available */}
      <div className="mb-4 p-2 bg-success/10 border border-success/20 rounded-lg">
        <p className="text-xs text-success text-center">
          Next available: {skill.nextAvailable}
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <Button 
          onClick={() => onBook(skill.id)}
          className="w-full btn-glow"
        >
          Book Session
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onViewDetails(skill.id)}
          className="w-full btn-outline-glow"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};