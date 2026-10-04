import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar.js";
import DashboardMockup from "../components/DashboardMockup.js";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-bg">
      <Navbar />
      <main className="container hero">
        <section>
          <h1>Track Your<br /><span className="accent">DSA Journey</span></h1>
          <h2>Solve. Track. Improve.</h2>
          <p className="muted">
            A clean and focused platform to follow DSA Sheets
            and track your progress – inspired by old TUF.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn btn-primary"> Get Started <ArrowRight size={16} /> </Link>
            <Link to="/sheets" className="btn">View DSA Sheets</Link>
          </div>
        </section>
        <DashboardMockup />
      </main>
    </div>
  );
}

