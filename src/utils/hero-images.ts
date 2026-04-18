import { IImage } from "./interfaces";
import { getApartmentImages } from "./apartment-images";

/**
 * Curated mix for the landing hero (Kasa-style full-bleed slideshow).
 * Interleaves a few shots from each apartment so the hero feels varied without dozens of dots.
 */
export function getHeroSlideshowImages(): IImage[] {
  const prima1 = getApartmentImages("prima1").slice(0, 5);
  const prima2 = getApartmentImages("prima2").slice(0, 5);
  const out: IImage[] = [];
  const len = Math.max(prima1.length, prima2.length);
  for (let i = 0; i < len; i += 1) {
    if (prima1[i]) out.push(prima1[i]);
    if (prima2[i]) out.push(prima2[i]);
  }
  return out;
}
