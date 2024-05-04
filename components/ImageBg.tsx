import Image from "next/image";

function ImageBg() {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/images/bg.jpg"
        priority
        fill
        alt="background"
        className="object-cover	"
      />
    </div>
  );
}

export default ImageBg;
