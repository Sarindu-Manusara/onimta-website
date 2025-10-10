"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const topbarData = [
  "Wellcome To It-Solution !",
  "Best It-Solution Business !",
];

const settings = {
  loop: true,
  mode: "gallery",
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  items: 1,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  nav: false,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const fallback = { items: 1, controls: false, nav: false };

const Topbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="topbar-three">
      <Container>
        {mounted && (
          <TinySlider
            settings={settings ?? fallback}
            onInit={() => {}}                    // ← pass as prop (function)
            className="topbar-three__carousel"
          >
            {topbarData.map((text, i) => (
              <div className="item" key={i}>
                <p className="topbar-three__text">{text}</p>
              </div>
            ))}
          </TinySlider>
        )}
      </Container>
    </div>
  );
};

export default Topbar;
