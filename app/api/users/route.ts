// post処理
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CreateUserSchema } from '../../features/users/schema';
import {User} from '../../features/users/schema';

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = CreateUserSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error },
      { status: 400 }
    );
  }

  const createdUser = await prisma.user.create({
    data: parsed.data,
  });
  
  

  return NextResponse.json(createdUser, { status: 201 });
}