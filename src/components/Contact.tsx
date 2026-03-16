import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919213729985";

    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center py-20 px-6 transition-colors ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Let's Work Together
              </h3>
              <p
                className={`leading-relaxed mb-8 ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={
                      isDarkMode ? "text-gray-300" : "text-gray-900"
                    }
                  >
                    jiya108gandhi@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <MapPin size={24} className="text-cyan-400" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    Location
                  </p>
                  <p
                    className={
                      isDarkMode ? "text-gray-300" : "text-gray-900"
                    }
                  >
                    Delhi NCR, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-gray-100"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-gray-100"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border resize-none ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-gray-100"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2 text-white"
            >
              <span>Send Message</span>
              <Send size={20} />
            </button>
          </form>
        </div>

        <footer
          className={`mt-20 pt-8 border-t text-center ${
            isDarkMode
              ? "border-gray-800 text-gray-500"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <p>Jiya Gandhi Portfolio 2026</p>
        </footer>
      </div>
    </section>
  );
}