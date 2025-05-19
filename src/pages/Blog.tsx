
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/ui/BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const blogPosts = [
    {
      title: 'The Future of AI Automation in Business',
      excerpt: 'Explore how artificial intelligence is reshaping business operations and what to expect in the coming years.',
      date: new Date('2024-04-15'),
      author: 'Jane Smith',
      category: 'AI Trends',
      imageSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
    },
    {
      title: 'Implementing Chatbots: Best Practices and Pitfalls',
      excerpt: 'Learn the essential strategies for successful chatbot implementation and common mistakes to avoid.',
      date: new Date('2024-04-05'),
      author: 'Michael Johnson',
      category: 'Implementation',
      imageSrc: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      title: 'How Predictive Analytics is Transforming Decision Making',
      excerpt: 'Discover how businesses are leveraging predictive analytics to make more informed and strategic decisions.',
      date: new Date('2024-03-28'),
      author: 'Sarah Chen',
      category: 'Analytics',
      imageSrc: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    {
      title: 'The Role of Machine Learning in Process Automation',
      excerpt: 'Understanding how machine learning algorithms drive effective process automation and operational efficiency.',
      date: new Date('2024-03-15'),
      author: 'David Kumar',
      category: 'Machine Learning',
      imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      title: 'AI Ethics: Responsible Implementation in Business',
      excerpt: 'Exploring the ethical considerations and best practices for responsible AI deployment in enterprise settings.',
      date: new Date('2024-03-05'),
      author: 'Emma Wilson',
      category: 'AI Ethics',
      imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
    },
    {
      title: 'The Impact of AI on Customer Experience Strategies',
      excerpt: 'How artificial intelligence is revolutionizing customer experience and driving brand loyalty in the digital age.',
      date: new Date('2024-02-20'),
      author: 'Thomas Anderson',
      category: 'Customer Experience',
      imageSrc: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9'
    }
  ];
  
  const categories = [
    'All Categories',
    'AI Trends',
    'Implementation',
    'Analytics',
    'Machine Learning',
    'AI Ethics',
    'Customer Experience'
  ];
  
  return (
    <>
      <Helmet>
        <title>Blog - AutomateAI</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights, trends, and innovations in AI automation and business efficiency."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="pt-32 pb-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Latest <span className="gradient-text">Insights</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Stay updated with the latest trends, innovations, and insights in AI automation 
                  and business efficiency from our experts.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-9/12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                      <BlogCard
                        key={index}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        author={post.author}
                        category={post.category}
                        imageSrc={post.imageSrc}
                      />
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-12">
                    <Button variant="outline">Load More Articles</Button>
                  </div>
                </div>
                
                <div className="md:w-3/12">
                  <div className="bg-card border border-border rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Search</h3>
                    <div className="flex">
                      <Input placeholder="Search articles..." className="rounded-r-none" />
                      <Button className="rounded-l-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <a 
                            href="#" 
                            className={`block p-2 rounded-md hover:bg-secondary transition-colors ${index === 0 ? 'bg-secondary font-medium' : ''}`}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Stay updated with our latest articles and insights.
                    </p>
                    <Input placeholder="Your email address" className="mb-3" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
