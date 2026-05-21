export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">

          <h1 className="text-6xl md:text-8xl font-black tracking-widest">
            KEMURI HANATSU
          </h1>

          <p className="text-red-600 text-3xl md:text-5xl mt-4 font-bold tracking-[10px]">
            SMASH
          </p>

          <h2 className="mt-10 text-5xl md:text-7xl font-black text-yellow-400">
            GOURMET DARK DELIVERY
          </h2>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg md:text-2xl">
            Smash burgers premium, combos absurdos e entrega rápida.
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

      {/* CARDÁPIO */}
      <section className="py-24 px-6 bg-zinc-950">

        <h2 className="text-5xl font-black text-center mb-20">
          CARDÁPIO PREMIUM
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            {
              nome: "Dark Smash",
              preco: "R$ 29,90",
              cor: "from-red-700 to-black",
            },

            {
              nome: "Tokyo Burger",
              preco: "R$ 34,90",
              cor: "from-orange-500 to-black",
            },

            {
              nome: "Black Monster",
              preco: "R$ 39,90",
              cor: "from-yellow-500 to-black",
            },

            {
              nome: "Kemuri Duplo",
              preco: "R$ 42,90",
              cor: "from-purple-700 to-black",
            },

            {
              nome: "Combo Samurai",
              preco: "R$ 59,90",
              cor: "from-red-500 to-black",
            },

            {
              nome: "Monster Bacon",
              preco: "R$ 49,90",
              cor: "from-green-600 to-black",
            },

          ].map((item, index) => (

            <div
              key={index}
              className={`bg-gradient-to-b ${item.cor} p-10 rounded-3xl border border-zinc-800 hover:scale-105 transition-all`}
            >

              <div className="h-72 rounded-2xl bg-black/40 mb-8 flex items-center justify-center">

                <div className="text-6xl">
                  🍔
                </div>

              </div>

              <h3 className="text-3xl font-bold">
                {item.nome}
              </h3>

              <p className="mt-4 text-yellow-400 text-2xl font-bold">
                {item.preco}
              </p>

              <p className="mt-4 text-gray-300">
                Burger artesanal premium com sabor absurdo.
              </p>

              <a
                href="https://wa.me/554391326035"
                target="_blank"
                className="mt-8 w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-zinc-200 transition inline-block text-center"
              >
                PEDIR AGORA
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* DELIVERY */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
            <h3 className="text-3xl font-bold text-red-500">
              ENTREGA RÁPIDA
            </h3>

            <p className="mt-4 text-gray-300">
              Delivery ágil e eficiente.
            </p>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
            <h3 className="text-3xl font-bold text-yellow-400">
              COMBOS INSANOS
            </h3>

            <p className="mt-4 text-gray-300">
              Smash premium com sabor único.
            </p>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
            <h3 className="text-3xl font-bold text-green-500">
              DELIVERY ATÉ TARDE
            </h3>

            <p className="mt-4 text-gray-300">
              Peça a qualquer hora da noite.
            </p>
          </div>

        </div>

      </section>

      {/* RODAPÉ */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center">

        <h3 className="text-3xl font-bold">
          KEMURI HANATSU SMASH
        </h3>

        <p className="text-zinc-400 mt-4">
          Gourmet Dark Delivery.
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