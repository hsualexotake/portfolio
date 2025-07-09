import React from 'react'

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 70 }
  ]

  const technologies = [
    'React', 'Vue.js', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'TypeScript', 'Python', 'GraphQL'
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating modern web applications. I love turning complex problems into 
                simple, beautiful designs.
              </p>
              <p className="leading-relaxed">
                My journey in tech started with curiosity about how websites work, 
                which led me to dive deep into both frontend and backend development. 
                I enjoy working with cutting-edge technologies and am always eager 
                to learn new skills.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 delay-100"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Photo and Tech Stack */}
          <div className="space-y-8">
            {/* Profile Photo Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 