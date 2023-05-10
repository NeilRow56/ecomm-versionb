import { NextResponse } from "next/server";

import prisma from "../../../lib/prisma";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { title, description, imageSrc, category, price } = body;

  const product = await prisma.product.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      price: parseInt(price, 10),
    },
  });

  return NextResponse.json(product);
}
