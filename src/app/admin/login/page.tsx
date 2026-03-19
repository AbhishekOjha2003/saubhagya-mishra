"use client";

import { useState } from "react";
import { Scale, Lock, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            router.push("/admin/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-obsidian-950 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Brand Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-xl shadow-gold-500/20 mb-6">
                        <Scale className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-ivory-50 mb-2">Welcome Back</h1>
                    <p className="text-ivory-100">Sign in to access your dashboard</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-ivory-100/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600" />

                    <form onSubmit={handleLogin} className="space-y-6 pt-2">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-ivory-50 ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/50 group-focus-within:text-gold-500 transition-colors">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="admin@lawyer.com"
                                    className="w-full bg-obsidian-900/50 border border-ivory-200/50 rounded-xl px-4 py-3.5 pl-12 text-ivory-50 placeholder:text-ivory-100/40 focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-ivory-50 ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/50 group-focus-within:text-gold-500 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-obsidian-900/50 border border-ivory-200/50 rounded-xl px-4 py-3.5 pl-12 text-ivory-50 placeholder:text-ivory-100/40 focus:outline-none focus:border-gold-500 focus:bg-white transition-all shadow-inner"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gold-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-gold-500/25 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In Access
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Link */}
                <div className="text-center mt-8">
                    <Link href="/" className="text-ivory-100/60 hover:text-gold-600 text-sm font-medium transition-colors">
                        ← Return to Homepage
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
