import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tpzu8k8",
        "template_acj02ys",
        form.current,
        "mToXDvgWHhk84GmXh"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message. Please try again later.");
        }
      );
  };
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center ">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14389.653711382498!2d105.48816621955355!3d-5.547478163889696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e411de43077b311%3A0xb68170d68c9da7b8!2sSMKN%201%20Katibung%20Lampung%20Selatan!5e0!3m2!1sid!2sid!4v1707918056369!5m2!1sid!2sid"
              className="border-0 w-full h-full "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form action="" className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>
              {/* <div className="mb-5">
                <input
                  type="submit"
                  name="message"
                  placeholder="Subjet"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div> */}
              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  rows={3}
                  placeholder="write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
