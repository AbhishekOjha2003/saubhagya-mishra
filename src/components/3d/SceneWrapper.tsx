"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), {
    ssr: false,
    loading: () => (
        <div className="fixed inset-0 -z-10 bg-[#030303]">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-gold-500/20 border-t-gold-500 rounded-full animate-spin" />
            </div>
        </div>
    )
});

export default function SceneWrapper() {
    return <Scene3D />;
}
