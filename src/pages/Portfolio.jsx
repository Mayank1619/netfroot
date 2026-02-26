import { useState, useEffect } from 'react'
import { Globe, Rocket, BarChart3, Cpu, Package, Users, TrendingUp, Star } from 'lucide-react'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['all', 'website', 'seo', 'marketing', 'ai-automation']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      category: 'website',
      description: 'Complete overhaul of an online retail platform with modern UI/UX and enhanced performance.',
      tags: ['React', 'E-Commerce', 'UI/UX'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 2,
      title: 'SEO Campaign - Tech Startup',
      category: 'seo',
      description: 'Increased organic traffic by 350% through comprehensive SEO strategy and content optimization.',
      tags: ['SEO', 'Content', 'Analytics'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 3,
      title: 'AI Chatbot Integration',
      category: 'ai-automation',
      description: 'Custom AI chatbot for customer service automation, reducing support tickets by 60%.',
      tags: ['AI', 'Automation', 'Customer Service'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 4,
      title: 'Social Media Marketing Campaign',
      category: 'marketing',
      description: 'Multi-platform marketing strategy that increased brand engagement by 280%.',
      tags: ['Social Media', 'Marketing', 'Branding'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 5,
      title: 'SaaS Landing Page',
      category: 'website',
      description: 'High-converting landing page for a B2B SaaS product with integrated lead generation.',
      tags: ['Landing Page', 'SaaS', 'Conversion'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 6,
      title: 'Lead Generation System',
      category: 'ai-automation',
      description: 'Automated lead capture and nurturing system using AI-powered email sequences.',
      tags: ['Lead Gen', 'Automation', 'Email'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 7,
      title: 'Local SEO for Restaurant Chain',
      category: 'seo',
      description: 'Local SEO optimization resulting in 5x increase in Google Maps visibility.',
      tags: ['Local SEO', 'Google Maps', 'Reviews'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 8,
      title: 'Content Marketing Strategy',
      category: 'marketing',
      description: 'Comprehensive content strategy with blog, video, and social media integration.',
      tags: ['Content', 'Strategy', 'Multi-Channel'],
      link: '#',
      status: 'View Project',
    },
    {
      id: 9,
      title: 'Custom CRM Development',
      category: 'ai-automation',
      description: 'Tailored CRM solution with AI-powered insights and workflow automation.',
      tags: ['CRM', 'AI', 'Custom Dev'],
      link: '#',
      status: 'View Project',
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent/20 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white dark:bg-gray-900 py-8 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <a
                key={`${project.id}-${project.category}`}
                href={project.link}
                className="card group cursor-pointer animate-fade-in hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Icon Placeholder */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 p-12 flex items-center justify-center min-h-48">
                  <div className="text-center">
                    <div className="mb-3 group-hover:scale-110 transition-transform">
                      {project.category === 'website' && <Globe className="w-16 h-16 text-primary mx-auto" />}
                      {project.category === 'seo' && <Rocket className="w-16 h-16 text-primary mx-auto" />}
                      {project.category === 'marketing' && <BarChart3 className="w-16 h-16 text-primary mx-auto" />}
                      {project.category === 'ai-automation' && <Cpu className="w-16 h-16 text-primary mx-auto" />}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 font-medium">{project.status}</p>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              Results That Speak
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our projects consistently deliver exceptional outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Delivered', icon: <Package className="w-12 h-12 text-primary" /> },
              { number: '50+', label: 'Happy Clients', icon: <Users className="w-12 h-12 text-primary" /> },
              { number: '250%', label: 'Avg. ROI Increase', icon: <TrendingUp className="w-12 h-12 text-primary" /> },
              { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-12 h-12 text-primary" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center card animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create your success story together
          </p>
          <a href="/contact" className="btn-secondary">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
