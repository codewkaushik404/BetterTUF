import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import DashboardMockup from "./DashboardMockup";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  heading: string[];
  subheading: string;
  children: ReactNode
}

// Split screen: brand panel (left) + Clerk component slot (right).
export default function AuthLayout({ heading, subheading, children }: AuthLayoutProps) {
  return (
    <div className="auth">
      <aside className="auth-brand home-bg">
        <div>
            <Link to="/" className="btn btn-outline">
              <ArrowLeft size={16} /> 
              Home
            </Link>
        </div>
        <div className="auth-brand-copy">
          <h1>{heading[0]}<br /><span className="accent">{heading[1]}</span></h1>
          <p className="muted">{subheading}</p>
        </div>
        <DashboardMockup />
      </aside>

      <main className="auth-main">
        <div className="auth-topbar">
          <span className="auth-mobile-logo"><Logo /></span>
          <ThemeToggle />
        </div>
        <div className="auth-slot">{children}</div>
      </main>
    </div>
  );
}