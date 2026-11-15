import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 border-b border-[#dce6e3]/80 bg-[#fbfaf6]/90 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-center sm:h-24">
        <Image
          src="/logo.png"
          alt="LEARNINGEVERGROW"
          width={2730}
          height={728}
          priority
          className="h-auto w-[250px] sm:w-[320px]"
          sizes="(max-width: 640px) 250px, 320px"
        />
      </div>
    </header>
  );
}
