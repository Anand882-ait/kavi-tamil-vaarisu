
import React from 'react';
import { Github, Globe, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  github: string;
  website?: string;
  twitter?: string;
  email?: string;
  avatar: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Anand Kumar',
    role: 'Project Creator',
    github: 'anandkumar',
    website: 'https://example.com/anand',
    twitter: 'anandkumar',
    email: 'anand@example.com',
    avatar: 'https://i.pravatar.cc/300?img=1',
    bio: 'Tamil enthusiast and software developer passionate about preserving Tamil literature through technology.'
  },
  {
    name: 'Priya Ramanathan',
    role: 'Lead Developer',
    github: 'priya-ram',
    twitter: 'priya_ram',
    avatar: 'https://i.pravatar.cc/300?img=5',
    bio: 'Full-stack developer with a love for poetry and open-source projects.'
  },
  {
    name: 'Suresh Kumar',
    role: 'Content Curator',
    github: 'sureshkumar',
    email: 'suresh@example.com',
    avatar: 'https://i.pravatar.cc/300?img=3',
    bio: 'Tamil literature professor and researcher helping to curate and verify poem content.'
  },
  {
    name: 'Deepa Venkat',
    role: 'UI/UX Designer',
    github: 'deepav',
    website: 'https://example.com/deepa',
    avatar: 'https://i.pravatar.cc/300?img=4',
    bio: 'Designer passionate about creating intuitive and beautiful interfaces for cultural projects.'
  }
];

const TeamPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-6">Our Team</h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          TamilKavi is maintained by a dedicated team of volunteers passionate about Tamil literature and technology.
          We're grateful to everyone who has contributed to this open-source project.
        </p>
        
        {/* Core Team Members */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Core Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.github} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-tamil-blue mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href={`https://github.com/${member.github}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-tamil-blue transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {member.twitter && (
                      <a 
                        href={`https://twitter.com/${member.twitter}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-tamil-blue transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.website && (
                      <a 
                        href={member.website} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-tamil-blue transition-colors"
                        aria-label={`${member.name}'s Website`}
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-tamil-blue transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contributors */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Contributors</h2>
          <p className="text-center text-gray-600 mb-8">
            We're grateful to everyone who has contributed poems, code, or improvements to the TamilKavi project.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(15)].map((_, i) => (
                <a 
                  key={i}
                  href={`https://github.com/contributor${i}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center hover:text-tamil-blue transition-colors"
                >
                  <img 
                    src={`https://i.pravatar.cc/150?img=${i + 10}`} 
                    alt={`Contributor ${i + 1}`} 
                    className="w-16 h-16 rounded-full mb-2"
                  />
                  <span className="text-sm font-medium">Contributor {i + 1}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Join Us */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8">
            We're always looking for contributors who are passionate about Tamil literature and technology. 
            Whether you're a developer, poet, translator, or enthusiast, there's a place for you in our community.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://github.com/example/tamil-kavithaigal" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contribute on GitHub
            </a>
            <a 
              href="mailto:join@tamilkavi.org" 
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
