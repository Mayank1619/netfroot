import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Globe, Cpu, Rocket, BarChart3, Target } from 'lucide-react'

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const packages = [
    {
      name: 'Static Website',
      icon: <Globe className="w-16 h-16 text-primary mx-auto" />,
      description: 'Perfect for businesses needing a professional online presence',
      price: 100,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'SSL certificate',
        'Free domain (1st year)',
        'Monthly updates',
        'Email support',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'AI-Powered Apps',
      icon: <Cpu className="w-16 h-16 text-primary mx-auto" />,
      description: 'Advanced applications with cutting-edge AI integration',
      price: 500,
      features: [
        'Custom AI functionality',
        'Advanced automation',
        'API integrations',
        'Real-time data processing',
        'Scalable architecture',
        'Premium hosting',
        'Priority support',
        'Regular AI model updates',
        'Advanced analytics',
        'Custom dashboards',
      ],
      popular: true,
      color: 'from-primary to-accent',
    },
  ]

  const additionalServices = [
    {
      name: 'SEO Optimization',
      icon: <Rocket className="w-12 h-12 text-primary" />,
      description: 'Comprehensive SEO services to boost your online visibility',
      pricing: 'Starting at $300/month',
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO',
        'Content strategy',
        'Monthly reporting',
      ],
    },
    {
      name: 'Digital Marketing',
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      description: 'Multi-channel marketing campaigns tailored to your goals',
      pricing: 'Starting at $400/month',
      features: [
        'Social media management',
        'PPC campaigns',
        'Email marketing',
        'Content creation',
        'Performance tracking',
      ],
    },
    {
      name: 'Lead Generation',
      icon: <Target className="w-12 h-12 text-primary" />,
      description: 'Automated systems to capture and nurture leads',
      pricing: 'Starting at $350/month',
      features: [
        'Landing page optimization',
        'Marketing automation',
        'CRM integration',
        'Lead scoring',
        'Conversion tracking',
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent/20 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative card ${
                  pkg.popular ? 'border-4 border-primary shadow-2xl scale-105' : ''
                } animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">{pkg.icon}</div>
                  <h3 className="text-3xl font-display font-bold mb-2 dark:text-white">{pkg.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{pkg.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      /year
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Billed annually (${(pkg.price / 12).toFixed(2)}/month)
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary mr-3 flex-shrink-0"
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

                <Link
                  to="/contact"
                  className={`block text-center ${
                    pkg.popular ? 'btn-primary' : 'btn-outline'
                  } w-full`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enhance your package with our premium add-on services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="card hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary mb-6">{service.pricing}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 text-primary mr-2 flex-shrink-0"
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
                <Link to="/contact" className="btn-outline w-full block text-center">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">
              More Offers Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're constantly expanding our services to better serve you. Stay tuned for exciting new packages and features!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-3">🔜</div>
                <h4 className="font-bold text-lg mb-2 dark:text-white">Enterprise Solutions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Custom packages for large organizations</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-3">🔜</div>
                <h4 className="font-bold text-lg mb-2 dark:text-white">E-Commerce Packages</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete online store solutions</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-3">🔜</div>
                <h4 className="font-bold text-lg mb-2 dark:text-white">Mobile App Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">iOS & Android applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely! You can upgrade your plan at any time. We\'ll prorate the cost and you\'ll only pay the difference.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees! The price you see is the price you pay.',
              },
              {
                q: 'What if I need custom features?',
                a: 'Contact us for a custom quote. We love building tailored solutions!',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
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
            Choose your plan and launch your project today
          </p>
          <Link to="/contact" className="btn-secondary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing
