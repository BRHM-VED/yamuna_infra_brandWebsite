import React, { useEffect } from 'react';
import Navbar from '../../../layouts/Navbar';
import FooterSection from '../../home/components/FooterSection';
import BlogPost from './BlogPost';

const BlogPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Container - White background for blog page */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Navbar />
      </header>

      <main className="pt-20">
        <BlogPost />
      </main>

      <FooterSection />
    </div>
  );
};

export default BlogPage;
