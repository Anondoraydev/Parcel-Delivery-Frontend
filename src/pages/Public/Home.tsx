import { Clock, Shield, Star, Truck } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-r from-primary to-accent/70 text-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Fast & Reliable <span className="text-accent">Parcel Delivery</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-12 opacity-90">
            Delivering your packages with care, speed, and precision. Trusted by
            thousands of customers nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/register"
              className="bg-accent text-white font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Get Started
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition duration-300">
              Learn More
            </Link>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureCard
              Icon={Truck}
              title="Fast Delivery"
              description="Next-day and express delivery options available nationwide."
            />
            <FeatureCard
              Icon={Clock}
              title="Real-time Tracking"
              description="Track your parcels in real-time with our advanced tracking system."
            />
            <FeatureCard
              Icon={Shield}
              title="Secure Handling"
              description="Your packages are handled with care and security at every step."
            />
            <FeatureCard
              Icon={Star}
              title="Rated 5 Stars"
              description="Thousands of satisfied customers rate our service excellent."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-r from-primary to-accent/70 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Send a Package?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
            Create an account today and experience the fastest, most reliable
            parcel delivery service.
          </p>
          <Link
            to="/register"
            className="bg-white text-primary font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 inline-block">
            Sign Up Now
          </Link>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
      </section>
    </div>
  );
};

// Reusable Feature Card Component with Glassmorphism Effect
interface FeatureCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => (
  <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300">
    <Icon className="w-14 h-14 text-accent mx-auto mb-4" />
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-white/80">{description}</p>
  </div>
);

export default Home;
