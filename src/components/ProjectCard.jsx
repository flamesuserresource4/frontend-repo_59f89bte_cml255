function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden dark:bg-gray-900 dark:ring-gray-800">
      {project.image && (
        <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech?.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              {t}
            </span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">Visit →</a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
