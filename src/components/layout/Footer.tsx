import { Logo } from "../brand/Logo";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo size={20} />
        <a
          href="https://lotharai.com"
          className="text-cream-muted text-sm hover:text-cream transition-colors"
        >
          lotharai.com
        </a>
        <p className="text-cream-muted text-sm">
          &copy; {new Date().getFullYear()} Lothar AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
