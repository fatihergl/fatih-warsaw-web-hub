
import { ChevronDown, MapPin, Calendar, GraduationCap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/c92af3a8-2f25-4527-a945-39c15a1d306b.png"
              alt="Fatih"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-2xl border-4 border-white object-cover"
            />
          </div>

          {/* Main content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Fatih</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            IT Student & Aspiring Developer passionate about creating innovative solutions
          </p>

          {/* Info cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">20 years old</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">IT Student</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Warsaw, Poland</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discover My Journey
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
