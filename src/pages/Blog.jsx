import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Code, Search, Zap, Megaphone, BookOpen, Mail } from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['all', 'web-development', 'seo', 'ai-automation', 'marketing', 'tutorials']

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: AI-Powered Applications',
      excerpt: 'Discover how artificial intelligence is revolutionizing web development and creating smarter, more intuitive applications.',
      category: 'web-development',
      author: 'NetFroot Team',
      date: 'February 15, 2026',
      readTime: '5 min read',
      tags: ['AI', 'Web Dev', 'Innovation'],
      aiImage: 'Futuristic web development workspace with AI coding assistant and holographic interface.',
    },
    {
      id: 2,
      title: '10 SEO Strategies That Actually Work in 2026',
      excerpt: 'Learn the latest SEO techniques that will boost your rankings and drive organic traffic to your website.',
      category: 'seo',
      author: 'NetFroot Team',
      date: 'February 12, 2026',
      readTime: '8 min read',
      tags: ['SEO', 'Marketing', 'Growth'],
      aiImage: 'Analytics dashboard showing SEO metrics with upward trending graphs and search rankings.',
    },
    {
      id: 3,
      title: 'Building Custom AI Chatbots for Your Business',
      excerpt: 'A comprehensive guide to implementing AI chatbots that enhance customer service and automate support.',
      category: 'ai-automation',
      author: 'NetFroot Team',
      date: 'February 10, 2026',
      readTime: '10 min read',
      tags: ['AI', 'Chatbots', 'Automation'],
      aiImage: 'Modern AI chatbot interface with conversation bubbles and neural network connections.',
    },
    {
      id: 4,
      title: 'Digital Marketing Trends You Can\'t Ignore',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that are reshaping the industry.',
      category: 'marketing',
      author: 'NetFroot Team',
      date: 'February 8, 2026',
      readTime: '6 min read',
      tags: ['Marketing', 'Trends', 'Strategy'],
      aiImage: 'Digital marketing dashboard with multichannel campaign metrics and social media analytics.',
    },
    {
      id: 5,
      title: 'Getting Started with React and Vite: A Beginner\'s Guide',
      excerpt: 'Learn how to build lightning-fast React applications using Vite as your build tool.',
      category: 'tutorials',
      author: 'NetFroot Team',
      date: 'February 5, 2026',
      readTime: '12 min read',
      tags: ['React', 'Vite', 'Tutorial'],
      aiImage: 'Code editor showing React and Vite configuration with terminal output.',
    },
    {
      id: 6,
      title: 'Optimizing Website Performance: A Complete Guide',
      excerpt: 'Boost your website speed and performance with these proven optimization techniques.',
      category: 'web-development',
      author: 'NetFroot Team',
      date: 'February 3, 2026',
      readTime: '9 min read',
      tags: ['Performance', 'Optimization', 'Web Dev'],
      aiImage: 'Performance metrics dashboard showing page load times and optimization scores.',
    },
    {
      id: 7,
      title: 'AI-Driven Lead Generation: The Complete Strategy',
      excerpt: 'Leverage artificial intelligence to capture, qualify, and convert more leads automatically.',
      category: 'ai-automation',
      author: 'NetFroot Team',
      date: 'February 1, 2026',
      readTime: '7 min read',
      tags: ['AI', 'Lead Gen', 'Automation'],
      aiImage: 'Automated lead generation funnel with AI scoring and qualification stages.',
    },
    {
      id: 8,
      title: 'Local SEO: Dominating Your Geographic Market',
      excerpt: 'Master local search optimization to attract more customers in your area.',
      category: 'seo',
      author: 'NetFroot Team',
      date: 'January 29, 2026',
      readTime: '8 min read',
      tags: ['Local SEO', 'Google Maps', 'Business'],
      aiImage: 'Google Maps interface with multiple business locations and star ratings.',
    },
    {
      id: 9,
      title: 'Building Responsive Websites with Tailwind CSS',
      excerpt: 'Create beautiful, responsive designs faster with the power of Tailwind CSS utility classes.',
      category: 'tutorials',
      author: 'NetFroot Team',
      date: 'January 26, 2026',
      readTime: '11 min read',
      tags: ['Tailwind', 'CSS', 'Design'],
      aiImage: 'Responsive website design showcase across multiple device screens.',
    },
  ]

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts[0]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent/20 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            NetFroot Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Insights, tutorials, and strategies for modern web development, SEO, and digital marketing
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-2 dark:text-white">Featured Article</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center card bg-gradient-to-br from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
            {/* AI Image Placeholder */}
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8 border-2 border-primary/20">
                <div className="text-center">
                  <div className="mb-4 text-5xl">📰</div>
                  <p className="text-sm text-gray-600 italic">
                    {featuredPost.aiImage}
                  </p>
                </div>
              </div>

              {/* TODO: Replace with actual image
              <img 
                src={`/assets/images/blog/${featuredPost.id}.jpg`}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              */}
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                  {featuredPost.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
                <span className="text-gray-500">{featuredPost.date}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {featuredPost.title}
              </h3>

              <p className="text-lg text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {featuredPost.readTime} • {featuredPost.author}
                </div>
                <button className="btn-primary">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-gray-50 dark:bg-gray-800 py-8 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              let icon = null
              if (category === 'web-development') icon = <Code className="w-4 h-4" />
              else if (category === 'seo') icon = <Search className="w-4 h-4" />
              else if (category === 'ai-automation') icon = <Zap className="w-4 h-4" />
              else if (category === 'marketing') icon = <Megaphone className="w-4 h-4" />
              else if (category === 'tutorials') icon = <BookOpen className="w-4 h-4" />

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {icon}
                  {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="card group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* AI Image Placeholder */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-6 border border-primary/20 group-hover:border-primary transition-all">
                    <div className="text-center">
                      <div className="mb-3 flex justify-center">
                        {post.category === 'web-development' && <Code className="w-12 h-12 text-primary" />}
                        {post.category === 'seo' && <Search className="w-12 h-12 text-primary" />}
                        {post.category === 'ai-automation' && <Zap className="w-12 h-12 text-primary" />}
                        {post.category === 'marketing' && <Megaphone className="w-12 h-12 text-primary" />}
                        {post.category === 'tutorials' && <BookOpen className="w-12 h-12 text-primary" />}
                      </div>
                      <p className="text-xs text-gray-600 italic line-clamp-3">
                        {post.aiImage}
                      </p>
                    </div>
                  </div>

                  {/* TODO: Replace with actual images
                  <img 
                    src={`/assets/images/blog/${post.id}.jpg`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  */}
                </div>

                {/* Post Content */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-primary font-semibold hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* TODO: Pagination for future blog posts */}
          {/* 
          <div className="flex justify-center mt-12 space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
          </div>
          */}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 dark:from-primary/5 to-accent/10 dark:to-accent/5">
        <div className="container-custom max-w-3xl text-center">
          <div className="card">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest insights, tutorials, and industry news delivered to your inbox
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                ⚠️ Newsletter will be connected to email service in future
              </span>
            </p>
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
          <Link to="/contact" className="btn-secondary">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* TODO: Future Blog CMS Integration */}
      {/* 
      This blog page is currently using static placeholder data.
      For a dynamic blog, integrate with:
      - Headless CMS (Contentful, Sanity, Strapi)
      - Firebase Firestore
      - WordPress API
      - Custom API backend
      
      Features to add:
      - Individual blog post pages
      - Comments system
      - Author pages
      - Search functionality
      - Related posts
      - Social sharing
      */}
    </div>
  )
}

export default Blog
