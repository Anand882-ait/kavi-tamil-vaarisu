
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Book, Github, Heart, Home, Info, Package, Send, Users } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-1" /> },
    { name: 'About', path: '/about', icon: <Info className="h-4 w-4 mr-1" /> },
    { name: 'Contribute', path: '/contribute', icon: <Heart className="h-4 w-4 mr-1" /> },
    { name: 'Preview Poems', path: '/preview', icon: <Book className="h-4 w-4 mr-1" /> },
    { name: 'Package Info', path: '/package', icon: <Package className="h-4 w-4 mr-1" /> },
    { name: 'Team', path: '/team', icon: <Users className="h-4 w-4 mr-1" /> },
    { name: 'Submit', path: '/submit', icon: <Send className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-tamil-blue">Tamil<span className="text-tamil-red">Kavi</span>!</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                  location.pathname === item.path 
                    ? "bg-tamil-blue text-white" 
                    : "text-gray-700 hover:bg-tamil-blue/10 transition-colors"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
          
          <a 
            href="https://github.com/example/tamil-kavithaigal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-tamil-blue transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="ml-2 hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
