import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area about-area_5 pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                {/* <img
                  className="animate-img-3 z-index-2 top_image_bounce"
                  src="assets/img/about/20.png"
                  alt="img"
                /> */}
                <img
                  className="main-img"
                  src="assets/img/about/21.webp"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                {/* <h6 className="sub-title-sky-blue">ABOUT COMPANY</h6> */}
                <h2 className="title">
                One Bill, Multiple Payment Options
                </h2>
                <p className="content mb-4">
                Billing streamlines business operations by offering a single bill payment service that saves you both time and money. Integrated with 1LINK's Bill Payment infrastructure, ClickOnes facilitates invoice payments and subscriptions without requiring any development effort. Empower your customers with a variety of payment methods, including credit cards, debit cards, bank transfers, and digital wallets, enhancing their satisfaction and trust.
                </p>
              
                {/* <Link
                  className="btn btn-base-color border-radius-5"
                  href="/about"
                >
                  Discover More <FaArrowRight />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
