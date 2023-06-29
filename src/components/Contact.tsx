import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="py-16 grid md:grid-cols-2">
      <h2 className="mb-6 text-white text-4xl">Get in touch</h2>
      <p className="mb-12 text-gray-400 md:col-start-1 max-w-[300px]">
        Drop me a line, give me a call, or send me a message by submitting the
        form.
      </p>
      <ul className="space-y-8 md:col-start-1">
        <li className="flex space-x-6">
          <BsEnvelope className="text-gray-400" size={28} />
          <span className="text-white">myEmail@outlook.com</span>
        </li>
        <li className="flex space-x-6">
          <BsTelephone className="text-gray-400" size={28} />
          <span className="text-white">+44 myNumber</span>
        </li>
      </ul>

      <form
        action=""
        className="mt-16 md:mt-auto md:col-start-2 md:row-start-1 md:row-span-4"
      >
        <ul className="space-y-5">
          <li className="space-y-2">
            <label htmlFor="name-input" className="block text-white">
              Name
            </label>
            <input
              id="name-input"
              className="text-gray-400 border-2 border-primary bg-inherit w-full h-10 p-3 focus:outline-none"
            />
          </li>
          <li className="space-y-2">
            <label htmlFor="email-input" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email-input"
              className=" text-gray-400 border-2 border-primary bg-inherit w-full h-10 p-3 focus:outline-none"
            />
          </li>
          <li className="space-y-2">
            <label htmlFor="message-input" className="block text-white">
              Message
            </label>
            <textarea
              name="message-input"
              id="message-input"
              className="border-2 border-primary text-gray-400 bg-inherit w-full resize-none h-44 p-3 focus:outline-none"
            ></textarea>
          </li>
        </ul>
        <input
          type="submit"
          className="bg-white px-2 py-1 rounded mt-6"
        ></input>
      </form>
    </section>
  );
};

export default Contact;
