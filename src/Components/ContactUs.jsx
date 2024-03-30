import React from "react";

const ContactUs = () => {
  return (
    <div className="h-full px-4 py-8 bg-white">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold">CONTACT US</h2>
        <p className="mb-8">Feel free to contact us</p>
        <div className="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <div>
            <h3 className="text-xl font-semibold">ADDRESS</h3>
            <p>FAST NUCES islamabad,</p>
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
    </div>
  );
};

export default ContactUs;
