import Link from 'next/link';
import React from 'react';

const ServiceAreaSix = () => {
  return (
    <>
      {/*=================== service area six start ===================*/}
      <div
        className="service-area bg-cover pd-top-120 pd-bottom-90 pd-top-110 pd-bottom-90"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-8">
              <div className="section-title text-center">
                <h6 className="bg-none color-base mb-3">Our Best service</h6>
                <h2 className="title">
                 Our Core Values
                </h2>
                <div style={{padding: '30px'}}>
                  <p>At ClickOnes, We’re committed to excellence, integrity, and customer focus, working to meet the changing needs of our stakeholders. Our culture values merit and growth, promoting innovation and positive social impact.</p>
                  </div>
              </div>
              

              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/1.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Innovation</Link>
                  </h5>
                  <p className="mb-0">
                  We are driven by the idea that a local perspective can solve challenges effectively. We stay committed to ongoing innovation to enhance our products and services continually.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/2.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Integrity </Link>
                  </h5>
                  <p className="mb-0">
                  {/* We are dedicated to creating new opportunities through collaboration with cross-functional teams and industry leaders, embracing the power of teamwork. */}
                  As a payment platform in Pakistan, our success relies on supporting our merchants with top-notch services. We’re committed to maintain professional standards for our stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/3.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Data Encryption </Link>
                  </h5>
                  <p className="mb-0">
                  We ensure your data is securely protected through advanced encryption at every step, giving you peace of mind knowing that your information is safe from unauthorized access. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/4.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Accountability</Link>
                  </h5>
                  <p className="mb-0">
                  We take full ownership of our actions and results, fostering trust and credibility with our valued clients and partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/5.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Customer Focus</Link>
                  </h5>
                  <p className="mb-0">
                  {/* We fully recognize the significance of every role in our organization and treat everyone with the utmost equal respect.  */}
                  We aim to fully understand our customers' and merchants' needs and adapt our products and services to meet them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner style-3">
                <div className="thumb-img text-end">
                  <img src="assets/img/home-6/6.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Email Security</Link>
                  </h5>
                  <p className="mb-0">
                  We keep your emails safe from various threats and unauthorized access, ensuring your sensitive information remains confidential and protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaSix;
