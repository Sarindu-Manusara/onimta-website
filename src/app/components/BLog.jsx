"use client";
import blogData from "../data/BlogData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
const { tagLine, title, carouselData } = blogData;

const Blog = ({ page = "list" }) => {
  // 1) hooks first (no early returns before hooks)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 2) slider settings always an object
  const settings = {
    items: 1,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: page === "carousel",       // boolean
    controls: false,
    mouseDrag: true,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
                  // prevents "onInit is not a function"
  };

  // 3) robust fallback: never pass undefined to TinySlider
  const fallback = { items: 1, controls: false, nav: false };

  return (
    <section className="blog-three" id="blog">
      <div className="container">
        {page === "carousel" ? null : (
          <div className="sec-title-two text-center">
            <h6 className="sec-title-two__tagline">
              <span className="sec-title-two__tagline__left icofont-rounded-double-left" />
              {tagLine}
              <span className="sec-title-two__tagline__right icofont-rounded-double-right" />
            </h6>
            <h3 className="sec-title-two__title">{title}</h3>
          </div>
        )}

        <div className="tolak-owl__carousel--basic-nav">
          {mounted && (
            <TinySlider settings={settings ?? fallback} className="blog-three__carousel" onInit = {() => {}} >
              {carouselData
                .slice(0, page === "carousel" ? carouselData.length : 3)
                .map(
                  ({
                    id,
                    image,
                    href,
                    date,
                    year,
                    comments,
                    title: postTitle,
                    text,
                    author,
                    authorImage,
                    designation,
                  }) => (
                    <div key={id} className="item">
                      <div
                        className="blog-card-three wow fadeInUp"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="00ms"
                      >
                        <div className="blog-card-three__image">
                          <Image src={image} alt={postTitle} style={{ height: "auto" }} />
                          <div className="blog-card-three__date">
                            <div dangerouslySetInnerHTML={{ __html: date }} />
                            <div className="blog-card-three__date__year">{year}</div>
                          </div>
                          <Link href={href} className="blog-card-three__image__link">
                            <i className="icon-right-arrow" />
                            <span className="sr-only">{postTitle}</span>
                          </Link>
                        </div>
                        <div className="blog-card-three__content">
                          <h3 className="blog-card-three__title">
                            <a href={href}>{postTitle}</a>
                          </h3>
                          <p className="blog-card-three__text">{text}</p>
                          <div className="blog-card-three__meta">
                            <div className="blog-card-three__meta__author">
                              <Image src={authorImage} alt="tolak" />
                              {designation}:<Link href={href}>{author}</Link>
                            </div>
                            <div className="blog-card-three__meta__comments">
                              <i className="icofont-speech-comments" />
                              Comments ({comments})
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </TinySlider>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
