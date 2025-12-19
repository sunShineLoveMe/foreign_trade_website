import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

const BlogListPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = 'Blog | Superbuild - Premium Windows & Doors';
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 pb-16 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Latest Insights & News
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Stay updated with the latest trends in aluminium windows and doors, home improvement tips, and project spotlights.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>

            {/* Empty State */}
            {blogPosts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500 text-lg">No blog posts found at the moment. Please check back later!</p>
                </div>
            )}
        </main>
    );
};

export default BlogListPage;
