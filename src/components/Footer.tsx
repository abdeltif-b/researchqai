import { Logo } from "@/components/Logo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <MaxWidthWrapper>
      <div className="h-14 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
        <div className="flex h-14 items-center justify-between border-t border-zinc-200 container mx-auto">
          <p className="text-sm text-gray-600">© Copyright {year} researchQAI. All rights reserved.</p>
          <Logo className={"text-md"} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
