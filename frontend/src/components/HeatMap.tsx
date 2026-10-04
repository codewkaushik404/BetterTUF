// 0 = empty, 1 = light, 2 = strong. Static pattern, 16 cols x 3 rows.
const pattern = "0000000000000000" + "0000000000010202" + "0000000010211222";

export default function Heatmap() {
  return (
    <div className="heat" aria-hidden="true">
      {pattern.split("").map((l, i) => <i key={i} className={l === "0" ? "" : `l${l}`} />)}
    </div>
  );
}