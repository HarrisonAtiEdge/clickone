import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";

const TeamDetailsGroup = () => {
  return (
    <>
      {/* ================= TeamDetailsGroup Start =================*/}
      <div className='team-blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='team-details-page'>
            <div className='row'>
              <div className='col-lg-5 text-center'>
                <div className='thumb mb-4 mb-lg-0'>
                  <img src='assets/img/team/7.webp' alt='img' />
                </div>
              </div>
              <div className='col-lg-7 align-self-center ps-xl-5'>
                <h3 className='mb-2'>Vision and Mission</h3>
                {/* <span className='designation'>Design Expert</span> */}
                <div className='details mt-4'>
                  {/* <h4>About Me</h4> */}
                  <p>
                  ClickOnes envisions a cashless economy for our country, aiming to establish its presence on the global fintech stage.{" "}
                  </p>
                  <p>
                  Our mission is to empower Pakistanis to take advantage of digital payments while advancing the digital payment landscape within the nation. We strive to support businesses by leveraging available opportunities and expanding their reach through a user-friendly, safe, secure, and reliable single payment gateway solution.
                  </p>
                </div>
                <ul className='social-media style-base mt-4 pt-2'>
                  <li>
                    <Link href="#">
                      <FaFacebookF aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaTwitter aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaInstagram aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaPinterest aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaLinkedinIn aria-hidden='true' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service area start */}
      {/* <div className='service-area bg-relative pd-bottom-90'>
        <div className='container'>
          <div className='section-title '>
            <h6 className='sub-title'>Service</h6>
            <h2 className='title'>My Service Here</h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/1.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link href='/service-details'>Mobile App Development</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' href='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/2.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link href='/service-details'>Content Marketing</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' href='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/3.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link href='/service-details'>E-commerce Solutions</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' href='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* ================= TeamDetailsGroup End =================*/}
    </>
  );
};

export default TeamDetailsGroup;
