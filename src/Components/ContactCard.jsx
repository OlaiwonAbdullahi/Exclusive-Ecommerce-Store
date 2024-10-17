import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm";

const ContactCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around gap-6 p-4">
      {/* Contact Info */}
      <div className="basis-1/3 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 rounded-md shadow-md p-4 w-full lg:w-2/3 bg-white">
          {/* Call Us Section */}
          <div className="flex items-center font-medium gap-3">
            <FaPhoneSquareAlt className="rounded-full text-secondary2 h-6 w-6" />
            <span>Call Us</span>
          </div>
          <div className="flex flex-col gap-1 text-gray-600">
            <span>We are available 24/7, 7 days a week.</span>
            <span>Phone: +8801611112222</span>
          </div>

          <hr className="border-t border-gray-200" />

          {/* Write to Us Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-medium">
              <CiMail className="h-7 w-7 bg-secondary2 text-white rounded-full p-1" />
              <span>Write to us</span>
            </div>
            <div className="text-gray-600 flex flex-col">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <span>Emails: customer@exclusive.com</span>
              <span>Support: support@exclusive.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-2/3 bg-white p-4 rounded-md shadow-md justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactCard;
