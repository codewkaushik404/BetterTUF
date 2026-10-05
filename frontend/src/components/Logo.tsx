import { Code2 } from "lucide-react";

//type props = { title: string};

export default function Logo() {
  return (
    <a href="/" className="logo">
      <span className="logo-mark"><Code2 size={16} /></span>
      DSA Track
    </a>
  );
}