"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Scale, FileText, Users, Building2, Lock, ArrowUpRight } from "lucide-react";

const areas = [
    {
        title: "Criminal Defense",
        desc: "Bail, Trials, Appeals, NDPS Act, IPC Offenses",
        icon: Shield,
        href: "/practice-areas/criminal-law",
        featured: true
    },
    {
        title: "Constitutional Law",
        desc: "Writ Petitions, Fundamental Rights, PILs",
        icon: Scale,
        href: "/practice-areas/constitutional"
    },
    {
        title: "Civil Litigation",
        desc: "Property Disputes, Injunctions, Recovery",
        icon: FileText,
        href: "/practice-areas/civil"
    },
    {
        title: "Family Law",
        desc: "Divorce, Custody, Maintenance, Adoption",
        icon: Users,
        href: "/practice-areas/family"
    },
    {
        title: "Corporate Advisory",
        desc: "Contracts, Compliance, Company Law",
        icon: Building2,
        href: "/practice-areas/corporate"
    },
    {
        title: "Cyber Crime",
        desc: "IT Act, Data Theft, Online Fraud",
        icon: Lock,
        href: "/practice-areas/cyber"
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export function PracticeAreas() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full glass-gold text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Areas of Practice
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ivory-50 mb-6">
                        Comprehensive Legal <span className="text-gradient-gold">Expertise</span>
                    </h2>
                    <p className="text-ivory-100/50 text-lg">
                        From High Court litigation to strategic legal advisory, providing end-to-end legal solutions.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {areas.map((area, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <Link
                                href={area.href}
                                className={`group relative block p-8 rounded-2xl transition-all duration-500 overflow-hidden ${area.featured
                                    ? "bg-gradient-to-br from-gold-500/20 via-gold-500/10 to-transparent border border-gold-500/30 lg:col-span-1 lg:row-span-1"
                                    : "bg-obsidian-800/50 border border-ivory-100/5 hover:border-gold-500/30"
                                    }`}
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
                                </div>

                                {/* Icon */}
                                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${area.featured
                                    ? "bg-gold-500 text-obsidian-950"
                                    : "bg-ivory-100/5 text-gold-500 group-hover:bg-gold-500 group-hover:text-obsidian-950"
                                    }`}>
                                    <area.icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="relative text-2xl font-serif font-bold text-ivory-50 mb-3 group-hover:text-gold-400 transition-colors">
                                    {area.title}
                                </h3>
                                <p className="relative text-ivory-100/50 leading-relaxed mb-6">
                                    {area.desc}
                                </p>

                                {/* Arrow */}
                                <div className="relative flex items-center gap-2 text-gold-500 text-sm font-medium">
                                    <span>Learn More</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>

                                {area.featured && (
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 text-xs font-bold">
                                        Primary Focus
                                    </div>
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
