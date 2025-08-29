import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const { fullName, clerkId, type } = await req.json();

        const registered = await client.user.create({
            data: {
                fullName,
                clerkId,
                type,
                subscription: {
                    create: {},
                },
            },
            select: {
                fullName: true,
                id: true,
                type: true,
            },
        });

        return NextResponse.json({ status: 200, user: registered });
    } catch (error) {
        console.error("❌ Prisma Create Error:", error);
        return NextResponse.json({ status: 400, message: "User creation failed" });
    }
}
