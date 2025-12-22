import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import BlogArticleLayout from '../components/BlogArticleLayout';

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
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', post.metaDescription);
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) return null;

    return (
        <BlogArticleLayout>
            <article>
                {/* Header Section */}
                <header className="mb-16">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-cyan-600 font-semibold mb-12 group transition-all duration-300 hover:text-cyan-500"
                    >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan-500/20 mr-3 group-hover:border-cyan-500/40 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </span>
                        Back to Insights
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.05] tracking-tighter">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-6 pb-12 border-b border-slate-200">
                        <div className="flex flex-col">
                            <div className="text-slate-900 font-bold text-lg mb-1 tracking-tight">{post.author}</div>
                            <div className="flex items-center text-slate-500 text-sm uppercase tracking-widest font-medium">
                                <span>{new Date(post.date).toLocaleDateString('en-AU', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                                <span className="mx-3 opacity-30">•</span>
                                <span className="text-cyan-600 font-semibold">Editorial</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Body Content */}
                <div
                    className="prose prose-lg max-w-none mb-24 
                        prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-slate-600 prose-p:leading-8 prose-p:mb-10 prose-p:text-[1.2rem]
                        prose-ul:my-10 prose-ul:list-none prose-li:text-slate-600 prose-li:text-[1.125rem] prose-li:my-4 prose-li:relative prose-li:pl-8
                        prose-a:text-cyan-600 prose-a:font-bold prose-a:no-underline hover:prose-a:text-cyan-500 transition-colors
                        prose-strong:text-slate-950 prose-strong:font-bold
                        prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:shadow-xl prose-img:my-16"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Premium Dark CTA Section */}
                <section className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-200 relative overflow-hidden shadow-xl mb-24">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            Ready to Elevate Your <br />
                            <span className="text-cyan-600">Architectural Standards?</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the elite architects and developers choosing Superbuild's premium aluminium systems for endurance, efficiency, and timeless aesthetic.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="px-12 py-5 bg-cyan-600 text-white font-black rounded-2xl hover:bg-cyan-500 transition-all duration-300 shadow-xl shadow-cyan-600/20 text-center active:scale-95"
                            >
                                Get Priority Quote
                            </Link>
                            <Link
                                to="/products"
                                className="px-12 py-5 bg-slate-100 text-slate-900 border border-slate-200 font-black rounded-2xl hover:bg-slate-200 transition-all duration-300 text-center active:scale-95"
                            >
                                Browse Collections
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer Navigation */}
                <footer className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-10">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Share Article</span>
                        <div className="flex gap-4">
                            {['LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                                <button key={platform} className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-600/30 transition-all duration-300">
                                    <span className="sr-only">{platform}</span>
                                    {platform === 'LinkedIn' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                                    {platform === 'Twitter' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>}
                                    {platform === 'Facebook' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>}
                                </button>
                            ))}
                        </div>
                    </div>
                </footer>
            </article>
        </BlogArticleLayout>
    );
};

export default BlogPostPage;
