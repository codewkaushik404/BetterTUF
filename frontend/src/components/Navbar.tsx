import { Search } from "lucide-react";
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/react";

type NavbarProps = {
  loggedIn?: boolean;
};

export default function Navbar({ loggedIn = true }: NavbarProps) {
  const links = [
    {label: "Home", path: "/"},
    {label: "DSA Sheets", path: "/sheets"}
  ];

  const location = useLocation();
  const currentPage = links.find((link) => location.pathname === link.path)?.label;
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links">
          {links.map((link) => (
            <Link key={link.label} to={link.path} className={`nav-link ${currentPage === link.label ? "nav-link-active" : ""}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          {loggedIn ? <button className="icon-btn" aria-label="Search"><Search size={18} /></button> : <></>}
          <ThemeToggle />
          {loggedIn ? (
            <span className="avatar">K</span>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
