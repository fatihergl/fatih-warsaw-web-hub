
import { Code, Database, Globe, Laptop } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate IT student currently pursuing my degree in Warsaw. 
            My journey in technology started with curiosity and has evolved into a deep love for coding and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">My Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At 20 years old, I'm dedicated to mastering the art of software development. 
                Currently studying IT in the vibrant city of Warsaw, I'm constantly exploring 
                new technologies and building projects that challenge my skills.
              </p>
              <p>
                My passion lies in creating efficient, elegant solutions to complex problems. 
                Whether it's web development, database design, or exploring emerging technologies, 
                I approach each challenge with curiosity and determination.
              </p>
              <p>
                When I'm not coding, you can find me exploring Warsaw's tech scene, 
                contributing to open-source projects, or learning about the latest industry trends.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Code, title: 'Web Development', desc: 'Frontend & Backend' },
              { icon: Database, title: 'Database Design', desc: 'SQL & NoSQL' },
              { icon: Globe, title: 'Modern Frameworks', desc: 'React, Node.js' },
              { icon: Laptop, title: 'Problem Solving', desc: 'Algorithms & Logic' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
