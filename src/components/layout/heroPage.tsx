'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Brain,
  Target,
  Clock,
  Users,
  Trophy,
  BookOpen,
} from "lucide-react";

const HeroPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const phrases = [
    "Learn Brilliantly",
    "Study Smarter",
    "Master Faster",
    "Think Better"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-Powered" },
    { icon: <Target className="w-5 h-5" />, text: "Personalized Path" },
    { icon: <Clock className="w-5 h-5" />, text: "Learn 2x Faster" },
  ];

  const stats = [
    { number: "50K+", text: "Active Students" },
    { number: "1M+", text: "Flashcards Created" },
    { number: "95%", text: "Success Rate" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-600">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>AI-Powered Learning Platform</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {phrases[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="text-blue-600">with AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform any study material into an interactive learning
              experience with AI-powered flashcards, quizzes, and personalized
              study paths. Master concepts faster and retain information longer.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center">
                Start Learning Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50">
                Contact Us
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="flex space-x-4 items-center text-gray-600 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <p>
                Joined by <span className="font-bold">50,000+</span> students
              </p>
            </div>
          </div>
          {/* Right Column - Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <div className="grid gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      {index === 0 ? (
                        <Users className="w-6 h-6 text-blue-600" />
                      ) : index === 1 ? (
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      ) : (
                        <Trophy className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </h3>
                      <p className="text-gray-600">{stat.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;