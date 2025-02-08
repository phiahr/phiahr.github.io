"use client";
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          Philipp Ahrendt
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link href="#about" className="text-foreground/80 hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-foreground/80 hover:text-primary">
              Education
            </Link>
          </li>
          <li>
            <Link href="#interests" className="text-foreground/80 hover:text-primary">
              Interests
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-foreground/80 hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
