
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'SQL', level: 75, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'TypeScript', level: 70, category: 'Programming' }
  ];

  const categories = ['Programming', 'Frontend', 'Backend', 'Database', 'Tools'];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a snapshot of the technologies and tools I work with. 
            I'm constantly learning and expanding my skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
                {category}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        {/* Learning section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Docker', 'Kubernetes', 'AWS', 'GraphQL', 'Next.js'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
