"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-red-500 text-2xl md:text-3xl tracking-[12px] font-bold mb-4 uppercase">
            Smash Delivery
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold uppercase leading-none tracking-wide">
            Kemuri Hanatsu
          </h1>

          <h2 className="mt-6 text-yellow-400 text-3xl md:text-6xl font-black uppercase leading-tight">
            Gourmet Dark Delivery
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
            Smash burgers premium, combos absurdos e entrega rápida em
            <span className="text-red-400 font-semibold">
              {" "}
              Florestópolis e região
            </span>
            .
          </p>

          <p className="mt-2 text-sm md:text-base text-gray-400">
            CEP de atendimento: 86165-000
          </p>

          {/* BOTÃO */}
          <div className="mt-10">
            <a
              href="https://wa.me/5543999999999?text=Olá,%20quero%20fazer%20um%20pedido!"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-400 transition-all duration-300 px-10 py-5 rounded-2xl text-xl md:text-2xl font-bold shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105"
            >
              PEDIR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-black uppercase text-yellow-400 mb-16">
            Cardápio
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ITEM */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition">
              <h3 className="text-3xl font-bold mb-4">Classic Smash</h3>
              <p className="text-gray-400 mb-6">
                Pão brioche, smash burger 120g, cheddar e molho especial.
              </p>
              <span className="text-3xl font-black text-yellow-400">
                R$ 24,90
              </span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition">
              <h3 className="text-3xl font-bold mb-4">Double Bacon</h3>
              <p className="text-gray-400 mb-6">
                Dois smash burgers, cheddar duplo e bacon crocante.
              </p>
              <span className="text-3xl font-black text-yellow-400">
                R$ 34,90
              </span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition">
              <h3 className="text-3xl font-bold mb-4">Monster Combo</h3>
              <p className="text-gray-400 mb-6">
                Burger + fritas + refrigerante gelado.
              </p>
              <span className="text-3xl font-black text-yellow-400">
                R$ 44,90
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-black border-t border-zinc-800 py-10 text-center">
        <h3 className="text-2xl font-bold uppercase">
          Kemuri Hanatsu Smash
        </h3>

        <p className="text-gray-400 mt-3">
          Delivery em Florestópolis e região • CEP 86165-000
        </p>

        <p className="text-gray-500 mt-2 text-sm">
          Atendimento rápido via WhatsApp
        </p>
      </footer>
    </main>
  );
}