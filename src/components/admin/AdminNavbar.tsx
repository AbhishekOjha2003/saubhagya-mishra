"use client";

import Link from "next/link";
import { Scale, LogOut } from "lucide-react";

export function AdminNavbar() {
    return (
        <nav className="fixed top-0 w-full z-50 py-4 bg-obsidian-950/80 backdrop-blur-md border-b border-ivory-100/10">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20">
                        <Scale className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="block font-serif text-lg font-bold text-ivory-50 leading-none">
                            Admin Portal
                        </span>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-500 font-medium">
                            Adv. Saubhagya Mishra
                        </span>
                    </div>
                </div>

                {/* Logout Button */}
                <Link
                    href="/admin/login"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-sm font-medium border border-red-500/20 hover:border-red-500"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                </Link>
            </div>
        </nav>
    );
}
