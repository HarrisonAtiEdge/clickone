import React from "react";

const ContactAreaTwo = () => {
  return (
    <>
      {/* ========================= contact Area Two start =========================*/}
      <div className='contact-area' style={{paddingTop: '10rem'}}>
        <div className='container'>
          <div className='contact-inner-1'>
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src='assets/img/bg/9.webp' alt='img' />
              </div>
              <div
                className='col-lg-4 '
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  {/* <h6 className='sub-title'>GET IN TOUCH</h6> */}
                  <h2 className='title'>FAQs on Integrating the Payment Platform</h2>
                  {/* <p className='content'>
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p> */}
                  <div
                    className='accordion accordion-inner style-3 accordion-icon-left mt-3'
                    id='accordionExample'
                  >
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingOne'>
                        <button
                          className='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          What payment methods does ClickOnes support?
                        </button>
                      </h2>
                      <div
                        id='collapseOne'
                        className='accordion-collapse collapse show'
                        aria-labelledby='headingOne'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                        ClickOnes's internet payment gateway offers an extensive range of payment options, including credit and debit cards, online banking (internet and mobile), digital wallets, and over-the-counter payments.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingTwo'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseTwo'
                          aria-expanded='false'
                          aria-controls='collapseTwo'
                        >
                          What are the charges for using the payment gateway?
                        </button>
                      </h2>
                      <div
                        id='collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                        Charges depend on your business volume and other factors, with different rates for local and international payments. For a detailed breakdown, please visit our pricing page or contact our support team at 0336-3457387.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingThree'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                        >
                        Can I sign up as an individual?                        </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                        No, a business or merchant bank account is required to register as a PayPro merchant. However, you can sign up as a sole proprietor to work with us. We recommend opening an account with Bank Al Falah. Click here to sign up.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingThree'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                        >
                       How can my customers request a refund?                      </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                        To apply for a refund, customers should contact the e-store or online business where the transaction was made. PayPro processes refunds only upon the merchant’s approval. For further assistance, feel free to reach out to our support team at 0336-3457387.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingThree'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                        >
                       How long does it take to process a refund?                      </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                        Refunds typically take between 16 to 21 business days to process.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*========================= contact-inner Two end =========================*/}
    </>
  );
};

export default ContactAreaTwo;
