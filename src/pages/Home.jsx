function Home() {
  const testimonials = [
    {
      message: "Astang pagka lamia sa mga sud-an nila Baron. Naa pay staff na pang daddy M kaayo og atake. Rawr!",
      name: "Lyka Fernandez",
    },

    {
      message: "It's me, mama coco. Pag mokitkit ko sa karne, dili jud ko mabalaka sa akong marpel. Humok pa sa bantoc na pan.",
      name: "Mama Coco",
    },

    {
      message: "Grabe! Damgo-damgohon jud ko sa sud-an nila didto. Naa pay hot empanada nila na kasing hot niya. HEHEHE.",
      name: "Michelle Gozum",
    },

    {
      message: "Unta mapadayon pa sa mga staff ilang pagka gentlemen! Bahalag wala ko gi- gentle niya...:(",
      name: "Reanna",
    },
  ]
  return (
    <>
      <section className="relative py-20 overflow-hidden text-center text-white md:py-24">
        <div
          className="absolute inset-0 scale-105 bg-fixed bg-center bg-cover blur-md"
          style={{ backgroundImage: "url(./img/background.jpg)"}}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-4 text-4x1 font-bold md:text-5xl">
            Welcome to Mnemosyne Restaurant
          </h1>
          <p className="text-lg md:text-x1">
            Experience the best cuisine in the City. Enjoy our signature dishes and cozy ambiance.
          </p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-green-900">
            Customer Testimonials
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-4 bg-white border-l-4 border-green-900 shadow-sm"
              >
                <p className="italic">"{testimonial.message}"</p>
                <span className="block mt-2 font-bold text-right text-gray-600">
                  - {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;