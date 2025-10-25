import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NavLinks = () => {
  return (
    <nav className="flex items-center space-x-4">
      <Link
        href="https://docs.ferez.cloud"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        Docs
      </Link>
      <Link
        href="https://github.com/ferez22"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        GitHub
      </Link>
      <Link
        href="https://discord.gg/P5XxPwX8"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        Discord
      </Link>

      <ThemeToggle />
    </nav>
  );
};

export default NavLinks;
