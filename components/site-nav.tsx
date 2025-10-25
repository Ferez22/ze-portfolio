/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NavLinks from "./nav-links";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 font-medium text-lg tracking-tighter h-8 w-8 rounded-md overflow-hidden"
          ></Link>
          <b>ze-portfolio</b>
        </div>

        <div className="flex flex-1 w-full justify-end">
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
