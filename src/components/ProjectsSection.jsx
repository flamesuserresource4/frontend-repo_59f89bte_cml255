import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered chat with rooms, typing indicators, and message persistence.',
    tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop',
    link: 'https://example.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'Headless storefront with product search, filters, and seamless checkout.',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1470&auto=format&fit=crop',
    link: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Beautiful charts with role-based access and granular permissions.',
    tech: ['Vite', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjQ3NjU1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://example.com',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A selection of things I’ve built recently.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
