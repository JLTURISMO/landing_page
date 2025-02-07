"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Star,
  Send,
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    {
      title: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      price: "$1,299",
      rating: 4.9,
    },
    {
      title: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      price: "$999",
      rating: 4.8,
    },
    {
      title: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      price: "$1,599",
      rating: 4.9,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "The most amazing travel experience of my life. Everything was perfectly organized!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "Professional service with attention to every detail. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Wanderlust</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#destinations"
                className="text-gray-700 hover:text-primary"
              >
                Destinations
              </a>
              <a href="#deals" className="text-gray-700 hover:text-primary">
                Deals
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary">
                Contact
              </a>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
          alt="Tropical paradise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience the world&apos;s most breathtaking destinations
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Journey <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">{dest.price}</span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1">{dest.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Travel Updates</h2>
          <p className="mb-8">
            Subscribe to our newsletter for exclusive deals and travel tips
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900"
            />
            <Button variant="secondary" className="ml-2">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6" />
                <span className="font-bold text-xl text-white">Wanderlust</span>
              </div>
              <p className="text-sm">
                Your trusted partner in creating unforgettable travel
                experiences.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@wanderlust.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
