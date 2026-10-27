import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted: ", formData);

    alert("Thank you for contacting Mnemosyne's Restaurant!");

    setFormData({
      name:"",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-green-900">
            Contact Us
          </h1>
          <div className="text-center mb-8 space-y-2">
            <p>
              <strong>Address:</strong> Brgy Tiguma, Pagadian City, Philippine
            </p>
            <p>
              <strong>Phone:</strong> (+63) 909-6903-197
            </p>
            <p>
              <strong>Email:</strong>info@Mnemosyne.ph
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-[600] mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Message:
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Enter your email"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>
            <button type="submit" className="bg-green-700 p-2 text-green border border-gray-300 rounded-md hover:bg-blue-900 transmition-color duration-300">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;