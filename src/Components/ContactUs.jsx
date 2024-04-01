import React from "react";
import SponsorForm from "./SponsorForm";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full px-4 py-8 bg-black md:items-start">
        <div className="mx-auto text-center text-white max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold">CONTACT US</h2>
          <p className="mb-8">Feel free to contact us</p>
          <div className="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-xl font-semibold">ADDRESS</h3>
              <p>FAST NUCES Islamabad,</p>
              <p>AK Brohi Road, H11</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">PHONE NUMBER</h3>
              <p>+92 333 XXXXXXX</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">EMAIL</h3>
              <p>fqss@nu.edu.pk</p>
            </div>
          </div>
        </div>
        {/* SponsorForm component with a white background */}
        <div className="flex w-2/3 p-8 mt-8 bg-white md:mt-0 md:max-w-xl">
          <SponsorForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
