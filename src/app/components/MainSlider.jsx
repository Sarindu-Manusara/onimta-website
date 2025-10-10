"use client";
import mainSliderData from "../data/MainSliderData";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useRef, useState } from "react";
import VideoModal from "./VideoModal";
import Image from "next/image";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const MainSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const sliderRef = useRef(null);

  // hooks first
  useEffect(() => setMounted(true), []);

  // options (keep onInit out of here)
  const settings = {
    loop: true,
    mode: "gallery",
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,
    controls: false,
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
  };

  // attach click handler safely
  useEffect(() => {
    if (!mounted || !sliderRef.current) return;
    const el = sliderRef.current;
    const handleSlideClick = (event) => {
      if (event.target.closest(".main-slider-three__btn__video")) setOpen(true);
    };
    el.addEventListener("click", handleSlideClick);
    return () => el.removeEventListener("click", handleSlideClick);
  }, [mounted]);

  const handleClick = () => setOpen(true);
  const fallback = { items: 1, controls: false, nav: false };

  return (
    <section className="main-slider-three" id="home">
      <div ref={sliderRef}>
        {mounted && (
          <TinySlider
            settings={settings ?? fallback}
            onInit={() => {}}                        // ← pass as prop
            className="main-slider-three__carousel"
          >
            {mainSliderData.map(
              ({ id, shape1, shape2, shape3, shape4, bg, videoId, thumb, title, text }) => (
                <Fragment key={id}>
                  <div className="item">
                    <div className="main-slider-three__item">
                      <div className="main-slider-three__bg" style={{ backgroundImage: `url(${bg.src})` }} />
                      <div className="main-slider-three__shape-one" style={{ backgroundImage: `url(${shape1.src})` }} />
                      <div className="main-slider-three__shape-two" style={{ backgroundImage: `url(${shape2.src})` }} />
                      <div className="main-slider-three__shape-three" style={{ backgroundImage: `url(${shape3.src})` }} />
                      <div className="main-slider-three__shape-four" style={{ backgroundImage: `url(${shape4.src})` }} />

                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="main-slider-three__thumb">
                              <Image src={thumb} alt="tolak" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="main-slider-three__content">
                              <h2 className="main-slider-three__title">
                                {title.map((t, i) => (
                                  <span key={i} className="main-slider-three__title__anim">{t}</span>
                                ))}
                              </h2>
                              <p className="main-slider-three__text">
                                {text.split("\n").map((t, i) => (
                                  <Fragment key={i}>{t}<br /></Fragment>
                                ))}
                              </p>
                              <div className="main-slider-three__btn">
                                <a href="services" className="tolak-btn">
                                  <b>Service Work</b>
                                  <span></span>
                                </a>
                                <div
                                  style={{ cursor: "pointer" }}
                                  onClick={handleClick}
                                  className="main-slider-three__btn__video"
                                >
                                  <div className="video-popup">
                                    <i className="icon-play-button"></i>
                                    <span className="video-popup__btn-ripple"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
                </Fragment>
              )
            )}
          </TinySlider>
        )}
      </div>
    </section>
  );
};

export default MainSlider;
