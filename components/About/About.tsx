import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-8"
    >
      <div className="mx-auto max-w-7xl w-full">

        <SectionTitle
  number="01"
  badge="Who Am I"
  title="About Me"
  description="Passionate Full Stack Developer and AI enthusiast who loves building modern web experiences."
/>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
         <div className="relative w-[350px] h-[450px] rounded-3xl overflow-hidden
                border border-purple-500/30
                bg-zinc-900
                shadow-[0_0_40px_rgba(145,94,255,0.25)]
                hover:scale-105
                transition-all
                duration-500">

  <Image
    src="/images/tota.jpeg"
    alt="Mariam Nabil"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
          {/* Right */}
          <div>

          
            <span className="text-purple-400 uppercase tracking-[6px]">
            About Me
              </span>
            

           <h3 className="text-5xl font-bold leading-tight">
               Full Stack Developer
                <br />
                 & AI Engineer
                 </h3>

            <p className="mt-6 text-zinc-400 leading-8 text-lg">
               Passionate about building modern web applications with Next.js,
             TypeScript and Artificial Intelligence. I enjoy turning ideas into
             elegant digital experiences.
               </p>

          </div>

        </div>

      </div>
    </section>
  );
}