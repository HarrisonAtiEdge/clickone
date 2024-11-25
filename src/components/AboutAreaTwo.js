import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.webp'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>NEED MORE HELP?</h6>
                <h2 className='title'>
                  Leading, Trusted. Enabling growth.
                </h2>
                <p className='content mb-4'>
                We are committed to empowering your business growth by providing innovative solutions, exceptional service, and unwavering support tailored to meet your unique needs. Together, we can navigate the future of success.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Services
                      </li>
                      <li>
                        <FaCheckCircle /> Help & Support
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Article & News
                      </li>
                      {/* <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li> */}
                    </ul>
                  </div>
                </div>
                <p className='content'>
                Explore our products and services to find the best solutions for your needs.
                Get assistance and answers to your questions from our dedicated support team.
                Stay updated with the latest insights, articles, and news in our industry.
                </p>
                <Link className='btn btn-border-base' href='/about'>
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
