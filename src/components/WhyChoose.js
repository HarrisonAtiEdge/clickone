import React from 'react';

const WhyChoose = () => {
  return (
    <div className="why-choose-area pd-bottom-120">
      <div className="container">
        <div className="section-title mt-4 mt-lg-0">
          <div className="row" style={{marginTop: '3rem'}}>
            <div className="col-lg-4">
              {/* <h6 className="color-base bg-none mb-3">Why choose us?</h6> */}
              <h2 className="title">Simplify Payments with ClickOnes</h2>
            </div>
            <div className="col-xl-7 col-lg-8 offset-xl-1 align-self-end">
              <p className="content">
              ClickOnes streamlines invoicing and payment processing, saving you time and effort.
              Enjoy fast, reliable transactions and keep your cash flow organized with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-8 order-lg-last">
            <img src="assets/img/home-7/5.webp" alt="img" />
          </div>
          <div className="col-xl-5 col-lg-6 align-self-center align-self-center">
            <div className="why-choose-us-list mb-3 mt-4 mt-lg-0">
              <div className="media">
                <h4 className="count">01</h4>
                <div className="media-left me-4 align-self-center">
                  {/* <img src="assets/img/home-7/7.png" alt="img" /> */}
                </div>
                <div className="media-body">
                  <h4>Personalized Invoices</h4>
                  <p>
                  Upload your logo and select a color scheme to create personalized invoices with custom line items and attachments.
                  </p>
                </div>
              </div>
            </div>
            <div className="why-choose-us-list mb-3">
              <div className="media">
                <h4 className="count color-base">02</h4>
                <div className="media-left me-4 align-self-center">
                  {/* <img src="assets/img/home-7/7.png" alt="img" /> */}
                </div>
                <div className="media-body">
                  <h4>Payment Convenience</h4>
                  <p>
                  A simple way for customers to pay invoices online and in person using various payment methods.


                  </p>
                </div>
              </div>
            </div>
            <div className="why-choose-us-list">
              <div className="media">
                <h4 className="count">03</h4>
                <div className="media-left me-4 align-self-center">
                  {/* <img src="assets/img/home-7/7.png" alt="img" /> */}
                </div>
                <div className="media-body">
                  <h4>Payment Reminders</h4>
                  <p>
                  Ensure your customers never miss a payment with our invoice tracking and automated notifications.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
