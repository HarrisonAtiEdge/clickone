'use client'
// import React, { useState } from 'react';
import {
    FaArrowAltCircleRight,
} from 'react-icons/fa';
import Link from 'next/link';

const FinanceInner = () => {
    return (
        <>
            <div style={{ background: '#021638' }}>
                    
                {/* service area start */}
                <div id="service" className="service-area bg-relative pd-top-110 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="section-title style-white">
                                    {/* <h6 className="sub-title bg-none p-0 mb-3 color-base_6">
                                        Service
                                    </h6> */}
                                    <h2 className="title">Enhance Your Financial Management</h2>
                                    {/* <Link className="me-2 btn btn-base_6" href="/service">
                                        All Service <FaArrowAltCircleRight className="mt-4" />
                                    </Link> */}
                                    
                                </div>
                                <p className="text-white mb-0">
                                    Organize and track invoices and payments with consistency and confidence.
                                    </p>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-service-inner bg-gray_2 border-radius-0">
                                            <div className="thumb">
                                                <img src="assets/img/home-10/16.png" alt="img" />
                                            </div>
                                            <div className="details">
                                                <h5 className="text-white">
                                                Saved Entries
                                                </h5>
                                                <p className="text-white mb-0">
                                                Quickly fill in details using saved templates and customer contacts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-service-inner bg-gray_2 border-radius-0">
                                            <div className="thumb">
                                                <img src="assets/img/home-10/17.png" alt="img" />
                                            </div>
                                            <div className="details">
                                                <h5 className="text-white">
                                                Invoice Tracking
                                                </h5>
                                                <p className="text-white mb-0">
                                                Stay on top of unpaid invoices with automatic reminders and alerts for undelivered invoices.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-service-inner bg-gray_2 border-radius-0">
                                            <div className="thumb">
                                                <img src="assets/img/home-10/18.png" alt="img" />
                                            </div>
                                            <div className="details">
                                                <h5 className="text-white">
                                                Invoice History
                                                </h5>
                                                <p className="text-white mb-0">
                                                See the full history of each invoice and payment.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-service-inner bg-gray_2 border-radius-0">
                                            <div className="thumb">
                                                <img src="assets/img/home-10/19.png" alt="img" />
                                            </div>
                                            <div className="details">
                                                <h5 className="text-white">
                                                Auto-Send
                                                </h5>
                                                <p className="text-white mb-0">
                                                Set up recurring and scheduled invoices to send automatically.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>   
        </>
    );
};

export default FinanceInner;
