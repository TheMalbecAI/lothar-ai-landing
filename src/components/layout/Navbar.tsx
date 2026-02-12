"use client";

import { useState, useEffect } from "react";
import { Logo } from "../brand/Logo";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-surface-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16 md:h-20">
        <Logo size={24} />
        <Button variant="primary" size="sm" href="#book-demo">
          Book a Demo
        </Button>
      </div>
    </nav>
  );
}
