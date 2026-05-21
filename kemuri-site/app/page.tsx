export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10">

          <h1 className="text-7xl md:text-9xl font-black tracking-widest">
            KEMURI
          </h1>

          <p className="text-red-600 text-2xl md:text-4xl mt-4 tracking-[10px]">
            HANATSU LOUNGE
          </p>

          <h2 className="mt-10 text-5xl md:text-7xl font-black text-red-500">
            SÓ TEM POD.
          </h2>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg md:text-2xl">
            Pods premium, sabores intensos e experiência única.
          </p>

          <a
            href="https://wa.me/554391326035"
            target="_blank"
            className="mt-10 bg-green-500 hover:bg-green-600 transition-all px-10 py-5 rounded-2xl text-2xl font-bold shadow-green-500/50 shadow-lg inline-block"
          >
            PEDIR NO WHATSAPP
          </a>

        </div>
      </section>

      {/* PRODUTOS */}
      <section className="py-24 px-6 bg-zinc-950">

        <h2 className="text-5xl font-black text-center mb-20">
          PODS PREMIUM
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            {
              nome: "Ignite V150",
              cor: "from-red-600 to-black",
            },

            {
              nome: "Elfbar Sakura",
              cor: "from-pink-500 to-black",
            },

            {
              nome: "Nikbar Ice",
              cor: "from-blue-500 to-black",
            },

            {
              nome: "Oxbar Mint",
              cor: "from-green-500 to-black",
            },

            {
              nome: "Lost Mary",
              cor: "from-purple-500 to-black",
            },

            {
              nome: "Zomo Tropical",
              cor: "from-yellow-500 to-black",
            },

          ].map((item, index) => (

            <div
              key={index}
              className={`bg-gradient-to-b ${item.cor} p-10 rounded-3xl border border-zinc-800 hover:scale-105 transition-all`}
            >

              <div className="h-72 rounded-2xl bg-black/40 mb-8 flex items-center justify-center">

                <div className="w-28 h-52 rounded-3xl bg-black border border-white/20 shadow-2xl"></div>

              </div>

              <h3 className="text-3xl font-bold">
                {item.nome}
              </h3>

              <p className="mt-4 text-gray-300">
                Experiência intensa e premium.
              </p>

              <a
                href="https://wa.me/5544999999999"
                target="_blank"
                className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-zinc-200 transition inline-block text-center"
              >
                PEDIR AGORA
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* RODAPÉ */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center">

        <h3 className="text-3xl font-bold">
          KEMURI HANATSU LOUNGE
        </h3>

        <p className="text-zinc-400 mt-4">
          Só tem POD.
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://instagram.com/kemuri.hanatsu.lounge"
            target="_blank"
            className="text-red-500 hover:text-red-400"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/554391326035"
            target="_blank"
            className="text-green-500 hover:text-green-400"
          >
            WhatsApp
          </a>

        </div>

      </footer>

    </main>
  );
}