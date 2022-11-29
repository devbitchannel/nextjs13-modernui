import Link from "next/link";
import { asideData, cardData } from "../data/homePageData";

export default function Page() {
  return (
    <section className="grid grid-cols-12 gap-8 desktop:w-full">
      <div className="col-span-12 flex flex-col gap-8 desktop:col-span-8">
        <img src="images/image-web-3-desktop.jpg" alt="web-3-desktop" />
        <div className="flex justify-between">
          <h2 className="max-w-xs text-6xl font-extrabold">
            The Bright Future of Web 3.0?
          </h2>
          <div className="flex max-w-sm flex-col items-start justify-between pl-10">
            <p className="text-paragraph text-dark-grayish-blue ">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="max-w-fit bg-soft-red py-3 px-6 text-sm font-normal tracking-[0.3em] text-white transition-colors hover:bg-very-dark-blue">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <aside className="col-span-120 w-full bg-very-dark-blue p-8  desktop:col-span-4">
        <h3 className="text-4xl font-bold text-soft-orange">New</h3>
        {asideData.map((data) => (
          <div className="border-b-[1px] border-b-grayish-blue py-8 last-of-type:border-b-0 last-of-type:py-0 last-of-type:pt-8">
            <Link
              href="/"
              className=" text-xl font-bold text-white transition-colors hover:text-soft-orange"
            >
              {data.title}
            </Link>
            <p className="mt-2 text-paragraph text-grayish-blue">
              {data.description}
            </p>
          </div>
        ))}
      </aside>
      <div className="col-span-12 mt-8 flex gap-16">
        {cardData.map((card, index) => (
          <div key={card.id} className="flex gap-6">
            <div className="relative">
              <img
                className="max-h-full"
                src={card.imageSrc}
                alt="image-retro-pcs"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-4xl font-bold text-grayish-blue ">
                0{index + 1}
              </h4>
              <p className="cursor-pointer text-lg font-extrabold text-very-dark-blue transition-colors hover:text-soft-red">
                {card.title}
              </p>
              <p className="text-sm text-dark-grayish-blue">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
