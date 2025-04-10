
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, GraduationCap, HeartHandshake, Languages, Terminal } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-12">About the Project</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What is TamilKavi?</h2>
            <p className="text-lg mb-4">
              TamilKavi is an open-source Python package designed to facilitate the sharing and 
              utilization of Tamil kavithaigal (poems) across various applications and websites.
            </p>
            <p className="text-lg">
              Our mission is to preserve and promote Tamil literature by creating a community-driven 
              library of poems that is freely accessible to everyone, from students and educators to 
              developers and AI researchers.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Who Can Use TamilKavi?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                <div className="mr-4">
                  <div className="bg-tamil-blue/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-tamil-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Students</h3>
                  <p className="text-gray-600">
                    Access classic and contemporary Tamil poetry for academic study, research, and appreciation.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                <div className="mr-4">
                  <div className="bg-tamil-blue/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-tamil-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">App Developers</h3>
                  <p className="text-gray-600">
                    Integrate Tamil poetry into applications, websites, and digital products easily.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                <div className="mr-4">
                  <div className="bg-tamil-blue/10 p-3 rounded-full">
                    <Languages className="h-6 w-6 text-tamil-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Language Enthusiasts</h3>
                  <p className="text-gray-600">
                    Explore the beauty and richness of Tamil poetry from various time periods and authors.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                <div className="mr-4">
                  <div className="bg-tamil-blue/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-tamil-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Poets & Creators</h3>
                  <p className="text-gray-600">
                    Share your original work with a global audience and contribute to Tamil literary culture.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                <div className="mr-4">
                  <div className="bg-tamil-blue/10 p-3 rounded-full">
                    <Terminal className="h-6 w-6 text-tamil-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI/ML Researchers</h3>
                  <p className="text-gray-600">
                    Use structured poetry data for training language models and NLP research on Tamil text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              We envision TamilKavi as the go-to resource for Tamil poetry in the digital age, 
              bridging traditional literature with modern technology. By creating an open-source 
              foundation for Tamil poetry, we aim to ensure that this rich cultural heritage 
              remains accessible to future generations and can be integrated into emerging technologies.
            </p>
          </div>
          
          <div className="bg-tamil-earth-light p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <HeartHandshake className="h-24 w-24 mx-auto text-tamil-earth-dark" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-3">Want to Contribute?</h3>
                <p className="mb-4">
                  TamilKavi is built by the community. Whether you're a poet, developer, translator, 
                  or just passionate about Tamil literature, there are many ways to get involved.
                </p>
                <Link to="/contribute" className="btn-primary inline-block">
                  Learn How to Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
