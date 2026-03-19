"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Shield } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600 via-gold-500 to-gold-400" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-obsidian-950 mb-6">
                        Justice Awaits.
                    </h2>
                    <p className="text-xl text-obsidian-900/70 max-w-2xl mx-auto mb-10">
                        Don't let legal challenges overwhelm you. Secure expert representation today with a confidential consultation.
                    </p>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6 mb-12"
                >
                    {[
                        { icon: Calendar, text: "Same-Day Appointments" },
                        { icon: Clock, text: "7:30 PM - 9:30 PM Daily" },
                        { icon: Shield, text: "100% Confidential" },
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian-950/10">
                            <feature.icon className="w-4 h-4 text-obsidian-950" />
                            <span className="text-sm font-medium text-obsidian-950">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/consultation"
                        className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-obsidian-950 text-gold-500 font-bold text-lg rounded-xl hover:bg-obsidian-900 transition-all shadow-2xl"
                    >
                        Check Availability
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 border-2 border-obsidian-950 text-obsidian-950 font-bold text-lg rounded-xl hover:bg-obsidian-950/10 transition-all"
                    >
                        Contact Office
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
