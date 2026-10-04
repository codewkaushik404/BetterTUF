export default function DifficultyBadge({ level = "Easy" }) {
  return <span className={`badge badge-${level.toLowerCase()}`}>{level}</span>;
}