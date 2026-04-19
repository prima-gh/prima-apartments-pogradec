import { IImage } from "./interfaces";
import { getApartmentImages } from "./apartment-images";

/**
 * Landing hero slideshow: all apartment photos, interleaved (Prima 1, Prima 2, …)
 * so the hero alternates between the two units.
 */
export function getHeroSlideshowImages(): IImage[] {
  const prima1 = getApartmentImages("prima1");
  const prima2 = getApartmentImages("prima2");
  const out: IImage[] = [];
  const len = Math.max(prima1.length, prima2.length);
  for (let i = 0; i < len; i += 1) {
    if (prima1[i]) out.push(prima1[i]);
    if (prima2[i]) out.push(prima2[i]);
  }
  return out;
}
