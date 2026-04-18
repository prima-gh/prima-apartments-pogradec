/**
 * Warm the browser cache for one or more image URLs (non-blocking).
 */
export function preloadImageUrls(urls: string[]): void {
  for (const url of urls) {
    if (!url) continue;
    const img = new Image();
    img.decoding = "async";
    img.src = url;
  }
}

export function preloadImageUrl(url: string): void {
  preloadImageUrls([url]);
}
