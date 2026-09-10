export type ContentType = "core" | "market" | "service" | "blog";

export type PublicationStatus = "published" | "inactive";

export type SourceLink = {
  id: string;
  title: string;
  url: string;
};

export type PageMetadata = {
  id: string;
  type: ContentType;
  path: string;
  title: string;
  description: string;
  h1: string;
  sourceStatus: string;
  publicationRequirement: string;
  primaryCtaPath: string;
  canonicalOnPublication: string;
  primaryKeyword: string | null;
  supportingKeywords: string[];
  bodyWordCount: number;
  family?: string;
  proofRequirement?: string;
  sourceIds?: string[];
  sourceLinks?: SourceLink[];
  category?: string;
  relatedServiceIds?: string[];
  author?: string | null;
  reviewer?: string | null;
  publishedAt?: string | null;
  reviewedAt?: string | null;
  earliestSuggestedReleaseWeek?: number;
};

export type ContentRecord = {
  metadata: PageMetadata;
  bodyMarkdown: string;
};

export type PublishedRecord = ContentRecord & {
  status: PublicationStatus;
};
