
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      github: '#',
      live: '#',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
      github: '#',
      live: '#',
      date: '2024',
      status: 'In Progress'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
      technologies: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      github: '#',
      live: '#',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'Student Portal',
      description: 'A comprehensive student management system for universities, featuring grade tracking, course enrollment, and communication tools.',
      technologies: ['Python', 'Django', 'SQLite', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      github: '#',
      live: '#',
      date: '2023',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on during my studies and personal time. 
            Each project represents a learning journey and showcases different aspects of my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="bg-white/90 text-gray-800"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="border-blue-200 text-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
