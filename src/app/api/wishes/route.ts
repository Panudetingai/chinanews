import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
let wishes: any[] = []

export async function GET() {
    return NextResponse.json(wishes)
}

export async function POST(request: Request) {
    const wish = await request.json()
    wishes.push(wish)
    return NextResponse.json(wish)
}
