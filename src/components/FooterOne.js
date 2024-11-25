'use client'
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import React, { useRef } from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterOne = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        'service_cjecrsl', //YOUR_SERVICE_ID
        'template_wyieyep', //YOUR_TEMPLATE_ID
        form.current,
        'pBCAPcgxxGJD4ywEv', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Email Sent Successfully!');
            form.current[0].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Email Not Sent!');
          }
        },
      );
  };

  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className="row" >
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Subscribe To Our Newsletter</h2>
                </div>

                <div className="col-lg-6 align-self-center text-lg-end">
                <form className="mt-4" ref={form} onSubmit={sendEmail}>
                  <input id='newsletter' name='newsletter' type="email" placeholder="Your e-mail address" />
                  {/* <Link className="btn btn-black border-radius-0" href="#">
                    Submit now
                  </Link> */}
                  <button
                    type="submit"
                    className="btn btn-black border-radius-0"
                  >
                    Send Message
                  </button>
                </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <Link href='/'>
                    <img src="assets/img/logo2.png" alt="img" />
                  </Link>
                </div>
                <div className="details">
                  <p>
                  ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.
                  </p>
                  {/* <p className="mt-3">
                    <FaPhoneAlt /> (+888) 123 456 765
                  </p> 
                  <p className="mt-2">
                    <FaEnvelope /> (+888) 123 456 765
                  </p>
                  <ul className="social-media">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Links</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <FaArrowRight /> About
                    </Link>
                  </li>
                  <li>
                    <Link href="/payment">
                      <FaArrowRight /> Payment{' '}
                    </Link>
                  </li>
                  <li>
                    <Link href="/invoices">
                      <FaArrowRight /> Invoices
                    </Link>
                  </li>
                  <li>
                    <Link href="/billing">
                      <FaArrowRight /> Billing
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing-2">
                      <FaArrowRight /> Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" >
              <div className="details">
                <h4 className="widget-title">Connect</h4>
                <p className="mt-3" style={{ color: 'white' }}>
                  <FaPhoneAlt /> (+92) 334 456 7653
                </p>
                <p className="mt-2" style={{ color: 'white' }}>
                  <FaEnvelope /> ClickOnes@gamil.com
                </p>
                <ul className="social-media">
                  <li>
                    <Link href="#">
                      {/* <FaFacebookF /> */}
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector{' '}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li> */}

            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}

          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© ClickOnes 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="#">Terms &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
