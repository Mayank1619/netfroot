import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Globe, Rocket, BarChart3, Target, Cpu, Zap } from 'lucide-react'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: 'Website Creation',
      description: 'Modern, responsive websites built with cutting-edge technology',
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: 'SEO Optimization',
      description: 'Boost your visibility and rank higher in search results',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that deliver measurable results',
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: 'Lead Generation',
      description: 'Convert visitors into customers with proven strategies',
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: 'AI Automation',
      description: 'Streamline operations with intelligent automation solutions',
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
  ]

  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-accent/20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Modern website creation, SEO optimization, and AI-powered automation solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Get Started
                </Link>
                <Link to="/pricing" className="btn-outline text-center">
                  View Packages
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Video */}
            <div className="relative animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl shadow-xl animate-bounce hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl shadow-xl animate-pulse hidden lg:block"></div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              Experience the Future
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch how we transform ideas into powerful digital solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video 
              className="w-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/videos/abstract-futuristic-animation-glowing-neon-blue-pa.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/portfolio" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
