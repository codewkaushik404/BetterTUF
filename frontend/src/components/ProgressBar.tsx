export default function ProgressBar({ value = 0 }) {
  return <div className="bar"><span style={{ width: `${value}%` }} /></div>;
}
