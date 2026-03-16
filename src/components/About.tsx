import { Code2, Coffee, Rocket } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly exploring new technologies and best practices",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
  ];

  return (
    <section
      id="about"
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
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Text */}
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate developer with a love for creating beautiful,
              functional web applications. With expertise in modern frameworks
              and a keen eye for design, I bring ideas to life through code.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              My journey in software development has equipped me with a diverse
              skill set, allowing me to tackle both frontend and backend
              challenges with confidence and creativity.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <div
              className={`relative w-full max-w-sm rounded-full overflow-hidden border ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <img
                src="/jiya.jpeg"
                alt="Jiya Gandhi"
                className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              >
                <Icon size={40} className="text-cyan-400 mb-4" />

                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}