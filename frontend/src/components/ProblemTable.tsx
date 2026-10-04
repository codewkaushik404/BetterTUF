import { Bookmark, Check } from "lucide-react";
import DifficultyBadge from "./DifficultyBadge";
import LeetcodeIcon from "../assets/leetcode.png";
import GfgIcon from "../assets/gfg.png";

type ProblemUrl = {
  platform: string;
  url: string;
};

type Problem = {
  title: string;
  level: string;
  done?: boolean;
  urls?: ProblemUrl[];
};

type ProblemTableProps = {
  problems: Problem[];
};

export default function ProblemTable({ problems }: ProblemTableProps) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th style={{ width: "50%" }}>Problem</th>
            <th>Difficulty</th>
            <th>Status</th>
            <th className="urls-heading">URLs</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((p, i) => (
            <tr key={p.title}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>
                <DifficultyBadge level={p.level} />
              </td>
              <td>
                <span className={`status ${p.done ? "status-done" : ""}`}>
                  {p.done && <Check size={11} />}
                </span>
              </td>
              <td className="urls-cell">
                {Array.isArray(p.urls) ? (
                  <div className="problem-urls">
                    {p.urls.map((problem) => (
                      <a
                        key={`${problem.platform}-${problem.url}`}
                        className="url-link"
                        href={problem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {problem.platform === "leetcode" ? (
                          <img
                            className="leetcode-icon"
                            src={LeetcodeIcon}
                            alt="LeetCode"
                          />
                        ) : problem.platform === "gfg" ? (
                          <img className="gfg-icon" src={GfgIcon} alt="GFG" />
                        ) : null}
                      </a>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </td>
              <td>
                <Bookmark size={15} className="muted" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
