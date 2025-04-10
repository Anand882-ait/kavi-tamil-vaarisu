
import React from 'react';
import { Github, Heart, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tamil-blue-dark text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Tamil<span className="text-tamil-gold">Kavi</span>!</h3>
            <p className="text-gray-300">
              An open-source Tamil poetry collection. Free to use, contribute, and share.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-tamil-gold transition-colors">About the Project</a>
              </li>
              <li>
                <a href="/contribute" className="text-gray-300 hover:text-tamil-gold transition-colors">How to Contribute</a>
              </li>
              <li>
                <a href="/preview" className="text-gray-300 hover:text-tamil-gold transition-colors">Preview Poems</a>
              </li>
              <li>
                <a href="/package" className="text-gray-300 hover:text-tamil-gold transition-colors">Package Info</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/example/tamil-kavithaigal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tamil-gold">
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:contact@tamilkavi.org" className="text-white hover:text-tamil-gold">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/tamilkavi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tamil-gold">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Built with <Heart className="h-4 w-4 inline text-tamil-red" /> by the Tamil community
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-tamil-blue text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} TamilKavi. Licensed under MIT. 
            All contributed poems belong to their respective authors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
