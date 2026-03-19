"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";


export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-800">
            {/* Subtle Gradient Overlays for Light Theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-obsidian-700/30" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Text Content */}
                <div className="lg:col-span-7 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-500/30 bg-gold-500/5 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Allahabad High Court Advocate</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.05] tracking-tight text-ivory-50"
                    >
                        Adv. Saubhagya<br />
                        <span className="text-gradient-gold">Mishra</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl text-ivory-100/80 max-w-2xl leading-relaxed"
                    >
                        Dedicated legal counsel specializing in <span className="text-gold-500 font-semibold">Criminal Defense</span>, <span className="text-gold-500 font-semibold">Constitutional Law</span>, and <span className="text-gold-500 font-semibold">Civil Litigation</span>. Committed to delivering strategic, result-oriented advocacy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Link
                            href="/consultation"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/20"
                        >
                            <span className="relative z-10">Schedule Consultation</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-ivory-100/10 bg-ivory-100/5 backdrop-blur-sm text-ivory-100 font-medium rounded-xl hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                                <Play className="w-4 h-4 text-gold-500 ml-0.5" />
                            </div>
                            <span>Introduction Video</span>
                        </button>
                    </motion.div>

                    {/* Trust Indicators - Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="inline-flex flex-wrap items-center gap-8 p-6 rounded-2xl glass-dark border border-ivory-100/5 backdrop-blur-md mt-8"
                    >
                        {[
                            { value: "5+", label: "Years Experience" },
                            { value: "200+", label: "Cases Handled" },
                            { value: "98%", label: "Success Rate" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-3xl font-serif font-bold text-gold-500">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-widest text-ivory-100/50 font-medium pt-1">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side - Spacer for 3D elements */}
                {/* Right Side - Image */}
                <div className="block mt-12 lg:mt-0 lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden border border-ivory-100/10 shadow-2xl shadow-black/50"
                    >
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent z-20" />

                        <img
                            src="https://ik.imagekit.io/abhishekojha/Jija%20Image.jpeg"
                            alt="Advocate Saubhagya Mishra"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Decorative Elements around image */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] -z-10" />
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] -z-10" />
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-3 text-ivory-100/30">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0" />
                </div>
            </motion.div>
        </section>
    );
}
