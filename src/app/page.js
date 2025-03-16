import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Page</h1>
      <Link href={"/contexto"}>
      Context
      </Link>
    </div>
  );
}
