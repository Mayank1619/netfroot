import { useState, useEffect } from 'react'
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // TODO: Firebase Integration
    // import { getFirestore, collection, addDoc } from 'firebase/firestore'
    // const db = getFirestore()
    // 
    // try {
    //   await addDoc(collection(db, 'contacts'), {
    //     ...formData,
    //     timestamp: new Date(),
    //   })
    //   setIsSubmitted(true)
    //   setFormData({ name: '', email: '', company: '', message: '' })
    // } catch (error) {
    //   console.error('Error submitting form:', error)
    // }

    // Temporary: Just show success message
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: 'Email',
      value: 'netfroot@gmail.com',
      link: 'mailto:netfroot@gmail.com',
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: 'Phone',
      value: '(647) 871-2090',
      link: 'tel:6478712090',
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-primary" />,
      title: 'Live Chat',
      value: 'Available 24/7',
      link: '#',
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: 'Location',
      value: 'Canada',
      link: '#',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent/20 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="card">
                <h2 className="text-3xl font-display font-bold mb-6 dark:text-white">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-success/10 border-2 border-success text-success px-6 py-8 rounded-xl text-center animate-fade-in">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                      <span className="inline-block bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
                        ⚠️ Note: Form will be connected to Firebase in future
                      </span>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold mb-6 dark:text-white">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Prefer to reach out directly? Here are other ways to connect with us.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="card flex items-start space-x-4 hover:scale-105"
                    >
                      <div>{info.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">{info.title}</h3>
                        <p className="text-primary">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Team Collaboration Image */}
              <div className="card overflow-hidden">
                <img 
                  src="/assets/images/contact/team-collaboration.jpg" 
                  alt="Creative team collaboration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Business Hours */}
              <div className="card mt-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Business Hours</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MessageCircle className="w-4 h-4" />
                      <span>Live chat available 24/7 for urgent inquiries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'How quickly can you start my project?',
                a: 'Most projects can begin within 1-2 weeks of contract signing.',
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes! We offer free 30-minute consultations to discuss your needs.',
              },
              {
                q: 'What is your typical project timeline?',
                a: 'Timelines vary, but most websites take 4-8 weeks from start to launch.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Absolutely! All packages include ongoing support and maintenance.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-2 dark:text-white">{faq.q}</h3>
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
            Let's Build Something Amazing
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Your next great digital project starts here
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-secondary">
              Schedule Free Consultation
            </a>
            <a href="/pricing" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* TODO: AI Chatbot Integration Point */}
      {/* 
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <span className="text-2xl">💬</span>
        </button>
      </div>
      */}
    </div>
  )
}

export default Contact
