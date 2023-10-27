import Image from "next/image";
import { featuredApatments } from "@/data";
import Button from "../button/Button";
import bed from "public/icons/bed.png";
import shower from "public/icons/shower.png";
import size from "public/icons/size.png";
import Link from "next/link";

function HouseCard() {
  return (
    <section className="bg-surface1-light">
      <div className="container px-5 pt-10 text-center capitalize md:px-10">
        <div className="flex flex-col items-center justify-center md:mb-5 md:flex-row md:justify-between">
          <h2 className="text-xl font-extrabold">
            <span className="border-b border-brand-light">list{""}</span> of
            properties
          </h2>
          <Button className="mb-4 mt-4 rounded-sm">view all property</Button>
        </div>

        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredApatments.map((item) => (
            <li
              key={item.id}
              className="mb-4 rounded-[25px] border border-t-0 border-surface2-light bg-white hover:shadow-2xl"
            >
              <Image
                src={item.img}
                alt=""
                width={400}
                height={300}
                className="bg-cover object-cover"
              />

              <div className="text-start">
                <div className="p-4">
                  <p className="font-bold">{item.address}</p>
                  <span className="mt-2 inline-block text-lg text-surface2-light">
                    private room
                  </span>
                  <p className="text-brand-light">${item.price}/Month</p>
                </div>

                <div className="grid grid-cols-3 items-center justify-center border-t">
                  <div className="flex items-center justify-center border-r p-2 ">
                    <Image src={bed} alt="" />
                    <p className="ml-3">{item.options.bed}</p>
                  </div>

                  <div className="flex items-center justify-center border-r p-2">
                    <Image src={shower} alt="" />
                    <p className="ml-3">{item.options.shower}</p>
                  </div>

                  <div className="flex items-center justify-center p-2">
                    <Image src={size} alt="" />
                    <p className="ml-3">{item.options.size}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-5 rounded-md border border-surface2-light bg-white">
          <Link
            href="#"
            className="inline-block border-r border-surface2-light bg-surface1-light p-4"
          >
            First
          </Link>
          <Link
            href="#"
            className="inline-block border-r border-surface2-light p-4"
          >
            2
          </Link>
          <Link
            href="#"
            className="inline-block border-r border-surface2-light bg-brand-light p-4 text-white"
          >
            3
          </Link>
          <Link
            href="#"
            className="inline-block border-r border-surface2-light p-4"
          >
            4
          </Link>
          <Link href="#" className="inline-block border-r p-4">
            Next
          </Link>
        </button>
      </div>
    </section>
  );
}

export default HouseCard;
