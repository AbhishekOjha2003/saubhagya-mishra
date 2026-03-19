import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const email = "contact@advocatemishra.com";

    const existing = await prisma.doctor.findUnique({ where: { email } });

    if (!existing) {
        await prisma.doctor.create({
            data: {
                name: "Advocate Saubhagya Mishra",
                email,
                designation: "Senior Counsel, Allahabad High Court",
                phone: "+91 98765 43210",
                availability: JSON.stringify({
                    maxDailySlots: 8,
                    startTime: "19:30",
                    endTime: "21:30"
                })
            }
        });
        console.log("✅ Created Advocate Profile");
    } else {
        console.log("ℹ️  Advocate Profile already exists");
    }
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
