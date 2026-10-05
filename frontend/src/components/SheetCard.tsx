import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

type SheetCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  label: string;
  done: number;
  total: number;
};

export default function SheetCard({
  icon,
  title,
  description,
  label,
  done,
  total,
}: SheetCardProps) {
  const pct = Math.round((done / total) * 100);
  return (
    <article className="card sheet-card">
      <div className="sheet-card-head">
        <span className="sheet-icon">{icon}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="sheet-meta">
        <span className="accent">
          {done} / {total}
        </span>
        <span className="muted">{pct}%</span>
      </div>
      <ProgressBar value={pct} />
      <Link
        to={`/sheets/${label}`}
        className="btn btn-outline btn-block"
        style={{ marginTop: 18 }}
      >
        View Sheet <ArrowRight size={14} />
      </Link>
    </article>
  );
}
