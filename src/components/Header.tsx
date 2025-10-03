import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isThesis = location.pathname === "/";

  const navHome = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const nav = [
    { href: "/", label: "Home" },
    { href: "#content", label: "Thesis Content" },
  ];

  const navLinks = isHome ? navHome : [{ href: "/", label: "Home" }];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 supports-[backdrop-filter]:backdrop-blur border-b border-border/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Sinistra: Logo */}
        <div className="flex-shrink-0">
          <a
            href={isHome ? "#top" : "/"}
            className="font-semibold tracking-tight"
          >
            HS
          </a>
        </div>

        {/* Centro: Link */}
        <div className="flex-1 flex justify-center items-center gap-6 text-sm">
          {navLinks.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="story-link text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Destra: Pulsante */}
        <div className="flex-shrink-0">
          {isHome && (
            <a href="CV.png" download>
              <Button variant="soft" className="hidden sm:inline-flex">
                <Download className="mr-1" /> CV
              </Button>
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
