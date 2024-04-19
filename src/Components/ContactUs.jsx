import React from "react";
import SponsorForm from "./SponsorForm";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full px-4 py-8 bg-black md:items-start">
        <div className="mx-auto text-white md:text-center max-w-7xl">
          <h2 className="mb-4 text-3xl font-extrabold text-golden-500">
            Feel free to contact us!
          </h2>
          <div className="flex flex-col space-y-4 md:justify-center md:flex-row md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-xl font-semibold text-golden-500">ADDRESS</h3>
              <p>FAST NUCES Islamabad,</p>
              <p>AK Brohi Road, H11</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-golden-500">
                PHONE NUMBER
              </h3>
              <p>+92 333 XXXXXXX</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-golden-500">EMAIL</h3>
              <p>fqss@nu.edu.pk</p>
            </div>
          </div>
        </div>
        {/* SponsorForm component with a white background */}
        <div className="flex max-h-screen py-8 mx-auto mt-8 md:mt-0 md:max-w-xl">
          <SponsorForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
