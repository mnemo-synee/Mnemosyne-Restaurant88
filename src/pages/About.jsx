function About() {
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-green-900">
            About Us
          </h1>
          <div className="space-y-4">
          <p>
            Welcome to our restaurant, a place where delicious food, quality service, and a warm atmosphere come together to create a wonderful dining experience. Our restaurant was created with the goal of bringing people together through great food and a comfortable environment where everyone feels welcome.
          </p>
          <p>
            We believe that good food starts with fresh and high-quality ingredients. That is why we carefully prepare every dish with attention to taste, presentation, and quality. Our menu offers a variety of meals that are made to satisfy different tastes, whether you are looking for a quick meal, a relaxing dinner, or a special celebration with family and friends.
          </p>
          <p>
            Our team is dedicated to providing friendly and excellent service to every costumer who walks through our doors. We work hard to make sure that every guest feels valued and enjoys their in our restaurant. From the moment you arrive until the moment you leave, we want you to feel comfortable and satisfied with both our food ad our service.
          </p>
          <p>
            The atmosphere of our restaurant is designed to be welcoming, relaxing, and enjoyable for everyone. Whether you are dining alone, spending time with loved ones, or celebrating a special occasion, our restaurant is the perfect place to create memorable moments.
          </p>
          <p>
            Our mission is simple: to serve delicious food, provide great service, and create a dining experience that keeps our costumers coming back. We are proud to be a place where people can gather, enjoy good meals, and share happy moments together.
          </p>
        </div>
      </div>
    </section>
    <section className="pb-12">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <img
          src="/img/background.jpg"
          alt="Mnemosyne's Restaurant Banner"
          className="block w-full h-auto"
        />
      </div>
    </section>
  </>
  );
}
export default About;