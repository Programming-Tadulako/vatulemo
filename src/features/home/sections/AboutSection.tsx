import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mx-32 my-14 space-y-8">
      <h1 className="text-4xl font-bold">
        About <span className="underline">Programming Tadulako</span>
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex-1 space-y-4 text-justify">
          <p>
            Programming Tadulako pertama kali diinisiasi pada tahun 2012 dengan nama awal Web Programming Tadulako,
            sebuah komunitas yang berfokus pada pengembangan pengetahuan di bidang teknologi web atau web programming.
            Komunitas ini didirikan dengan tujuan utama untuk memberikan wadah bagi mahasiswa dalam mempelajari dan
            mengasah keterampilan terkait pengembangan web.
          </p>
          <p>
            Seiring berjalannya waktu dan pergantian kepengurusan, nama Web Programming Tadulako diubah menjadi
            Programming Tadulako. Perubahan ini bertujuan untuk memperluas cakupan pembelajaran yang ditawarkan, tidak
            hanya terbatas pada pengembangan web, tetapi juga mencakup berbagai aspek teknologi pemrograman lainnya.
          </p>
          <p>
            Komunitas ini memiliki visi untuk menciptakan ekosistem teknologi yang lebih unggul dan relevan dengan
            kebutuhan dunia kerja. Dengan pendekatan ini, Programming Tadulako berkomitmen untuk membekali mahasiswa
            Universitas Tadulako dengan keterampilan yang dapat meningkatkan daya saing mereka di pasar kerja, sekaligus
            mendukung perkembangan teknologi di tingkat lokal maupun nasional.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/assets/images/about/pt.png"
            alt="Logo Programming Tadulako"
            height={299}
            width={442}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-3">
        <Image
          src="/assets/images/about/1.png"
          alt="dokumentasi"
          height={300}
          width={400}
          className="h-auto w-full rounded-md object-cover"
        />
        <Image
          src="/assets/images/about/2.png"
          alt="dokumentasi"
          height={300}
          width={400}
          className="h-auto w-full rounded-md object-cover"
        />
        <Image
          src="/assets/images/about/3.png"
          alt="dokumentasi"
          height={300}
          width={400}
          className="h-auto w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
}
