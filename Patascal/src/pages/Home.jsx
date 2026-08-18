import { infoh } from '../products/HomeCard';

export default function Home() {
  return (
    <section className="min-h-screen">
      <div
        className="flex min-h-screen items-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gato.png')" }}
      >
        <div className="mb-16 ml-2 md:mb-24 md:ml-8">
          <p className="text-lg text-[#ffffff] md:text-xl">
            Clinica veterinária de animais exóticos
          </p>
          <h1
            className="font-bold text-5xl text-[#ffffff] md:text-6xl justify-center items-center flex"
            style={{ fontFamily: '"Bodoni Moda SC", serif' }}
          >
            PATASCAL
          </h1>
        </div>
      </div>

      <div className="mx-auto px-4 py-16 bg-[#27a69b] md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {infoh.map(({ icon: Icon, content }) => (
            <div key={content} className="rounded-2xl bg-[white] p-6 shadow-md justify-center items-center flex flex-col gap-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-[#0f756a]">
                <Icon size={22} />
              </div>
              <p className="text-sm leading-relaxed text-slate-700">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}