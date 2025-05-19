
import BlogCard from '@/components/ui/BlogCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface BlogProps {
  className?: string;
}

const Blog = ({ className = '' }: BlogProps) => {
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
    }
  ];

  return (
    <section className={`py-24 bg-secondary/50 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends, innovations, and insights in AI automation and business efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                imageSrc={post.imageSrc}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
