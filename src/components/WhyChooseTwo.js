import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const WhyChooseTwo = () => {
  return (
    <>
      {/* start why choose us */}
      <div className="why-choose-us-area why-choose-us-area_2 pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="section-title mb-0 text-center">
                {/* <h6 className="sub-title">Why Choose Us</h6> */}
                <h2 className="title">Empowering Investors Worldwide</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-1.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">24/7 Support</h5>
                  <p className="mb-0 ">
                  Always available assistance from our dedicated team to address your inquiries through various channels for your convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-2.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">Free Withdraw</h5>
                  <p className="mb-0">
                  Experience hassle-free withdrawals with no fees or charges, allowing you to access your funds without any costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className=" bg-relative border-radius-5 mb-4 p-4 pb-0 text-center">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/home-11/why-3.png"
                    alt="img"
                  />
                </div>
                <div className="details p-3">
                  <h5 className="mb-2">User Friendly Platform</h5>
                  <p className="mb-0">
                  A user-friendly platform provides simple and seamless integration for an effortless experience and enhances the overall user experience.  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/home-11/w.webp" alt="" />
            </div>
            <div className="col-lg-6">
              <h2>
              About ClickOnes
              </h2>
              <p className="pt-4">
              ClickOnes is a leading fintech company in Pakistan, helping businesses streamline operations with smart invoicing, subscription management, and payment collection through a wide network of banks, digital wallets, and financial institutions.
              </p>
              <p className="pt-2">
              We provide industry-specific financial products with integrated payment solutions across sectors like education, healthcare, distribution, and logistics. Our solutions automate and expedite the entire cash flow process, from invoice generation to payment collection and reconciliation.
              </p>
              <Link
                className="btn btn-border-base wow  fadeInLeft animated mt-4"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
                href="/contact"
                style={{
                  visibility: 'visible',
                  animationDuration: '1.5s',
                  animationDelay: '0.6s',
                  animationName: 'fadeInLeft',
                }}
              >
                Get Started <FaPlus />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end why choose us */}
    </>
  );
};

export default WhyChooseTwo;
