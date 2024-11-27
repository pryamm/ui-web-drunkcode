import Card from "@/components/card.component";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function AboutUsGrid() {
  return (
    <Card className='flex flex-col items-center gap-4 p-8 bg-[#0A66C2] dark:bg-[#0A66C2] text-white'>
      {/* Logo Section */}
      <div className='relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full bg-white flex items-center justify-center'>
        <Image
          src={logo} // Ganti dengan path logo Anda
          alt='Tech Future Hub Logo'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Company Name */}
      <h2 className='text-2xl font-semibold text-center'>Tech Future Hub</h2>

      {/* Tagline */}
      <p className='text-sm italic text-center'>
        Empowering Developers of Tomorrow
      </p>

      {/* Description */}
      <p className='text-sm leading-relaxed text-center'>
        Tech Future Hub is dedicated to empowering the next generation of
        developers. We provide cutting-edge IT development courses that cater to
        all skill levels.
      </p>
    </Card>
  );
}
