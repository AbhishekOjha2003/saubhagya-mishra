"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Gavel, Scale, Building2, Users, BookOpen, Home, ShieldAlert, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const practiceAreas = [
    {
        title: "Criminal Defense",
        icon: ShieldAlert,
        desc: "Expert representation in complex criminal trials, bail matters, and defense strategies against serious allegations.",
        link: "/consultation"
    },
    {
        title: "Civil Litigation",
        icon: Scale,
        desc: "Comprehensive handling of civil disputes, including contract breaches, torts, and recovery suits.",
        link: "/consultation"
    },
    {
        title: "Corporate Law",
        icon: Building2,
        desc: "Strategic legal advisory for businesses, covering mergers, compliance, and corporate dispute resolution.",
        link: "/consultation"
    },
    {
        title: "Family Law",
        icon: Users,
        desc: "Compassionate counsel for matrimonial disputes, divorce proceedings, custody battles, and inheritance.",
        link: "/consultation"
    },
    {
        title: "Constitutional Law",
        icon: BookOpen,
        desc: "Writ petitions (Habeas Corpus, Mandamus) and safeguarding fundamental rights in High Court & Supreme Court.",
        link: "/consultation"
    },
    {
        title: "Property & Real Estate",
        icon: Home,
        desc: "Resolution of title disputes, landlord-tenant conflicts, and property succession matters.",
        link: "/consultation"
    },
    {
        title: "Cyber Crime",
        icon: FileText,
        desc: "Specialized defense in cases involving IT Act violations, data theft, and online fraud.",
        link: "/consultation"
    },
    {
        title: "Appellate Practice",
        icon: Gavel,
        desc: "Representing clients in appeals before the High Court challenging lower court verdicts.",
        link: "/consultation"
    }
];

export default function PracticeAreasPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-obsidian-950 pt-32 pb-20 relative overflow-hidden">
                {/* Background Aesthetics */}
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-obsidian-900 to-transparent pointer-events-none" />
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm mb-6"
                        >
                            <span className="text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase">Legal Expertise</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-ivory-50 mb-6"
                        >
                            Mastery Across <br /><span className="text-gradient-gold">All Domains</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-ivory-100/60 max-w-2xl mx-auto"
                        >
                            Comprehensive legal solutions tailored to your unique situation. From high-stakes litigation to strategic advisory.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practiceAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Link href={area.link} className="block h-full group">
                                    <div className="relative h-full p-8 rounded-3xl bg-obsidian-900/40 border border-ivory-100/5 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-gold-500/30 group-hover:bg-obsidian-900/60 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold-900/20">

                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/10 to-obsidian-950 border border-gold-500/20 flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 group-hover:border-gold-500/50 transition-all duration-500">
                                                <area.icon className="w-7 h-7" />
                                            </div>

                                            <h3 className="text-2xl font-serif font-bold text-ivory-50 mb-4 group-hover:text-gold-400 transition-colors">
                                                {area.title}
                                            </h3>

                                            <p className="text-ivory-100/50 mb-8 leading-relaxed">
                                                {area.desc}
                                            </p>

                                            <div className="flex items-center text-sm font-bold text-gold-500/80 group-hover:text-gold-400 gap-2">
                                                Consult Now <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-transparent via-gold-500/30 to-transparent">
                            <Link
                                href="/contact"
                                className="px-10 py-4 rounded-full bg-obsidian-950 border border-gold-500/20 text-ivory-100 font-bold hover:bg-gold-500 hover:text-obsidian-950 transition-all duration-300 block"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
