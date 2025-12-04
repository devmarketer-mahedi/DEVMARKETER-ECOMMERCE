import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { stackServerApp } from "@/stack";

export async function GET(req) {
  try {
    const products = await prisma.product.findMany({
      include: {
        store: true,
        rating: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const user = await stackServerApp.getUser();

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, description, mrp, price, images, category } = body;

    // Use user.id from Stack Auth
    // Note: Stack Auth IDs are different from our internal User IDs if we were using NextAuth
    // We might need to sync Stack Users to our DB or just use the Stack ID directly.
    // For simplicity, we will use Stack ID as our User ID.

    // Ensure user exists in our DB (Sync)
    let dbUser = await prisma.user.findUnique({
        where: { id: user.id }
    });

    if (!dbUser) {
        // Create user in our DB if not exists (Lazy Sync)
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                name: user.displayName || "User",
                email: user.primaryEmail || "",
                password: "", // No password needed for Stack users in our DB
                image: user.profileImageUrl || ""
            }
        });
    }

    let store = await prisma.store.findUnique({
        where: { userId: user.id }
    });

    if (!store) {
        store = await prisma.store.create({
            data: {
                userId: user.id,
                name: `${user.displayName || 'User'}'s Store`,
                username: (user.primaryEmail || user.id).split('@')[0],
                email: user.primaryEmail || "",
                address: "Default Address",
                description: "Default Description",
                contact: "0000000000",
                logo: "https://via.placeholder.com/150"
            }
        })
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        mrp: parseFloat(mrp),
        price: parseFloat(price),
        images,
        category,
        storeId: store.id,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
}
