import { useRef, useState } from "react";
import axios from "axios";
//import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "dotenv/config"

const Contact = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post("/api/signup", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      });

      // if (response.status === 200) {
      //   const templateParams = {
      //     to_email: process.env.EMAIL,
      //     from_name: nameRef.current?.value,
      //     from_email: emailRef.current?.value,
      //     message: messageRef.current?.value,
      //   };

        // const emailResponse = await emailjs.send(
        //   process.env.SERVICE_ID as string,
        //   process.env.TEMPLATE as string,
        //   templateParams,
        //   process.env.emailjsUser as string
        // );

        if (response.status === 200) {
          setIsLoading(false);
          toast.success(response.data.message);

         
        } else {
          setIsLoading(false);
          toast.error(response.data.message);
        }
      // } else {
      //   setIsLoading(false);
      //   toast.error(response.data.message);
      // }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast.error(
        `An error occurred! Try filling the form properly or I have the message already`
      );
    }
  };

  return (
    <section id="contact" className="relative">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            // frameBorder={0}
            // marginHeight={0}
            // marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src= "https://www.google.com/maps/embed/v1/place?q=Ikorodu,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                13 Savior Street. <br />
                Adamo, Ikorodu, Lagos 100001
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-yellow-600 leading-relaxed">
                kingsleyibe66@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+234 703 927 0533</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Engage me
          </h2>
          <p className="leading-relaxed mb-5">
            I&apos;m actively seeking collaborative ventures and open to
            exciting opportunities.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ref={nameRef}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ref={emailRef}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ref={messageRef}
            />
          </div>
          <button
            type="submit"
            className={`text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover-bg-green-400 rounded text-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
