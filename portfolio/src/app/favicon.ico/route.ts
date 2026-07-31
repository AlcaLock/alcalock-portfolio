import { NextResponse } from "next/server";

const EMPTY_ICON = new Uint8Array([]);

export async function GET() {
  return new NextResponse(EMPTY_ICON, {
    status: 200,
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
