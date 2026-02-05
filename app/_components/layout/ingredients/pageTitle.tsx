import Link from "next/link";

export default function PageTitle() {
  return (
    <Link href="/" className={'text-3xl text-foreground-0 font-bold font-serif cursor-pointer hover:opacity-80 transition-opacity'}>
      Rootem
    </Link>
  );
}
