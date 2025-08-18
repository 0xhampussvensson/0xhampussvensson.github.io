import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isThesis = location.pathname === "/thesis";

  const navHome = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "/thesis", label: "Thesis" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const navThesis = [
    { href: "/", label: "Home" },
    { href: "#content", label: "Thesis Content" },
  ];

  const navLinks = isHome
    ? navHome
    : isThesis
    ? navThesis
    : [{ href: "/", label: "Home" }];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 supports-[backdrop-filter]:backdrop-blur border-b border-border/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to={isHome ? "#top" : "/"}
          className="font-semibold tracking-tight"
        >
          HS
        </Link>

        {/* Centra i link */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm">
          {navLinks.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="story-link text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </div>

        {/* Pulsante CV solo in home */}
        {isHome && (
          <a href="CV.png" download>
            <Button variant="soft" className="hidden sm:inline-flex">
              <Download className="mr-1" /> Download CV
            </Button>
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
