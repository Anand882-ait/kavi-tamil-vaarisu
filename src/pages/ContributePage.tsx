
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, File, FileJson, Github, GitPullRequest, Send } from 'lucide-react';

const ContributePage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-12">How to Contribute</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-lg mb-6">
              We welcome contributions from everyone who wants to help preserve and promote Tamil literature. 
              There are two main ways to contribute poems to our collection:
            </p>
          </div>
          
          {/* GitHub Contribution */}
          <div className="mb-12 border-2 border-tamil-blue/20 rounded-lg p-8 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="bg-tamil-blue/10 p-4 rounded-full">
                  <Github className="h-16 w-16 text-tamil-blue" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4">Contributing via GitHub</h2>
                <p className="mb-4">
                  If you're familiar with GitHub, this is our preferred method as it maintains proper versioning 
                  and attribution of contributions.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-2">Step-by-Step Process:</h3>
                <ol className="list-decimal list-inside space-y-4">
                  <li className="pl-2">
                    <span className="font-medium">Fork the repository</span>
                    <p className="text-gray-600 mt-1 pl-6">
                      Start by forking our GitHub repository to your own account.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Understand the structure</span>
                    <p className="text-gray-600 mt-1 pl-6">
                      Our data follows this hierarchy: author → book → title → kavithai
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Add your poem</span>
                    <p className="text-gray-600 mt-1 pl-6">
                      Either add to an existing author's file or create a new one following our JSON structure.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Submit a pull request</span>
                    <p className="text-gray-600 mt-1 pl-6">
                      Create a PR with a clear title and description of your contribution.
                    </p>
                  </li>
                </ol>
                
                <div className="mt-8 bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <FileJson className="mr-2 h-5 w-5" />
                    Sample JSON Structure
                  </h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-xs">
{`{
  "author": "Bharathiyar",
  "contact": "",
  "books": [
    {
      "booktitle": "Desiyam",
      "coverimage": "",
      "description": "Patriotic poems",
      "category": "Patriotic",
      "context": [
        {
          "title": "வாழ்க நிரந்தரம்",
          "line": "வாழ்க நிரந்தரம் வாழ்க தமிழ்மொழி...",
          "meaning": "Long live Tamil language..."
        }
      ]
    }
  ]
}`}
                  </pre>
                </div>
                
                <div className="mt-6 flex">
                  <a 
                    href="https://github.com/example/tamil-kavithaigal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center"
                  >
                    <GitPullRequest className="mr-2 h-5 w-5" />
                    Visit our GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Submission */}
          <div className="mb-12 border-2 border-tamil-gold/20 rounded-lg p-8 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="bg-tamil-gold/10 p-4 rounded-full">
                  <File className="h-16 w-16 text-tamil-gold-dark" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4">Contributing via Submission Form</h2>
                <p className="mb-4">
                  Not comfortable with GitHub? No problem! You can use our submission form to contribute poems.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-2">What You'll Need:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Author Name</li>
                  <li>Book Name (optional)</li>
                  <li>Kavithai Title</li>
                  <li>Kavithai Text</li>
                  <li>Email (optional, for attribution)</li>
                  <li>GitHub username (if any)</li>
                </ul>
                
                <p className="mt-6">
                  Our team will review submissions and add them to the repository, with full attribution to the contributor.
                </p>
                
                <div className="mt-6 flex">
                  <Link to="/submit" className="btn-secondary flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Go to Submission Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-tamil-earth-light p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Ready to contribute?</h3>
            <p className="mb-6">
              Choose the method that works best for you and start sharing Tamil poetry with the world.
            </p>
            <Link to="/submit" className="btn-primary inline-flex items-center">
              Submit a Poem Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributePage;
