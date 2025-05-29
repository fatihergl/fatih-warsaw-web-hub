
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">Fatih</h3>
          </div>
          
          <p className="text-gray-400 mb-4">
            IT Student & Developer from Warsaw, Poland
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Fatih. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
