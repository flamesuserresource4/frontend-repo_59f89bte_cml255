import { Code, Database, Rocket, Layers, Server } from 'lucide-react'

function Skills() {
  const skills = [
    { name: 'Frontend', icon: Code },
    { name: 'Backend', icon: Server },
    { name: 'Databases', icon: Database },
    { name: 'Architecture', icon: Layers },
    { name: 'Performance', icon: Rocket },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Skills</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A snapshot of what I use to build and ship.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col items-center text-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <Icon className="h-8 w-8 text-gray-700 dark:text-gray-200" />
              <span className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-100">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
