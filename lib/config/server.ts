//サーバーで用いる環境変数を取得するための関数を定義するファイル

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null = null;

export function getPrisma() {
    if(prisma) return prisma;

    prisma = new PrismaClient();
    return prisma;
}
