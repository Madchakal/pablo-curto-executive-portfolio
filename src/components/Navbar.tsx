import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" id="navbar-logo" className="flex items-center">
            <Image
              src="/logo-v4.png"
              alt="Pablo Curto Logo"
              width={120}
              height={48}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="#about" className="hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link href="#metrics" className="hover:text-white transition-colors duration-200">
            Metrics
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors duration-200">
            Work
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#contact" 
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-cyan-500 px-6 font-medium text-white transition-all duration-300 hover:bg-cyan-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            <span className="mr-2">Let's Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

