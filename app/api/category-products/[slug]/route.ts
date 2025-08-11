import { NextRequest, NextResponse } from "next/server";
import { fetchFromAPI } from "@/apis/get-apis";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page") || 1);

  try {
    const data = await fetchFromAPI(`/products/${slug}`, {
      params: { page },
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
