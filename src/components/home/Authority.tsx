import { Award, BookOpen, Gavel } from "lucide-react";

export function Authority() {
    return (
        <section className="py-24 px-6 relative z-10 bg-navy-950/50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm">Authority & Trust</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        "In the courtroom, preparation is the only currency that matters."
                    </h3>
                    <p className="text-marble-100/70 text-lg leading-relaxed">
                        With a practice rooted in the relentless pursuit of justice, Advocate Mishra has secured favorable outcomes in over 200+ high-stakes criminal matters.
                        His approach combines deep statutory knowledge with aggressive defense strategies.
                    </p>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-3xl font-serif text-gold-500 mb-1">05+</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest">Years Exp.</div>
                        </div>
                        <div>
                            <div className="text-3xl font-serif text-gold-500 mb-1">200+</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest">Cases</div>
                        </div>
                        <div>
                            <div className="text-3xl font-serif text-gold-500 mb-1">HC</div>
                            <div className="text-xs text-white/40 uppercase tracking-widest">Practice</div>
                        </div>
                    </div>
                </div>

                {/* Visual Card */}
                <div className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-navy-900 to-navy-800 p-12 border border-white/5 flex flex-col justify-end">
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <Gavel className="w-32 h-32 text-white" />
                    </div>
                    <blockquote className="relative z-10 font-serif text-2xl text-white italic">
                        "Justice delayed is justice denied. My mission is to ensure your voice is heard loud and clear."
                    </blockquote>
                    <p className="mt-4 text-gold-500 font-bold">— Saubhagya Mishra</p>
                </div>
            </div>
        </section>
    );
}
