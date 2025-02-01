'use client'
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Sparkles, Clock } from "lucide-react";

const MockUI = () => {
  const sampleNotes = [
    {
      title: "Newton's Laws of Motion",
      content:
        "Newton's First Law: An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.",
    },
    {
      title: "Thermodynamics",
      content:
        "The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another.",
    },
    {
      title: "Quantum Mechanics",
      content:
        "The Heisenberg Uncertainty Principle states that it is impossible to simultaneously know the exact position and momentum of a particle.",
    },
  ];

  // Floating animation configuration
  const floatingAnimation = {
    y: [0, -10, 0], // Move up and down
    transition: {
      duration: 2, // Duration of one loop
      repeat: Infinity, // Repeat infinitely
      ease: "easeInOut", // Smooth easing
    },
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-24">
        <div className="bg-white rounded-xl shadow-md relative">
          <div className="space-y-4 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold">Physics Notes</h3>
                <p className="text-sm text-gray-500">AI Analysis Complete</p>
              </div>
            </div>

            {sampleNotes.map((notes, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800">{notes.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{notes.content}</p>
              </div>
            ))}

            {/* AI-Enhanced Badge with Framer Motion */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
              animate={floatingAnimation} 
            >
              <Sparkles className="w-6 h-6 mb-2" />
              <p className="text-sm">AI-Enhanced</p>
            </motion.div>

            {/* Learn 5x Faster Badge with Framer Motion */}
            <motion.div
              className="absolute -bottom-14 -left-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
              animate={floatingAnimation} 
            >
              <Clock className="w-6 h-6 mb-2" />
              <p className="text-sm">Learn 5x Faster</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockUI;