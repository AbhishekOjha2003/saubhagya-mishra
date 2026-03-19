"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight, Search, Tag } from "lucide-react";
import Link from "next/link";

const articles = [
    {
        title: "Understanding the Bharatiya Nyaya Sanhita (BNS) 2023",
        excerpt: "A comprehensive guide to the major changes in India's new criminal code replacing the IPC. Key takeaways for defense.",
        date: "Jan 10, 2026",
        category: "Criminal Law",
        readTime: "8 min read",
        color: "from-purple-500/20 to-blue-500/5",
        accent: "text-purple-400"
    },
    {
        title: "Property Succession: Daughter's Rights in 2026",
        excerpt: "Recent Supreme Court judgments clarifying coparcenary rights and inheritance patterns for daughters in Hindu Undivided Families.",
        date: "Jan 05, 2026",
        category: "Family Law",
        readTime: "5 min read",
        color: "from-emerald-500/20 to-teal-500/5",
        accent: "text-emerald-400"
    },
    {
        title: "Corporate Compliance: Navigating the New Data Bill",
        excerpt: "How the DPDP Act impacts your business operations and the mandatory compliance checklist for startups.",
        date: "Dec 28, 2025",
        category: "Corporate",
        readTime: "6 min read",
        color: "from-blue-500/20 to-cyan-500/5",
        accent: "text-blue-400"
    },
    {
        title: "Bail Provisions in Economic Offenses Explored",
        excerpt: "Analyzing the stringent bail conditions under PMLA and strategies for effective legal representation.",
        date: "Dec 15, 2025",
        category: "White Collar Crime",
        readTime: "12 min read",
        color: "from-red-500/20 to-orange-500/5",
        accent: "text-red-400"
    },
    {
        title: "Cyber Defamation vs Free Speech",
        excerpt: "Where does the law draw the line? A look at recent high-profile cases involving social media liability.",
        date: "Dec 10, 2025",
        category: "Cyber Law",
        readTime: "4 min read",
        color: "from-cyan-500/20 to-blue-500/5",
        accent: "text-cyan-400"
    },
    {
        title: "Divorce Proceedings: Mutual Consent vs Contested",
        excerpt: "A step-by-step breakdown of the timeline, documentation, and legal nuances of separation proceedings.",
        date: "Nov 30, 2025",
        category: "Matrimonial",
        readTime: "7 min read",
        color: "from-pink-500/20 to-rose-500/5",
        accent: "text-pink-400"
    }
];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-obsidian-950 pt-32 pb-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-obsidian-900 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-ivory-100/10 pb-10">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 text-gold-500 text-sm font-bold tracking-widest uppercase mb-4"
                            >
                                <span className="w-8 h-[1px] bg-gold-500"></span>
                                Legal Insights
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl font-serif font-bold text-ivory-50"
                            >
                                Knowledge <br /><span className="text-ivory-100/40">Center</span>
                            </motion.h1>
                        </div>

                        <div className="w-full md:w-auto">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory-100/40 group-focus-within:text-gold-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full md:w-80 pl-12 pr-4 py-3 rounded-full bg-obsidian-900/50 border border-ivory-100/10 text-ivory-100 placeholder:text-ivory-100/20 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Featured Article (First one) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 group cursor-pointer"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-ivory-100/10 bg-obsidian-900/30">
                            <div className="md:grid md:grid-cols-2">
                                <div className="h-64 md:h-auto bg-gradient-to-br from-gold-500/20 to-obsidian-950 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 text-sm text-gold-500 font-bold uppercase tracking-wider mb-4">
                                        <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">Featured</span>
                                        <span>•</span>
                                        <span>{articles[0].date}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory-50 mb-6 group-hover:text-gold-400 transition-colors">
                                        {articles[0].title}
                                    </h2>
                                    <p className="text-ivory-100/60 text-lg mb-8 leading-relaxed">
                                        {articles[0].excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-ivory-50 font-bold border-b border-gold-500 pb-1 self-start">
                                        Read Full Analysis <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Articles Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.slice(1).map((article, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className={`h-48 rounded-2xl bg-gradient-to-br ${article.color} mb-6 relative overflow-hidden border border-ivory-100/5`}>
                                    {/* Abstract Pattern overlay */}
                                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-lg bg-black/30 backdrop-blur-md text-xs font-bold uppercase tracking-wider ${article.accent}`}>
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-ivory-100/40 mb-3">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-ivory-50 mb-3 group-hover:text-gold-400 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-ivory-100/50 text-sm leading-relaxed mb-6 flex-1">
                                        {article.excerpt}
                                    </p>
                                    <span className="text-gold-500 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Article <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
