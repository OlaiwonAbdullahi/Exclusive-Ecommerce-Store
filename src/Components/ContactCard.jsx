import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm";
const ContactCard = () => {
  return (
    <div className=" flex flex-row">
      <div className="basis-1/3">
        <div className=" flex  flex-col gap-2 border border-text1 rounded-md shadow-md p-2 w-2/3  ">
          <div className=" flex font-medium gap-2 items-center">
            <FaPhoneSquareAlt className=" rounded-full text-secondary2 h-6 w-6 " />
            <span>Call Us</span>
          </div>
          <div className=" flex flex-col gap-2">
            <span>We are available 24/7, 7 days a week.</span>
            <span>Phone: +8801611112222</span>
          </div>
          <hr className=" border-t border-t-text1" />
          <div className=" flex flex-col gap-2">
            <div className=" flex flex-row gap-2 items-center font-medium">
              <CiMail className=" h-7 w-7 bg-secondary2 text-text rounded-full p-1" />
              <span>Write to us</span>
            </div>
            <div className=" flex flex-col gap-1">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: support@exclusive.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" basis-2/3 gap-2 border border-text1 rounded-md shadow-md p-2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactCard;
