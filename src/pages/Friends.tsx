
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Calendar, Users } from 'lucide-react';

const Friends = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'War$aw!') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, Friend!</h1>
            <p className="text-gray-600">Enter the password to access personal content</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            
            <Button 
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700"
            >
              Access Private Section
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-4">Hey Friend! 👋</h1>
            <p className="text-gray-600">Welcome to my personal space. Here's what's been happening in my life!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Family Photos Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-6">
              <Camera className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Family Moments</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="w-full h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg flex items-center justify-center mb-3">
                  <Camera className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600">Family vacation in Zakopane</p>
                <p className="text-xs text-gray-500">December 2024</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="w-full h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg flex items-center justify-center mb-3">
                  <Camera className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600">Birthday celebration at home</p>
                <p className="text-xs text-gray-500">November 2024</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="w-full h-32 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-lg flex items-center justify-center mb-3">
                  <Camera className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600">Weekend at the lake</p>
                <p className="text-xs text-gray-500">October 2024</p>
              </div>
            </div>
          </div>

          {/* Party Dates Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-purple-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">New Year's Party</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">December 31, 2024 - 8:00 PM</p>
                <p className="text-sm text-gray-500">My apartment, Warsaw</p>
              </div>
              
              <div className="border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">Game Night</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">January 15, 2025 - 7:00 PM</p>
                <p className="text-sm text-gray-500">Board games & pizza!</p>
              </div>
              
              <div className="border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-800">Birthday Surprise</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">February 20, 2025 - 6:00 PM</p>
                <p className="text-sm text-gray-500">Shh... it's for Ania! 🤫</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Updates</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800">Started learning React Native for mobile development</p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800">Finished my final exams for the semester! 🎉</p>
                <p className="text-xs text-gray-500">1 week ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800">Adopted a new kitten - meet Whiskers! 🐱</p>
                <p className="text-xs text-gray-500">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="px-8 py-2"
          >
            ← Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
