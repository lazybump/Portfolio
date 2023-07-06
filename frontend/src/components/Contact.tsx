import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

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
  const [isValid, setIsValid] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsValid(false);
    setHasError(false);
    setIsLoading(true);
    // Simulate an API call
    await new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        resolve(null); // Don't care about the fulfilled value
      }, 1000);
    });
    // Some validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsValid(false);
      setHasError(true);
      setTimeout(() => setHasError(false), 3000);
      return;
    }
    setHasError(false);
    setIsValid(true);
    // Send form data to backend
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
        Drop me an email, give me a call, or send me a message right here.
      </p>
      <ul className="space-y-8 md:col-start-1">
        <li className="flex space-x-6">
          <BsEnvelope className="text-gray-400" size={28} />
          <span className="text-white">contact@REDACTED.co.uk</span>
        </li>
        <li className="flex space-x-6">
          <BsTelephone className="text-gray-400" size={28} />
          <span className="text-white">REDACTED</span>
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
            <div className="relative">
              <div className="absolute inset-0 border-4 border-primary blur-sm"></div>
              <input
                id="name-input"
                className="border-2 border-primary bg-background w-full h-10 p-3 focus:outline-none relative rounded-md focus:bg-green-950 transition-colors duration-500"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
          </li>
          <li className="space-y-2">
            <label htmlFor="email-input" className="block">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-0 border-4 border-primary blur-sm"></div>
              <input
                type="email"
                id="email-input"
                className="border-2 border-primary bg-background w-full h-10 p-3 focus:outline-none relative rounded-md focus:bg-green-950 transition-colors duration-500"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
          </li>
          <li className="space-y-2">
            <label htmlFor="message-input" className="block">
              Message
            </label>
            <div className="relative">
              <div className="absolute inset-0 border-4 border-primary blur-sm"></div>
              <textarea
                name="message"
                id="message-input"
                className="border-2 border-primary bg-background w-full resize-none h-44 p-3 focus:outline-none relative rounded-md focus:bg-green-950 transition-colors duration-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </li>
        </ul>

        <div className="mt-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 border-4 border-primary blur-sm"></div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-20 h-9 border-2 border-primary bg-background px-3 py-1 rounded text-white hover:bg-green-900 duration-200 cursor-pointer relative ${
                isValid && "opacity-75 cursor-auto"
              }`}
            >
              {isLoading ? (
                <svg
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin mx-auto"
                >
                  <path
                    d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z"
                    fill="white"
                  />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Success popup */}
      {isValid && (
        <div className="bg-primary flex items-center fixed bottom-3 right-3 translate-y-full px-4 py-2 w-52 rounded-xl font-medium slide-in">
          <BsCheckCircle size={20} strokeWidth={0.3} />
          <p className="grow text-center">Message sent</p>
        </div>
      )}

      {/* Error popup */}
      {hasError && (
        <div className="bg-red-300 flex items-center fixed bottom-3 right-3 translate-y-full px-4 py-2 w-56 rounded-xl font-medium slide-in error">
          <BiErrorCircle size={20} strokeWidth={0.3} />
          <p className="grow text-center">Incomplete fields</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
