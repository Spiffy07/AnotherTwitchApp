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
  { label: "Home",        href: "#",            xlScrollY: 0,     lgScrollY: 0,     mdScrollY: 0,     smScrollY: 0,     scrollY: 0 },
  { label: "Experience",  href: "#experience",  xlScrollY: 847,   lgScrollY: 864,   mdScrollY: 893,   smScrollY: 900,   scrollY: 773 },
  { label: "Projects",    href: "#projects",    xlScrollY: 1434,  lgScrollY: 1439,  mdScrollY: 1463,  smScrollY: 1403,  scrollY: 1271 },
  { label: "Skills",      href: "#skills",      xlScrollY: 3312,  lgScrollY: 3362,  mdScrollY: 3755,  smScrollY: 3375,  scrollY: 2753 },
  { label: "Contact",     href: "#contact",     xlScrollY: 3632,  lgScrollY: 3667,  mdScrollY: 4118,  smScrollY: 3911,  scrollY: 3388 },
];

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [size, setSize] = useState('base');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Tailwind default breakpoints
    const queries = {
      sm: "(min-width: 800px)",
      md: "(min-width: 960px)",
      lg: "(min-width: 1280px)",
      xl: "(min-width: 1600px)"
    };
    
    const updateSize = () => {
      if (window.matchMedia(queries.lg).matches) setSize("lg");
      else if (window.matchMedia(queries.md).matches) setSize("md");
      else if (window.matchMedia(queries.sm).matches) setSize("sm");
      else if (window.matchMedia(queries.xl).matches) setSize("xl");
      else setSize("base"); // mobile/default
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);


  const buttonOtherStuff = (
    <Button
      size="sm"
      variant="outline"
      className="rounded-full"
      onClick={() => {
        navigate("/mycomponents");
        window.scrollTo(0, 0);
      }}
    >
      Other Stuff
    </Button>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(90%-2rem)] max-w-4xl transition-all duration-300",
          isScrolled
            ? "bg-slate-900/60 backdrop-blur-lg shadow-lg border border-border"
            : "bg-slate-900/80 backdrop-blur-md border border-border/50",
          "rounded-full px-4 py-2 md:px-6 md:py-3",
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
          <ul className="hidden lg:flex items-center gap-1 mx-auto">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  onClick={() => {
                    window.scrollTo({
                      top: size === "lg" ? link.lgScrollY : link.xlScrollY,
                      behavior: "smooth",
                    });
                    navigate(link.href);
                  }}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">{buttonOtherStuff}</div>

          {/* Mobile Menu Button */}
          <Popover>
            <PopoverTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
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
            <PopoverContent
              className="lg:hidden"
              onInteractOutside={(e) => e.preventDefault()}
            >
              {/* Mobile Menu */}
                <div className="lg:hidden border-border text-center">
                  <ul className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          onClick={() => {
                            window.scrollTo({
                              top: size === "base" ? link.scrollY : size === "sm" ? link.smScrollY : link.mdScrollY,
                              behavior: "smooth",
                            });
                            navigate(link.href);
                          }}
                          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                    <li className="mt-2">{buttonOtherStuff}</li>
                  </ul>
                </div>
            </PopoverContent>
          </Popover>
        </nav>
      </header>
    </>
  );
}
