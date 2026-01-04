import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "vectr",
  description: "vectr",
};

const Home = () => (
  <div className="container flex min-h-screen items-center justify-center px-4 py-8 relative mx-auto">
    <Link href="/commander" className="hover:scale-110 text-6xl transition-transform">
      😊
    </Link>
  </div>
);

export default Home;
