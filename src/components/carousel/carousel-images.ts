import { AccommodationCarouselVariant } from "./carousel-types";
import { IImage } from "../../utils/interfaces";

const prima1Images: IImage[] = [
  { url: require("../../assets/images-prima1/0000.JPG"), label: "prima1-0000" },
  { url: require("../../assets/images-prima1/000111.JPG"), label: "prima1-000111" },
  { url: require("../../assets/images-prima1/1111.jpg"), label: "prima1-1111" },
  { url: require("../../assets/images-prima1/2222.jpg"), label: "prima1-2222" },
  { url: require("../../assets/images-prima1/3333.jpg"), label: "prima1-3333" },
  { url: require("../../assets/images-prima1/4444.jpg"), label: "prima1-4444" },
  { url: require("../../assets/images-prima1/5555.jpg"), label: "prima1-5555" },
  { url: require("../../assets/images-prima1/6666.jpg"), label: "prima1-6666" },
  { url: require("../../assets/images-prima1/7777.png"), label: "prima1-7777" },
  { url: require("../../assets/images-prima1/99999.JPG"), label: "prima1-99999" },
];

const prima2Images: IImage[] = [
  { url: require("../../assets/images-prima2/1111.jpg"), label: "prima2-1111" },
  { url: require("../../assets/images-prima2/2222.jpg"), label: "prima2-2222" },
  { url: require("../../assets/images-prima2/3333.jpg"), label: "prima2-3333" },
  { url: require("../../assets/images-prima2/4444.jpg"), label: "prima2-4444" },
  { url: require("../../assets/images-prima2/5555.jpg"), label: "prima2-5555" },
  { url: require("../../assets/images-prima2/6666.jpg"), label: "prima2-6666" },
  { url: require("../../assets/images-prima2/7777.jpg"), label: "prima2-7777" },
  { url: require("../../assets/images-prima2/8888.jpg"), label: "prima2-8888" },
  { url: require("../../assets/images-prima2/9999.jpg"), label: "prima2-9999" },
  { url: require("../../assets/images-prima2/999999.png"), label: "prima2-999999" },
];

const byVariant: Record<AccommodationCarouselVariant, IImage[]> = {
  prima1: prima1Images,
  prima2: prima2Images,
};

export function getCarouselImages(
  variant: AccommodationCarouselVariant
): IImage[] {
  return byVariant[variant];
}
