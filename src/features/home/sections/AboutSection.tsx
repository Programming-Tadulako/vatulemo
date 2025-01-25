import Image from "next/image";
import { GALLERY_IMAGES } from "../constants";

export default function AboutSection() {
  return (
    <section id="about" className="m-8 space-y-8 md:mx-16 lg:mx-32 lg:my-14">
      <h1 className="text-3xl font-bold text-pt-primary lg:text-4xl">
        About <span className="underline">Programming Tadulako</span>
      </h1>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4 text-justify">
          <p>
            <strong>Programming Tadulako</strong> pertama kali diinisiasi pada tahun 2012 dengan nama awal{" "}
            <strong>Web Programming Tadulako</strong>, sebuah komunitas yang berfokus pada pengembangan pengetahuan di
            bidang teknologi web atau web programming. Komunitas ini didirikan dengan tujuan utama untuk memberikan
            wadah bagi Mahasiswa Universitas Tadulako dalam mempelajari dan mengasah keterampilan terkait pengembangan
            web.
          </p>
          <p>
            Seiring berjalannya waktu dan pergantian kepengurusan, nama komunitas diubah menjadi{" "}
            <strong>Programming Tadulako</strong>. Perubahan ini bertujuan untuk memperluas cakupan pembelajaran yang
            ditawarkan, tidak hanya terbatas pada pengembangan web, tetapi juga mencakup berbagai aspek teknologi
            pemrograman lainnya.
          </p>
        </div>
        <Image
          src="/assets/images/about/pt.png"
          alt="Logo Programming Tadulako"
          width={688}
          height={275}
          className="size-full rounded-md object-contain"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-3">
        {GALLERY_IMAGES.map(({ id, src, dimensions: { height, width } }) => (
          <Image
            key={id}
            src={src}
            alt={`Gallery Image ${id}`}
            height={height}
            width={width}
            className="h-auto w-full rounded-md object-cover"
          />
        ))}
      </div>
    </section>
  );
}
