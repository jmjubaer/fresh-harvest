import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params?: Promise<{ path?: string[] }> }
) {
    const resolvedParams = await context.params;
    const pathSegments = resolvedParams?.path?.join("/") ?? "";

    if (!pathSegments) {
        return NextResponse.json(
            { success: false, message: "Invalid path" },
            { status: 400 }
        );
    }

    const url = `http://23.239.111.164:5001/api/v1/${pathSegments}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Fetch error" },
            { status: 500 }
        );
    }
}

export async function POST(
    req: NextRequest,
    context: { params?: Promise<{ path?: string[] }> }
) {
    const resolvedParams = await context.params;
    const pathSegments = resolvedParams?.path?.join("/") ?? "";

    if (!pathSegments) {
        return NextResponse.json(
            { success: false, message: "Invalid path" },
            { status: 400 }
        );
    }

    const url = `http://23.239.111.164:5001/api/v1/${pathSegments}`;

    try {
        const body = await req.json(); // get POST body
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Fetch error" },
            { status: 500 }
        );
    }
}
