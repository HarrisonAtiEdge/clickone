import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            {/* <h6 className='sub-title'>OUR SIMPLE PROCESS</h6> */}
            <h2 className='title'>
            Smart Billing <span>Benefits</span> 
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                {/* <div className='thumb mb-3'>
                  <img src='assets/img/icon/9.svg' alt='img' />
                </div> */}
                <div className='details'>
                  <p className='process-count'>01</p>
                  <h5 className='mb-3'>Effortless Invoicing</h5>
                  <p className='content'>
                  Easily generate and send invoices through the ClickOnes, cutting down on manual work and increasing operational productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                {/* <div className='thumb mb-3'>
                  <img src='assets/img/icon/10.svg' alt='img' />
                </div> */}
                <div className='details'>
                  <p className='process-count'> 02</p>
                  <h5 className='mb-3'> Recurring Payments</h5>
                  <p className='content'>
                  Streamline subscription billing with automated payments, reducing missed transactions and improving customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                {/* <div className='thumb mb-3'>
                  <img src='assets/img/icon/11.svg' alt='img' />
                </div> */}
                <div className='details'>
                  <p className='process-count'> 03</p>
                  <h5 className='mb-3'>Insightful Analytics</h5>
                  <p className='content'>
                  Access real-time metrics like churn rates and customer lifetime value, supporting smarter business strategies and planning.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                {/* <div className='thumb mb-3'>
                  <img src='assets/img/icon/12.svg' alt='img' />
                </div> */}
                <div className='details'>
                  <p className='process-count'> 04</p>
                  <h5 className='mb-3'>Customizable Billing </h5>
                  <p className='content'>
                  Provide customers with flexible billing options—weekly, monthly, or yearly—to align with their needs and drive loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
