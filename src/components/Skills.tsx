import { Code, Database, Globe, Layers } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: Globe,
      title: 'DevOps',
      skills: ['Docker', 'Git', 'CI/CD', 'AWS', 'Vercel'],
    },
    {
      icon: Layers,
      title: 'Tools',
      skills: ['VS Code', 'Figma', 'Postman', 'Linux', 'Agile'],
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen flex items-center py-20 px-6 transition-colors ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-gray-50 border-gray-300'
                }`}
              >
                <Icon size={32} className="text-cyan-400 mb-4" />
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`text-sm py-1 px-3 rounded-md transition-colors ${
                        isDarkMode
                          ? 'text-gray-400 bg-gray-900'
                          : 'text-gray-700 bg-gray-100'
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border transition-colors ${
            isDarkMode ? 'border-cyan-500/20' : 'border-cyan-500/30'
          }`}
        >
          <p className={`text-center text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Always learning and staying up-to-date with the latest technologies and industry trends
          </p>
        </div>
      </div>
    </section>
  );
}
