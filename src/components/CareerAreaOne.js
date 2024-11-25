import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CareerAreaOne = () => {
  return (
    <>
      {/* career area start */}
      <div className="career-section career-section_1 pd-top-120 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                {/* <h6 className="sub-title">ABOUT US</h6> */}
                <h2 className="title">
                Revolutionize Invoicing, Boost Payments
                </h2>
                <p style={{marginTop: '1rem'}}> Save time and receive faster, more dependable payments with automated reminders and seamless payment options. Streamline and automate your invoicing process effortlessly with ClickOnes.</p>
              </div>
             
            </div>
          </div>
          
          <div className="career-wrap-area">
            <nav>
              <div
                className="nav nav-tabs career-nav-tab"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-mission-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mission"
                  type="button"
                  role="tab"
                  aria-controls="nav-mission"
                  aria-selected="true"
                >
                  Integrate for Efficiency
                </button>
                <button
                  className="nav-link"
                  id="nav-vision-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-vision"
                  type="button"
                  role="tab"
                  aria-controls="nav-vision"
                  aria-selected="false"
                >
                  Automate Subscription Billing
                </button>
                <button
                  className="nav-link"
                  id="nav-career-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-career"
                  type="button"
                  role="tab"
                  aria-controls="nav-career"
                  aria-selected="false"
                >
                  Simplify Invoice Management
                </button>
                <button
                  className="nav-link"
                  id="nav-solution-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-solution"
                  type="button"
                  role="tab"
                  aria-controls="nav-solution"
                  aria-selected="false"
                >
                  Enjoy Predictable Cash Flow
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-mission"
                role="tabpanel"
                aria-labelledby="nav-mission-tab"
              >
                <div className="career-wrap">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src="assets/img/about/16.webp" alt="img" />
                    </div>
                    <div className="col-lg-7">
                      <h3 className="mb-3">Integrate for Efficiency</h3>
                      <p className="mb-3">
                      Linking ClickOnes with your ERP system optimizes billing processes by automating invoicing and payments. This integration provides real-time tracking of transactions, minimizing errors and manual efforts. Achieve smoother, more efficient operations with reduced administrative workload.
                      </p>
                      {/* <div className="row">
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-vision"
                role="tabpanel"
                aria-labelledby="nav-vision-tab"
              >
                <div className="career-wrap">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src="assets/img/about/16.webp" alt="img" />
                    </div>
                    <div className="col-lg-7">
                      <h3 className="mb-3">Automate Subscription Billing</h3>
                      <p className="mb-3">
                      With automated subscription billing, customers are charged seamlessly, ensuring uninterrupted revenue flow. This “set-it-and-forget-it” approach removes the need for manual intervention, enhancing customer experience. Focus on growth while ClickOnes manages recurring payments effortlessly.
                      </p>
                      {/* <div className="row">
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-career"
                role="tabpanel"
                aria-labelledby="nav-career-tab"
              >
                <div className="career-wrap">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src="assets/img/about/16.webp" alt="img" />
                    </div>
                    <div className="col-lg-7">
                      <h3 className="mb-3">Simplify Invoice Management</h3>
                      <p className="mb-3">
                      Reduce manual billing tasks by bulk uploading invoices within seconds. ClickOnes quickly processes these payments, freeing up valuable time and reducing operational delays. Concentrate on high-priority work while ClickOnes handles invoice management.
                      </p>
                      {/* <div className="row">
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-solution"
                role="tabpanel"
                aria-labelledby="nav-solution-tab"
              >
                <div className="career-wrap">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src="assets/img/about/16.webp" alt="img" />
                    </div>
                    <div className="col-lg-7">
                      <h3 className="mb-3">Enjoy Predictable Cash Flow</h3>
                      <p className="mb-3">
                      Recurring payments ensure invoices are automatically settled, guaranteeing a steady cash flow. This automation eliminates the risk of missed payments and improves financial predictability. Enjoy peace of mind with consistent, hassle-free payment cycles.
                      </p>
                      {/* <div className="row">
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="single-list-inner style-check style-heading style-check mb-3">
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* career area start */}
    </>
  );
};

export default CareerAreaOne;
