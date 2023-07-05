import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

interface FormType {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData) return;
    fetch("https://api.REDACTED.co.uk/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-16 lg:py-28 grid md:grid-cols-2" id="Contact">
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
        onSubmit={handleSubmit}
        className="mt-16 md:mt-auto md:col-start-2 md:row-start-1 md:row-span-4 text-white"
      >
        <ul className="space-y-5">
          <li className="space-y-2">
            <label htmlFor="name-input" className="block">
              Name
            </label>
            <input
              id="name-input"
              className="border-2 border-primary bg-inherit w-full h-10 p-3 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </li>
          <li className="space-y-2">
            <label htmlFor="email-input" className="block">
              Email
            </label>
            <input
              type="email"
              id="email-input"
              className="border-2 border-primary bg-inherit w-full h-10 p-3 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </li>
          <li className="space-y-2">
            <label htmlFor="message-input" className="block">
              Message
            </label>
            <textarea
              name="message"
              id="message-input"
              className="border-2 border-primary bg-inherit w-full resize-none h-44 p-3 focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </li>
        </ul>
        <input
          type="submit"
          className="bg-white px-2 py-1 rounded mt-6 text-black cursor-pointer"
        ></input>
      </form>
    </section>
  );
};

export default Contact;
