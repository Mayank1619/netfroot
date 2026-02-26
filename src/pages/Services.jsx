import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Globe, Rocket, BarChart3, Target, Cpu } from 'lucide-react'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: <Globe className="w-16 h-16 text-primary" />,
      title: 'Website Creation',
      description: 'Custom-built, responsive websites designed to captivate your audience and drive conversions.',
      features: [
        'Modern, responsive design',
        'Lightning-fast performance',
        'Mobile-first approach',
        'SEO-optimized structure',
        'Custom functionality',
        'Ongoing maintenance support',
      ],
      aiImage: 'Clean UI mockups of websites, SEO dashboards, and marketing funnels.',
    },
    {
      icon: <Rocket className="w-16 h-16 text-primary" />,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies that improve your search rankings and increase organic traffic.',
      features: [
        'Keyword research & analysis',
        'On-page optimization',
        'Technical SEO audits',
        'Content optimization',
        'Link building strategies',
        'Monthly performance reports',
      ],
      aiImage: 'Minimalistic flat-lay of modern analytics dashboards showing SEO metrics and growth charts.',
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-primary" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns across multiple channels to maximize your ROI.',
      features: [
        'Social media marketing',
        'PPC advertising',
        'Email marketing campaigns',
        'Content marketing',
        'Brand strategy',
        'Analytics & reporting',
      ],
      aiImage: 'Abstract digital marketing dashboard animation with glowing data streams and social media icons.',
    },
    {
      icon: <Target className="w-16 h-16 text-primary" />,
      title: 'Lead Generation Systems',
      description: 'Sophisticated systems that capture, nurture, and convert leads into loyal customers.',
      features: [
        'Landing page design',
        'Conversion optimization',
        'Marketing automation',
        'CRM integration',
        'Lead scoring systems',
        'A/B testing & optimization',
      ],
      aiImage: '3D holographic-style interface showing lead generation and automation flows with conversion funnels.',
    },
    {
      icon: <Cpu className="w-16 h-16 text-primary" />,
      title: 'AI Automation & Integrations',
      description: 'Cutting-edge AI solutions that streamline your operations and enhance customer experiences.',
      features: [
        'Custom AI chatbots',
        'Workflow automation',
        'API integrations',
        'Data processing & analysis',
        'Predictive analytics',
        'Intelligent recommendations',
      ],
      aiImage: 'Abstract neon-blue AI circuit pattern representing automation and machine intelligence with flowing data.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent/20 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive digital solutions designed to help your business thrive in the modern world
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`}>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-display font-bold mb-4 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl font-semibold mb-4 dark:text-white">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block btn-primary"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Service Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-slide-in`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={`/assets/images/services/${['web-creation', 'seo', 'marketing', 'leads', 'ai'][index]}.jpg`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Free Consultation
            </Link>
            <Link to="/pricing" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
