import { Clock, Shield, Star, Truck } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
              Fast & Reliable{" "}
              <span className="text-pink-500">Parcel Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Experience the future of delivery with speed, care, and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                to="/register"
                className="px-10 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
                Get Started
              </Link>
              <Link
                to="/about"
                className="px-10 py-4 border-2 border-pink-500 text-pink-500 font-bold rounded-full hover:bg-pink-500 hover:text-white transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://parceldex.com/frontend/images/head.png"
              alt="Parcel Delivery"
              className="rounded-3xl shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: (
                  <Truck className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                ),
                title: "Super Fast Delivery",
                desc: "Next-day delivery guaranteed with real-time tracking.",
              },
              {
                icon: (
                  <Clock className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                ),
                title: "Real-Time Tracking",
                desc: "Monitor your packages anytime with our advanced dashboard.",
              },
              {
                icon: (
                  <Shield className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                ),
                title: "Safe & Secure",
                desc: "Your packages are handled with utmost care and security.",
              },
              {
                icon: <Star className="w-16 h-16 text-pink-500 mx-auto mb-4" />,
                title: "Customer Satisfaction",
                desc: "Thousands of happy customers rate our service 5 stars.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                {feature.icon}
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to Send Your Package?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience seamless
            delivery.
          </p>
          <Link
            to="/register"
            className="mt-6 inline-block px-12 py-4 bg-white text-pink-500 font-bold rounded-full shadow-lg hover:opacity-90 transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 text-white text-center">
        <p>&copy; 2025 SwiftParcel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
