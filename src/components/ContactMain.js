'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        'service_cjecrsl', //YOUR_SERVICE_ID
        'template_13xpvxg', //YOUR_TEMPLATE_ID
        form.current,
        'pBCAPcgxxGJD4ywEv', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Message Sent Successfully!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
            form.current[4].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Message Not Sent!');
          }
        },
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <>
        {/* contact area start */}
        <div className="contact-area pd-top-120 pd-bottom-120">
          <div className="container">
            <div className="contact-page-inner bg-gray">
              {/* <div className="section-title mb-4 pb-2">
                <h2 className="title">Direct contact us? </h2>
                <p className="content mb-0">
                  For your car we will do everything advice, repairs and
                  maintenance. We are the some preferred choice by many car
                  owners because our experience and knowledge is selfe
                  vident.For your car we will do som everything.
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Enter Your Name."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="Enter Your Email."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter Your Subject."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea
                        name="message"
                        id="massage"
                        cols="1"
                        rows="5"
                        placeholder="Enter Your Massage ..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-base border-radius-5"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form> */}

              <div className="contact-inner-1">
                <img
                  className="top_image_bounce animate-img-1"
                  src="assets/img/banner/2.png"
                  alt="img"
                />
                <img
                  className="top_image_bounce animate-img-2"
                  src="assets/img/about/6.png"
                  alt="img"
                />
                <div className="row">
                  <div
                    className="col-lg-8"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                  >
                    <img className="w-100" src="assets/img/bg/4.webp" alt="img" />
                  </div>
                  <div
                    className="col-lg-4 wow animated fadeInRight"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                  >
                    <div className="section-title mb-0">
                      <h6 className="sub-title">GET IN TOUCH</h6>
                      <h2 className="title">
                        Helping You <span>Achieve</span> Financial Peace
                      </h2>
                      {/* <p className="content">
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p> */}

                      <form className="mt-4" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="single-input-inner style-border">
                              <input id="name"
                                name="user_name" type="text" placeholder="Your Name" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="single-input-inner style-border">
                              <input id="email"
                                name="email" type="email" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="single-input-inner style-border">
                              <input id="phone"
                                name="phone" type="tel" placeholder="Your Phone" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="single-input-inner style-border">
                              <input id="subject"
                                name="subject" type="text" placeholder="Your Subject" required />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-input-inner style-border">
                              <textarea name="message" id="massage" type="text" placeholder="Message" defaultValue={''} required />
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-black mt-0 w-100 border-radius-5"
                            >
                              Send Message
                            </button>
                           
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* contact area end */}

        {/* contact list start */}
        <div className="contact-page-list">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/13.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Contacts us</h5>
                    <h6>+92 223 4483763</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/14.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Your Email</h5>
                    <h6>ClickOnes@gmail.com</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/15.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5>Location</h5>
                    <h6>Karachi,Pakistan</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact list start */}
        {/* map start */}
        <div className="contact-g-map">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24179.93076113888!2d66.99906286985454!3d24.818341941611394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dbbdc1875bf%3A0x6a6572ab3a66fed8!2sClifton%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1730451983598!5m2!1sen!2s"
            title="new title"
          />
        </div>
        {/* map end */}
      </>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;

