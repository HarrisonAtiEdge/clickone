import React from "react";

const WorkProcessTwo = () => {
  return (
    <>
      {/*==================== Work Process Two start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            {/* <h6 className='sub-title'>OUR SIMPLE PROCESS</h6> */}
            <h2 className='title'>
            Enterprise Features of the <span>Payment</span> Gateway
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/9.svg' alt='img' /> */}
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 01</p> */}
                  <h5 className='mb-3'>Saved Payment Options </h5>
                  <p className='content'>
                  Store payment methods for future use, requiring only CVV and OTP for each subsequent transaction.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 02</p> */}
                  <h5 className='mb-3'>Recurring Payments</h5>
                  <p className='content'>
                  Expand Your Customer Base Globally by Enabling International Payment Options for Seamless Transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/11.svg' alt='img' /> */}
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 03</p> */}
                  <h5 className='mb-3'>Pre-Authorization</h5>
                  <p className='content'>
                  Manage permissions to allow or block funds based on specified conditions for modified or canceled orders.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/12.svg' alt='img' /> */}
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 04</p> */}
                  <h5 className='mb-3'>High Success Rate</h5>
                  <p className='content'>
                  Benefit from dynamic routing across multiple bank payment gateways, ensuring the highest success rate for your transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process Two end ====================*/}
    </>
  );
};

export default WorkProcessTwo;
