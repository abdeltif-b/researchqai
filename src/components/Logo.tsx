import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex z-40 text-2xl font-extrabold", className)}>
    <span>research</span>
    <span className="text-blue-600">Q</span>AI<span className="text-blue-600">/&gt;</span>
  </Link>
);
