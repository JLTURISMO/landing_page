'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Mail, Timer, Twitter } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success('Thank you for subscribing! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-8">
        {/* Construction Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Timer className="w-12 h-12 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2">
            <div className="w-6 h-6 bg-primary/20 rounded-full animate-ping" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Something Amazing Is Coming
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working hard to bring you something extraordinary. Our new site is under construction, 
            but we're making progress every day.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto w-full space-y-2">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000"
              style={{ width: '75%' }}
            />
          </div>
          <p className="text-sm text-muted-foreground">75% Complete</p>
        </div>

        {/* Newsletter Signup */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto w-full space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit">Notify Me</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Be the first to know when we launch.
          </p>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}