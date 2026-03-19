"use client";

import { useState } from "react";
import { Trash2, XCircle, Loader2 } from "lucide-react";
import { cancelAppointment, deleteAppointment } from "@/app/_actions/admin";

interface AppointmentActionsProps {
    id: string;
    status: string;
}

export function AppointmentActions({ id, status }: AppointmentActionsProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = async () => {
        if (!confirm("Are you sure you want to cancel this appointment?")) return;

        setIsLoading(true);
        await cancelAppointment(id);
        setIsLoading(false);
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this record? This action cannot be undone.")) return;

        setIsLoading(true);
        await deleteAppointment(id);
        setIsLoading(false);
    };

    if (isLoading) {
        return <Loader2 className="w-5 h-5 animate-spin text-ivory-100/50" />;
    }

    return (
        <div className="flex items-center gap-2">
            {status !== "CANCELLED" && (
                <button
                    onClick={handleCancel}
                    className="p-2 rounded-lg hover:bg-red-500/10 text-ivory-100/50 hover:text-red-500 transition-colors"
                    title="Cancel Appointment"
                >
                    <XCircle className="w-4 h-4" />
                </button>
            )}
            <button
                onClick={handleDelete}
                className="p-2 rounded-lg hover:bg-red-500/10 text-ivory-100/50 hover:text-red-500 transition-colors"
                title="Delete Record"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
}
