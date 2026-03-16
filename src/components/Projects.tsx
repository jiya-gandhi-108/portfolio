import { Github } from "lucide-react";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/e-commerce.png",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team collaboration features.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      image: "/task_management.png",
      github: "#",
    },
    {
      title: "Real Time Coding Collab Platform",
      description:
        "A coding collaboration platform where developers work together on projects with real-time updates and chat.",
      tags: ["React", "Python", "FastAPI"],
      image: "/code_collab.png",
      github: "#",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Data visualization platform with real-time updates and interactive charts for business insights.",
      tags: ["Vue.js", "D3.js", "WebSocket", "MongoDB"],
      image: "/analytics.png",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center py-20 px-6 transition-colors ${
        isDarkMode ? "bg-gray-800/50" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden border transition-all hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        isDarkMode
                          ? "bg-gray-800 text-cyan-400 border-gray-700"
                          : "bg-gray-100 text-cyan-600 border-gray-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors hover:text-cyan-400 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}