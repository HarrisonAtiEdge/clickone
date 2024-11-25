import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PriceAreaThree = () => {
  return (
    <>
      {/* pricing-area start */}
      <div className="pricing-area pricing-area_3 pd-top-90 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">
              Best plans to get our <span>Services</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <h2 className="mb-3">
                  Free 
                </h2>
                <h5>Basic</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Monthly Transaction limit | 60
                  </li>
                  <li>
                    <FaCheck />
                    Daily Transaction limit | 7
                  </li>
                  <li>
                    <FaCheck />
                    Max Transaction Amount | PKR 15,000
                  </li>
                  <li>
                    <FaCheck />
                    MDR per Transaction | 4%
                  </li>
                  <li>
                    <FaCheck />
                    Accepted | VISA, Mastercard
                  </li>
                  <li>
                    <FaCheck />
                    Settlement Period | T+5 Business Days
                  </li>
                  <li>
                    <FaCheck />
                    Payment Notifications | Email
                  </li>
                  <li className='hide'>
                    <FaCheck />
                    No. of Integration | Not included
                  </li>
                  <li>
                    <FaCheck />
                    Reports & Statements | Basic
                  </li>
                  <li className='hide'>
                    International Transactions are not included in this plan
                  </li>
                  {/* <li className="hide">
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Video &amp; Animation Production{' '}
                  </li> */}
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner price-active">
                <h2 className="mb-3">
                  PKR 999 <sub>/mo</sub>
                </h2>
                <h5>Standard</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Monthly Transaction limit | 220
                  </li>
                  <li>
                    <FaCheck />
                    Daily Transaction limit | 12
                  </li>
                  <li>
                    <FaCheck />
                    Max Transaction Amount | PKR 120,000
                  </li>
                  <li>
                    <FaCheck />
                    MDR per Transaction | 3.5%
                  </li>
                  <li>
                    <FaCheck />
                    Accepted | VISA, Mastercard
                  </li>
                  <li>
                    <FaCheck />
                    Settlement Period | T+4 Business Days
                  </li>
                  <li>
                    <FaCheck />
                    Payment Notifications | SMS + Email
                  </li>
                  <li >
                    <FaCheck />
                    No. of Integration | 1
                  </li>
                  <li>
                    <FaCheck />
                    Reports & Statements | Professional
                  </li>
                  <li className='hide'>
                    International Transactions are not included in this plan
                  </li>
                  {/* <li className="hide">
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Video &amp; Animation Production{' '}
                  </li> */}
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <h2 className="mb-3">
                  PKR 1,999 <sub>/mo</sub>
                </h2>
                <h5>Premium</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Monthly Transaction limit | 250
                  </li>
                  <li>
                    <FaCheck />
                    Daily Transaction limit | 15
                  </li>
                  <li>
                    <FaCheck />
                    Max Transaction Amount | PKR 150,000
                  </li>
                  <li>
                    <FaCheck />
                    MDR per Transaction | 3.5%
                  </li>
                  <li>
                    <FaCheck />
                    Accepted | VISA, Mastercard
                  </li>
                  <li>
                    <FaCheck />
                    Settlement Period | T+4 Business Days
                  </li>
                  <li>
                    <FaCheck />
                    Payment Notifications | SMS + Email
                  </li>
                  <li >
                    <FaCheck />
                    No. of Integration | 2
                  </li>
                  <li>
                    <FaCheck />
                    Reports & Statements | Professional
                  </li>
                  <li className='hide'>
                    International Transactions are not included in this plan
                  </li>
                  {/* <li className="hide">
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Video &amp; Animation Production{' '}
                  </li> */}
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* pricing-area start */}
    </>
  );
};

export default PriceAreaThree;
