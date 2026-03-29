import { Carousel, Tabs } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import type { TabsProps } from "antd";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IImage } from "../../utils/interfaces";
import { getCarouselImages } from "./carousel-images";
import { AccommodationCarouselVariant } from "./carousel-types";
import "./carousel.css";

type CarouselPaneProps = {
  variant: AccommodationCarouselVariant;
  tabKey: string;
  activeTabKey: string;
};

const CarouselPane = ({ variant, tabKey, activeTabKey }: CarouselPaneProps) => {
  const { t } = useTranslation();
  const images: IImage[] = getCarouselImages(variant);
  const carouselRef = useRef<CarouselRef>(null);    
  const keyboardActive = activeTabKey === tabKey;

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!keyboardActive) return;
      const api = carouselRef.current;
      if (!api) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        api.prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        api.next();
      } else if (e.key === "Home") {
        e.preventDefault();
        api.goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        api.goTo(Math.max(0, images.length - 1));
      }
    },
    [keyboardActive, images.length]
  );

  return (
    <div
      className="carousel-pane"
      data-carousel-tab={tabKey}
      data-active={keyboardActive ? "true" : undefined}
      tabIndex={keyboardActive ? 0 : -1}
      role="region"
      onKeyDown={onKeyDown}
    >
      <Carousel ref={carouselRef} effect="fade" className="accommodation-carousel-inner">
        {images.map((el) => (
          <div key={el.label} className="carousel-section">
            <div className="carousel-slide-frame">
              <img
                className="carousel-image"
                src={el.url}
                alt={el.label}
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const AccommodationGallery = () => {
  const { t } = useTranslation();
  const [activeTabKey, setActiveTabKey] = useState("prima1");
  const skipFocusOnTabMount = useRef(true);

  useEffect(() => {
    if (skipFocusOnTabMount.current) {
      skipFocusOnTabMount.current = false;
      return;
    }
    const node = document.querySelector<HTMLElement>(
      `[data-carousel-tab="${activeTabKey}"]`
    );
    node?.focus({ preventScroll: true });
  }, [activeTabKey]);

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        key: "prima1",
        label: t("carousel.tabPrima1"),
        children: (
          <CarouselPane variant="prima1" tabKey="prima1" activeTabKey={activeTabKey} />
        ),
      },
      {
        key: "prima2",
        label: t("carousel.tabPrima2"),
        children: (
          <CarouselPane variant="prima2" tabKey="prima2" activeTabKey={activeTabKey} />
        ),
      },
    ],
    [t, activeTabKey]
  );

  return (
    <section
      className="accommodation-gallery-section"
      aria-labelledby="gallery-section-title"
    >
      <h2 id="gallery-section-title" className="accommodation-gallery-section-title">
        {t("carousel.sectionHeading")}
      </h2>
      <Tabs
        className="accommodation-gallery-tabs"
        activeKey={activeTabKey}
        onChange={setActiveTabKey}
        items={items}
        centered
        size="large"
        destroyInactiveTabPane={false}
      />
    </section>
  );
};

export default AccommodationGallery;
