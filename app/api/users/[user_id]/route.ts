import { NextResponse } from "next/server";
import { UserIdSchema } from "@/app/features/users/schema";
import { prisma } from "@/lib/prisma";
// default　exportじゃない限り、｛｝で名前指定してインポートする

export async function GET(
  req: Request,
  { params }: { params: { user_id: string } }
) {
  
  // パスパラメータのバリデーション
  const parsed = UserIdSchema.safeParse(params);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error},
      { status: 400 }
    );
  }

  const { id } = parsed.data;
  

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}
