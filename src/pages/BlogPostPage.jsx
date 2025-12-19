import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        if (!post) {
            navigate('/blog');
            return;
        }
        document.title = post.metaTitle || `${post.title} | Superbuild`;
        // Update meta description (basic approach for client-side)
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', post.metaDescription);
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) return null;

    return (
        <main className="pt-24 pb-16 bg-white min-h-screen">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-12">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-700"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center text-slate-500 text-sm mb-8 border-b border-slate-100 pb-8">
                        <span className="font-medium text-slate-900">{post.author}</span>
                        <span className="mx-3">•</span>
                        <span>{new Date(post.date).toLocaleDateString('en-AU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>

                    {post.featuredImage && (
                        <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
                            <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    )}
                </header>

                {/* Content */}
                <div
                    className="prose prose-lg prose-slate max-w-none mb-16 
            prose-headings:text-slate-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-ul:list-disc prose-li:text-slate-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Call to Action Section */}
                <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Looking for Premium Aluminium Solutions?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Contact us for professional aluminium windows and doors solutions tailored for your architectural project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                        >
                            Contact Us Now
                        </Link>
                        <Link
                            to="/products"
                            className="px-8 py-3 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            Browse Products
                        </Link>
                    </div>
                </section>

                {/* Footer Navigation */}
                <footer className="border-t border-slate-100 pt-8 flex justify-between items-center">
                    <div className="text-slate-500 text-sm">
                        Share this article:
                        <div className="flex gap-4 mt-2">
                            {/* Simple placeholder social links */}
                            <button className="text-slate-400 hover:text-blue-600"><span className="sr-only">Facebook</span>FB</button>
                            <button className="text-slate-400 hover:text-blue-400"><span className="sr-only">Twitter</span>TW</button>
                            <button className="text-slate-400 hover:text-blue-700"><span className="sr-only">LinkedIn</span>LI</button>
                        </div>
                    </div>
                    <Link to="/contact" className="text-blue-600 font-bold hover:underline">
                        Request a Quote
                    </Link>
                </footer>
            </article>
        </main>
    );
};

export default BlogPostPage;
