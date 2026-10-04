import { Check, Circle, Flame } from "lucide-react";
import ProgressRing from "./ProgressRing.jsx";
import Heatmap from "./HeatMap.jsx";

const topics: [string, boolean][] = [
  ["Arrays", true],
  ["Linked List", true],
  ["Stack", false],
  ["Binary Tree", false],
];

export default function DashboardMockup() {
  return (
    <div className="mock-wrap" aria-hidden="true">
      <div className="card mock-streak">
        <Flame className="accent" size={26} />
        <div><b>Today</b><br />5 problems<br /><span className="muted">2h 30m</span></div>
      </div>
      <div className="card mock">
        <div className="mock-dots"><i /><i /><i /></div>
        <div className="mock-inner">
          <div className="mock-head">
            <ProgressRing value={65} size={76} stroke={8} />
            <div>
              <b>DSA Sheet Progress</b>
              <p className="accent" style={{ fontSize: 12, marginTop: 4, fontWeight: 600 }}>292 / 450 problems</p>
            </div>
          </div>
          <Heatmap />
          <div className="mock-body">
            <ul className="check-list">
              {topics.map(([name, done]) => (
                <li key={name}>
                  {done ? <Check size={16} className="accent" /> : <Circle size={16} className="muted" />}
                  {name}
                </li>
              ))}
            </ul>
            <div className="mock-bars">
              {[34, 50, 76, 100].map((h) => <span key={h} style={{ height: h }} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}