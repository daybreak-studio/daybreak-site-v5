import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-white mx-2">
      <ProjectGrid />
      <section className="mt-48 mb-20 grid grid-cols-8 gap-2">
        <h2 className="font-brand-xl mb-6 col-start-5 col-span-4">
          A digital studio rooted in experimentation.
        </h2>
        <p className="font-brand-md mb-6 opacity-50 col-start-5 col-span-4">
          Daybreak combines technical fluency, holistic strategy and visual
          execution with a precision that creates change at scale for ambitious
          companies.
        </p>
        <Link href={""} className="font-cond-xs col-start-5 opacity-50 mb-28">
          About Us
        </Link>

        <Image
          className="row-start-4 col-span-2 object-cover w-full"
          src={"/landing/landing-3.png"}
          alt={""}
          width={422}
          height={446}
        />
        <Image
          className="row-start-4 col-start-5 col-span-4 object-cover w-full"
          src={"/landing/landing-4.png"}
          alt={""}
          width={422}
          height={446}
        />
      </section>

      <section className="mt-40 mb-20 grid grid-cols-8 gap-2">
        <h2 className="font-brand-lg col-start-5 col-span-2 mb-4">
          We&apos;re a collective of dreamers, storytellers, and artists
          empowered by technology.
        </h2>
        <Link href={""} className="font-cond-xs col-start-5 opacity-50 mb-40">
          Meet the team
        </Link>

        <Image
          className="row-start-3 col-span-2 object-cover w-full h-full"
          src={"/landing/landing-3.png"}
          alt={""}
          width={422}
          height={446}
        />
        <Image
          className="row-start-3 col-span-2 object-cover w-full h-full"
          src={"/landing/landing-4.png"}
          alt={""}
          width={422}
          height={446}
        />
        <Image
          className="row-start-3 col-span-4 object-cover w-full h-full"
          src={"/landing/landing-5.png"}
          alt={""}
          width={852}
          height={446}
        />
      </section>

      <section className="grid grid-cols-8 mb-48 mt-48">
        <div className="font-sans-sm col-start-4 col-span-2 opacity-50 mb-6">
          Shahed Khan, Co-founder of Loom
        </div>
        <blockquote className="col-start-4 col-span-4 mb-8 font-brand-xl -indent-7">
          &quot;Working with Daybreak is like having a cheat code&quot;
        </blockquote>
        <Link
          href={""}
          className="font-cond-xs col-start-4 col-span-2 opacity-50 mb-12"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
