import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, 
  Send, 
  Phone, 
  Video, 
  MoreVertical,
  Paperclip,
  Smile
} from "lucide-react";

const mockUser = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  role: "both" as const,
  email: "alex@example.com"
};

const conversations = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d7?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Great! Let's schedule our React session for tomorrow.",
    time: "2m ago",
    unread: 2,
    online: true,
    skill: "React Development"
  },
  {
    id: "2",
    name: "David Rodriguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Thanks for the guitar lesson! It was amazing.",
    time: "1h ago",
    unread: 0,
    online: false,
    skill: "Guitar Lessons"
  },
  {
    id: "3",
    name: "Emma Thompson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Can we reschedule our UI/UX session?",
    time: "3h ago",
    unread: 1,
    online: true,
    skill: "UI/UX Design"
  },
  {
    id: "4",
    name: "Marco Antonelli",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Looking forward to our cooking session!",
    time: "1d ago",
    unread: 0,
    online: false,
    skill: "Italian Cooking"
  }
];

const messages = [
  {
    id: "1",
    sender: "Sarah Chen",
    content: "Hi Alex! I'm excited about our React session tomorrow.",
    time: "10:30 AM",
    isOwn: false
  },
  {
    id: "2",
    sender: "You",
    content: "Hi Sarah! Me too. I've prepared some questions about hooks and state management.",
    time: "10:32 AM",
    isOwn: true
  },
  {
    id: "3",
    sender: "Sarah Chen",
    content: "Perfect! Those are great topics. I'll prepare some practical examples we can work through together.",
    time: "10:35 AM",
    isOwn: false
  },
  {
    id: "4",
    sender: "You",
    content: "That sounds amazing. Should we use your CodePen or would you prefer a different environment?",
    time: "10:37 AM",
    isOwn: true
  },
  {
    id: "5",
    sender: "Sarah Chen",
    content: "Great! Let's schedule our React session for tomorrow. I'll set up a shared CodeSandbox environment so we can code together in real-time.",
    time: "10:40 AM",
    isOwn: false
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={mockUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-180px)]">
          {/* Conversations Sidebar */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Card className="glass-card h-full flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>Messages</span>
                  <Badge variant="secondary">{conversations.length}</Badge>
                </CardTitle>
                
                {/* Search */}
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full">
                  <div className="space-y-1 p-4 pt-0">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(conversation)}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedConversation.id === conversation.id
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="relative">
                          <Avatar className="w-12 h-12 border-2 border-primary/20">
                            <AvatarImage src={conversation.avatar} alt={conversation.name} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {conversation.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold truncate">{conversation.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate mb-1">
                            {conversation.lastMessage}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {conversation.skill}
                          </Badge>
                        </div>
                        
                        {conversation.unread > 0 && (
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs text-primary-foreground font-medium">
                              {conversation.unread}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <Card className="glass-card h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10 border-2 border-primary/20">
                        <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {selectedConversation.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-success rounded-full border border-background"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedConversation.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{selectedConversation.online ? "Online" : "Offline"}</span>
                        <span>•</span>
                        <span>{selectedConversation.skill}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
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
              </CardContent>
              
              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      type="text"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="btn-glow"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}