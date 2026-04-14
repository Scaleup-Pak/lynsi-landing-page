type PageMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  robots?: string;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  const existing = document.head.querySelector(
    selector,
  ) as HTMLMetaElement | null;
  const element = existing ?? document.createElement("meta");

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(element);
  }
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  const existing = document.head.querySelector(
    selector,
  ) as HTMLLinkElement | null;
  const element = existing ?? document.createElement("link");

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(element);
  }
}

export function setPageMetadata({
  title,
  description,
  canonicalUrl,
  robots = "index, follow",
}: PageMetadata) {
  document.title = title;

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: description,
  });
  upsertMeta('meta[name="robots"]', { name: "robots", content: robots });

  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: title,
  });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: description,
  });
  upsertMeta('meta[property="og:url"]', {
    property: "og:url",
    content: canonicalUrl,
  });

  upsertMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: title,
  });
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: description,
  });

  upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
}
