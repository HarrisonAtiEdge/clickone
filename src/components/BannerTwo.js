'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
const BannerTwo = () => { 
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerTwo Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/bg/8.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle "
                  data-aos="fade-right"
                  data-aos-delay="100" 
                  data-aos-duration="1500"
                >
                  Simple. Transparent. Secure
                </h6>
                <h2
                  className="title "
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  {' '}
                  Simplify Payments with <span>ClickOnes</span> 
                </h2>
                <p
                  className="content pe-xl-5 "
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  ClickOnes is a payment platform designed to make online transactions easier for both global and local businesses and their customers. It helps businesses connect with customers by offering a quick, one-click checkout process that is both safe and simple to use. This checkout solution also supports various payment methods, making it convenient for customers to pay in the way they prefer.
                </p>
                <Link
                  className="btn btn-border-base "
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  href="/about"
                >
                  Discover More <FaPlus />
                </Link>
                <div
                  className="d-inline-block align-self-center mt-4 mt-md-0"
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1500"
                >
                  <span
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover"
                  >
                    {/* <img src="assets/img/video.svg" alt="img" />{' '}
                    <h6 className="d-inline-block">how we work</h6> */}
                  </span>

                  <div></div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <img
                  className="banner-animate-img banner-animate-img-4"
                  src="assets/img/banner-2/3.webp"
                  alt="img"
                />
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-2/4.webp"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-2/5.webp"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="assets/img/banner-2/2.webp"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner-2/1.webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerTwo End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BannerTwo;
