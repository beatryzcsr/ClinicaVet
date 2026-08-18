export default function Home() {
  return (
    <section className="min-h-screen">
      <div
        className="flex min-h-screen items-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/gato.png')" }}
      >
        <div className="mb-16 ml-2 md:mb-24 md:ml-8">
          <p className="text-lg text-[#000000] md:text-xl">
            Clinica veterinária de animais exóticos
          </p>
          <h1 className="text-5xl text-[#000000] md:text-6xl">Patascal</h1>
        </div>
      </div>
    </section>
  );
}