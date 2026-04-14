"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { useNavigate } from "react-router-dom";
import ProfilePics from "@/components/ProfilePics/ProfilePics";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {
    /* CTA Button */
  }
  const buttonOtherStuff = (
    <Button
      size="sm"
      variant="outline"
      className="rounded-full"
      onClick={() => (window.location.href = "/mycomponents")}
    >
      Other Stuff
    </Button>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300",
          isScrolled
            ? "bg-slate-900/60 backdrop-blur-lg shadow-lg border border-border"
            : "bg-slate-900/80 backdrop-blur-md border border-border/50",
        "rounded-full px-4 py-2 md:px-6 md:py-3"
        )}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center h-11 w-11 scale-40 sm:scale-20 lg:scale-20"
          >
            <ProfilePics />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 mx-auto">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">{buttonOtherStuff}</div>

          {/* Mobile Menu Button */}
          <Popover>
            <PopoverTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() =>
                  isMobileMenuOpen
                    ? setIsMobileMenuOpen(false)
                    : setIsMobileMenuOpen(true)
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent onInteractOutside={(e) => e.preventDefault()}>
              {/* Mobile Menu */}
              {
                <div className="md:hidden border-border text-center">
                  <ul className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block px-4 py-2 h-11 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                    <li className="mt-2">
                      {buttonOtherStuff}
                    </li>
                  </ul>
                </div>
              }
            </PopoverContent>
          </Popover>
        </nav>
      </header>
    </>
  );
}
