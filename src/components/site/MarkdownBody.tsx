import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownBodyProps = {
  markdown: string;
  /** Set when the page template already renders the record's H1 separately. */
  stripLeadingH1?: boolean;
  className?: string;
};

export function MarkdownBody({ markdown, stripLeadingH1 = true, className }: MarkdownBodyProps) {
  const content = stripLeadingH1 ? stripFirstH1(markdown) : markdown;

  return (
    <div
      className={`prose prose-ecomtik max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink prose-p:text-graphite/85 prose-strong:text-ink prose-a:text-brand prose-a:no-underline prose-a:font-semibold hover:prose-a:text-brand-amber prose-li:text-graphite/85 prose-blockquote:border-brand prose-hr:border-border ${className ?? ""}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

function stripFirstH1(markdown: string): string {
  const lines = markdown.split("\n");
  const firstContentIndex = lines.findIndex((line) => line.trim().length > 0);
  if (firstContentIndex === -1 || !lines[firstContentIndex]?.startsWith("# ")) {
    return markdown;
  }
  return lines.slice(firstContentIndex + 1).join("\n").replace(/^\s+/, "");
}
