import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Article
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-slate-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                    </Link>
                </h2>

                <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                </p>

                <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                    Read Full Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </motion.article>
    );
};

export default BlogCard;
