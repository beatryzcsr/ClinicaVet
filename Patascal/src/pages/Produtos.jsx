import img from '/public/araras.png'
import { SiAnimalplanet } from "react-icons/si";
import { AiFillMedicineBox } from "react-icons/ai";

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

const vets = [
{
  name: 'Dr. Gabriel Almeida',
  specialty: 'Medicina de Animais Exóticos',
  city: 'Campinas - SP',
  phone: '(19) 98765-4321',
  email: 'gabriel.almeida@vetexoticos.com',
  experience: '8 anos de experiência no atendimento de aves, répteis e pequenos mamíferos.',
  availability: 'Segunda a sexta, das 08:00 às 18:00',
  image: img
},

{
  name: 'Dra. Mariana Oliveira',
  specialty: 'Medicina de Aves',
  city: 'São Paulo - SP',
  phone: '(11) 97654-3210',
  email: 'mariana.oliveira@vetexoticos.com',
  experience: '6 anos de experiência em atendimento clínico e preventivo de aves ornamentais.',
  availability: 'Segunda, quarta e sexta, das 09:00 às 17:00',
  image: img
},

{
  name: 'Dr. Lucas Ferreira',
  specialty: 'Medicina de Répteis',
  city: 'Jundiaí - SP',
  phone: '(11) 96543-2109',
  email: 'lucas.ferreira@vetexoticos.com',
  experience: '10 anos de experiência com répteis, incluindo tartarugas, lagartos e serpentes.',
  availability: 'Terça a sábado, das 10:00 às 19:00',
  image: img
},

{
  name: 'Dra. Beatriz Santos',
  specialty: 'Medicina de Pequenos Mamíferos',
  city: 'Campinas - SP',
  phone: '(19) 99876-5432',
  email: 'beatriz.santos@vetexoticos.com',
  experience: '7 anos de experiência no atendimento de coelhos, hamsters, porquinhos-da-índia e outros pequenos mamíferos.',
  availability: 'Segunda a sexta, das 08:00 às 16:00',
  image: img
},

{
  name: 'Dr. Rafael Martins',
  specialty: 'Clínica de Animais Silvestres',
  city: 'Sorocaba - SP',
  phone: '(15) 98765-4320',
  email: 'rafael.martins@vetexoticos.com',
  experience: '12 anos de experiência em clínica veterinária e cuidados de animais silvestres e exóticos.',
  availability: 'Segunda a quinta, das 09:00 às 18:00',
  image: img
},

{
  name: 'Dra. Carolina Mendes',
  specialty: 'Dermatologia Veterinária',
  city: 'São Paulo - SP',
  phone: '(11) 95432-1098',
  email: 'carolina.mendes@vetexoticos.com',
  experience: '5 anos de experiência em diagnóstico e tratamento de problemas dermatológicos em animais exóticos.',
  availability: 'Terça a sexta, das 08:00 às 17:00',
  image: img
},

{
  name: 'Dr. Felipe Rodrigues',
  specialty: 'Medicina de Animais Silvestres',
  city: 'Campinas - SP',
  phone: '(19) 97654-1098',
  email: 'felipe.rodrigues@vetexoticos.com',
  experience: '9 anos de experiência com atendimento clínico e acompanhamento de animais silvestres.',
  availability: 'Segunda a sexta, das 10:00 às 19:00',
  image: img
},

{
  name: 'Dra. Ana Clara Souza',
  specialty: 'Medicina de Répteis e Anfíbios',
  city: 'Ribeirão Preto - SP',
  phone: '(16) 96543-8765',
  email: 'ana.souza@vetexoticos.com',
  experience: '8 anos de experiência em cuidados clínicos, nutricionais e preventivos de répteis e anfíbios.',
  availability: 'Quarta a domingo, das 09:00 às 18:00',
  image: img
}
]

function Products() {
  return (
    <section id="products" className="bg-emerald-100 py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 mt-30">Nossos sabores</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-500 sm:text-4xl">
            Escolhas que encantam desde a primeira mordida.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {vets.map((vet) => (
            <article key={vet.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm">
              <img src={vet.image} alt={vet.name} className="h-100 w-full object-cover" />
              <div className="p-6">
                <SiAnimalplanet size={40} className=" flex mb-3 text-amber-600" />
                <p className="text-sm font-semibold text-amber-700">{vet.specialty}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{vet.name}</h3>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{vet.city}</p>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{vet.phone}</p>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{vet.email}</p>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{vet.experience}</p>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{vet.availability}</p>
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
                <AiFillMedicineBox size={40} className=" flex mb-3 text-amber-600" />
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