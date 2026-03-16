import { Github, LinkedinIcon, Mail, ChevronDown, Sparkles, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full Stack Developer';
  const subtexts = [
    'Building elegant solutions with modern technologies',
    'Crafting beautiful, scalable web applications',
    'Turning ideas into reality through code',
  ];
  const [currentSubtext, setCurrentSubtext] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSubtext((prev) => (prev + 1) % subtexts.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSubtext]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'Jiya_Gandhi_resume.pdf';
    link.download = 'Jiya_Gandhi_resume.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-16 px-6 overflow-hidden transition-colors ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob ${
            isDarkMode ? 'bg-cyan-500' : 'bg-cyan-400'
          }`}
        ></div>
        <div
          className={`absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        ></div>
        <div
          className={`absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
          }`}
        ></div>
      </div>

      <div className="container mx-auto text-center max-w-4xl relative">

        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="animate-pulse">_</span>
          </h1>

          <div className="relative h-12 mb-8">
            <p
              key={currentSubtext}
              className="text-xl md:text-2xl text-gray-300 animate-fade-in leading-relaxed transition-all duration-500"
            >
              {subtexts[currentSubtext]}
            </p>
          </div>

          <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            I create engaging digital experiences with cutting-edge technologies.
            Let's build something amazing together.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/jiya-gandhi-108"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:jiya108gandhi@gmail.com"
            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore My Work</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={downloadResume}
            className={`px-8 py-4 border rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-2 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-cyan-500'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-cyan-500'
            }`}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 border rounded-xl font-semibold text-lg transition-all hover:scale-105 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-cyan-500'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-cyan-500'
            }`}
          >
            Get In Touch
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </div>
    </section>
  );
}
