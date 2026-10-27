const menuSections = [
  {
    title:"Appetizers",
    items: [
      {
        name: "Lumpia",
        price: 120,
        image: "/img/lumpia.png",
        description:
          "Fried spring rolls with vegetables and sometimes meat or shrimp.",
      },
      {
        name: "Pancit Canton/Special Bihon",
        price: 195,
        image: "/img/bihon.png",
        description:
          "Egg noodles or glass noodles stir fried with mixed vegetables, shrimps and meats.",
      },
      {
        name: "Chicken Siomai",
        price: 195,
        image: "/img/chicken shrimp.png",
        description:
          "Steamed dumplings filled with chicken and vegetables.",
      },
      {
        name: "Cheese Sticks",
        price: 195,
        image: "/img/cheese sticks.png",
        description:
          "Deep-fried cheese wrapped in spring roll wrappers.",
      },
      {
        name: "Chicken Sisig",
        price: 195,
        image: "/img/sisig.png",
        description:
          "Chooped chicken served on a sizzling plate, a popular Appetizer often made with halal certified chicken.",
      },
      {
        name: "Fish Balls",
        price: 195,
        image: "/img/fish ball.png",
        description:
          "Chooped chicken served on a sizzling plate, a popular Appetizer often made with halal certified chicken.",
      },
    ],
  },
  {
    title:"Main Courses",
    items: [
      {
        name: "Adobo",
        price: 250,
        image: "/img/adobo.png",
        description:
          "Meat or seafood cooked in vinegar, soy sauce, garlic and bay leaves.",
      },
    ],
  },
   {
    title:"Desserts",
    items: [
      {
        name: "Halo-Halo",
        price: 150,
        image: "/img/halo-halo.png",
        description:
          "The ultimate, mixed-in-a cup dessert with shaved ice, evaporated milk, and toppings like sweetened beans, jellies, ube ice cream, and leche flan.",
      },
      {
        name: "Leche-Flan",
        price: 250,
        image: "/img/leche-flan.png",
        description:
          "A rich, velvety egg yolk custard with a caramel syrup topping, ussually served in a llanera.",
      },
      {
        name: "Buko Pandan",
        price: 250,
        image: "/img/buko pandan.png",
        description:
          "A refreshing dessert made with young coconut strips, pandan-flavored gelatin, and cream.",
      },
      
      
    ],
  },
];
function Menu() {
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-green-900">
            Our Menu
          </h1>
          {menuSections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="pb-2 mb-5 text-2xl font-bold text-green-900 border-b-2 border-green-900">
                {section.title}
              </h2>
              <ul className="List-none spaye-y-4 list-none">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col p-4 bg-pink rounded-lg shadow-md md:flex-row"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w--full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-md mb:4 md:mb-0 md:mr-4 flex-shrink-0"
                    />
                    <div className="flex-1 w-full">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-bold">{item.name}</span>
                        <span className="font-semibold text-green-900 whitespace-nowrap">
                          PHP {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-700">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>  
      </section>
    </>
  );
}
export default Menu;