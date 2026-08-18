import img from '/public/araras.png'
import { SiAnimalplanet } from "react-icons/si";

const products = [
  {
    name: '',
    description: 'Cookie macio de red velvet com gotas de chocolate branco.',
    tag: 'Mais pedido',
    image: img
  },
  {
    name: 'Oreo',
    description: 'Cookie crocante com pedaços de Oreo e chocolate branco.',
    tag: 'Nova receita',
    image: img
  },
  {
    name: 'Nutella',
    description: 'Cookie macio recheado com Nutella e cobertura cremosa.',
    tag: 'Especial',
    image: img
  },
  {
    name: 'Morango',
    description: 'Cookie macio de morango com gotas de chocolate branco.',
    tag: 'Mais pedido',
    image: img
  },
  {
    name: 'Maracujá',
    description: 'Cookie amanteigado com recheio cremoso de maracujá.',
    tag: 'Especial',
    image: img
  },
  {
    name: 'M&M',
    description: 'Cookie macio com chocolate e deliciosos M&M coloridos.',
    tag: 'Especial',
    image: img
  }
]

function Products() {
  return (
    <section id="products" className="bg-amber-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Nossos sabores</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Escolhas que encantam desde a primeira mordida.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <SiAnimalplanet size={40} className=" flex mb-3 text-amber-600" />
                <p className="text-sm font-semibold text-amber-700">{product.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{product.description}</p>
                <button className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">Peça aqui</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <SiAnimalplanet size={40} className=" flex mb-3 text-amber-600" />
                <p className="text-sm font-semibold text-amber-700">{product.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{product.description}</p>
                <button className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">Peça aqui</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products