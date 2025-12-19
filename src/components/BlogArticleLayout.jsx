import React from 'react';

const BlogArticleLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-slate-300 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Content Container */}
            <div className="max-w-[880px] mx-auto px-6 md:px-12 pt-32 pb-16 md:pb-24 relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BlogArticleLayout;
