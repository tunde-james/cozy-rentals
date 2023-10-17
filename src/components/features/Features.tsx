import Image from "next/image";
import poolSide from "/public/images/poolside.webp";
import currency from "/public/icons/money.png";
import house from "/public/icons/house.png";
import stack from "/public/icons/stack.png";
import plant from "/public/icons/plant.png";
import shield from "/public/icons/shield.png";
import eye from "/public/icons/eye.png";

const features = [
  { id: 1, icon: currency, title: "pay as little as possible" },
  { id: 2, icon: house, title: "enjoy wisdom of community" },
  {
    id: 3,
    icon: stack,
    title: "let somebody else take care of landlord",
  },
  { id: 4, icon: plant, title: "enjoy peaceful environment" },
  { id: 5, icon: shield, title: "stay safe! save money!" },
  { id: 6, icon: eye, title: "pay for what you use!" },
];

function Features() {
  return (
    <section className="mt-14">
      <h2 className="mb-6 text-center text-2xl font-extrabold capitalize md:ms-9 md:text-start md:text-5xl">
        <span className="border-b-2 border-brand-light">
          Minimum living cost
        </span>{" "}
        takes care of everything
      </h2>

      <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center">
        <Image
          src={poolSide}
          alt="A pool"
          sizes="100vw"
          className="object-contain"
        />

        <ul className="grid grid-cols-2 gap-5 p-3 sm:w-[807px] sm:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.id} className="">
              <div className="flex h-[77px] w-[77px] items-center justify-center gap-4 rounded-md bg-white shadow-md md:h-[55px] md:w-[55px]">
                <Image src={feature.icon} alt="" className="" />
              </div>
              <p className="text-xl font-semibold md:text-2xl">
                {feature.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
