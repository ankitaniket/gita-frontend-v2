import Image from "next/image";
import QuotesBannerBG from "../../../public/quotes-bg.png";
export default function QuotesBanner() {
  return (
    <div className="max-w-full mx-auto xl:mx-24 z-10 relative">
      <Image
        src={QuotesBannerBG}
        alt="BG Quotes Banner Image"
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="xl:rounded-lg"
      />
      <div className="flex flex-col h-4/5 px-8 py-36">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold text-shadow text-white t-shadow z-20">
          Bhagavad Gita Quotes By <br /> Lord Krishna
        </h1>
      </div>
    </div>
  );
}
