import React from "react";
import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="container mx-auto h-[90vh] flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-medium bg-gradient-to-r from-[#aacee0] to-[#b2eded] rounded-2xl uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Coming soon
        </p>
        <p className="text-6xl font-bold">
          Get Notified <br /> When we Launch
        </p>
        <p className="text-base">
          &quot;Don&apos;t Worry we will not spam you.&quot;
        </p>
      </div>
      <Image
        src={"/assets/comingsoon.png"}
        width={700}
        height={300}
        alt="coming soon"
      />
    </div>
  );
};

export default ComingSoon;
