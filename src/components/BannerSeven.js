import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const BannerSeven = () => {
  return (
    <>
      {/* ================== Banner Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-1 banner-area-8 pd-bottom-100 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/home-8/1.png")' }}
      >
        <div className="container pt-xl-5 pb-xl-5">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5 pt-4 pt-lg-0">
                <h2
                  className="title wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                Seamlessly Control Your <span>Cash Cycle</span>
                </h2>
                <p
                  className="content pe-xl-5 wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  ClickOnes simplifies business management, allowing you to easily create, send, and track invoices while enabling quick, hassle-free payments from your customers.
                </p>
                <Link
                  className="btn btn-base-pink wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                  href="/contact"
                >
                  Get Started 
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-8 offset-xl-2 order-lg-6">
              <div
                className="mt-5 mt-lg-0 ms-4 ms-lg-0 wow animated fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img
                  className="main-img"
                  src="assets/img/home-8/2.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerSeven;
