type Topic = {
  name: string;
  done: number;
  total: number;
  active?: boolean;
};

type TopicSidebarProps = {
  topics: Topic[];
};

export default function TopicSidebar({ topics }: TopicSidebarProps) {
  return (
    <ul className="topic-list">
      {topics.map((t, i) => (
        <li key={t.name} className={`topic ${t.active ? "topic-active" : ""}`}>
          <span className="topic-num">{i + 1}</span>
          {t.name}
          <span className="topic-count">{t.done} / {t.total}</span>
        </li>
      ))}
    </ul>
  );
}
