"use client";
import FeatureOneData from "../data/FeatureOneData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const { bg, items, tagLine, title } = FeatureOneData;

const FeatureOne = () => {
  // mount gate for client-only slider
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // options only — keep onInit out of here
  const settings = {
    items: 3,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: false,
    mouseDrag: true,
    controls: false,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  const fallback = { items: 1, controls: false, nav: false };

  return (
    <section
      className="feature-three"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="sec-title-two text-center">
          <h6 className="sec-title-two__tagline">
            <span className="sec-title-two__tagline__left icofont-rounded-double-left" />
            {tagLine}
            <span className="sec-title-two__tagline__right icofont-rounded-double-right" />
          </h6>
          <h3 className="sec-title-two__title">{title}</h3>
        </div>

        {mounted && (
          <TinySlider
            settings={settings ?? fallback}
            onInit={() => {}}                             // <-- pass as prop
            className="feature-three__carousel"
          >
            {items.map(({ id, icon, image, itemText, text, title, href }) => (
              <div key={id} className="item">
                <div
                  className="feature-three__item wow fadeInUp"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="feature-three__item__image">
                    <Image src={image} alt="tolak" />
                    <Link href={href} className="feature-three__item__link">
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>

                  <div className="feature-three__item__normal">
                    <h4 className="feature-three__item__normal__title">{title}</h4>
                    <p className="feature-three__item__normal__text">{text}</p>
                  </div>

                  <div className="feature-three__item__hover">
                    <div className="feature-three__item__icon">
                      <span className={icon} />
                    </div>
                    <h4 className="feature-three__item__title">{title}</h4>
                    <p className="feature-three__item__text">{itemText}</p>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        )}
      </div>
    </section>
  );
};

export default FeatureOne;
