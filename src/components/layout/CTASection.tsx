import React from 'react'

const CTASection = () => {
  return (
    <div className="bg-blue-600 text-white">
        <div className="w-full mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already studying smarter with AI.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50">
              Get Started Free
            </button>
            <p className="mt-4 text-sm text-blue-100">No credit card required</p>
          </div>
        </div>
      </div>  )
}

export default CTASection