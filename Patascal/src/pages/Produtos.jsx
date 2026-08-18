import img from '/public/Ana.png'
import img2 from '/public/Rafael.png'
import img3 from '/public/Carolina.png'
import img4 from '/public/Beatriz.png'
import img5 from '/public/Felipe.png'
import img6 from '/public/Gabriel.png'
import img7 from '/public/Lucas.png'
import img8 from '/public/Mariana.png'
import img10 from '/public/verde1.png'
import img11 from '/public/verde2.png'
import img12 from '/public/verde3.png'
import img13 from '/public/verde4.png'
import img14 from '/public/verde5.png'
import img15 from '/public/verde6.png'
import img16 from '/public/verde7.png'
import img17 from '/public/verde8.png'
import img18 from '/public/verde9.png'
import img19 from '/public/verde10.png'
import { SiAnimalplanet } from "react-icons/si";
import { AiFillMedicineBox } from "react-icons/ai";

const products = [
  {
  name: 'Suplemento de Cálcio para Répteis',
  description: 'Suplemento mineral para auxiliar na saúde óssea e no desenvolvimento de répteis.',
  tag: 'Répteis',
  image: img10
},

{
  name: 'Vitamina para Aves Exóticas',
  description: 'Suplemento vitamínico para auxiliar na alimentação e saúde de aves exóticas.',
  tag: 'Aves',
  image: img11
},

{
  name: 'Probiótico para Pequenos Mamíferos',
  description: 'Suplemento para auxiliar no equilíbrio intestinal de pequenos mamíferos.',
  tag: 'Mamíferos',
  image: img12
},

{
  name: 'Suplemento de Vitamina D3',
  description: 'Suplemento para auxiliar na absorção de cálcio e saúde óssea dos animais.',
  tag: 'Suplementos',
  image: img13
},

{
  name: 'Higienizador para Gaiolas',
  description: 'Produto para auxiliar na limpeza e higienização de gaiolas e ambientes.',
  tag: 'Higiene',
  image: img14
},

{
  name: 'Multivitamínico para Roedores',
  description: 'Suplemento nutricional para auxiliar na alimentação e saúde dos roedores.',
  tag: 'Roedores',
  image: img15
},

{
  name: 'Suplemento Mineral para Quelônios',
  description: 'Suplemento mineral para auxiliar na saúde óssea e formação adequada do casco.',
  tag: 'Quelônios',
  image: img16
},

{
  name: 'Pomada Cicatrizante Veterinária',
  description: 'Produto veterinário para auxiliar nos cuidados da pele dos animais exóticos.',
  tag: 'Cuidados',
  image: img17
},

{
  name: 'Suplemento para Répteis Herbívoros',
  description: 'Suplemento nutricional para complementar a alimentação de répteis herbívoros.',
  tag: 'Répteis',
  image: img18
},
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
  image: img6
},

{
  name: 'Dra. Mariana Oliveira',
  specialty: 'Medicina de Aves',
  city: 'São Paulo - SP',
  phone: '(11) 97654-3210',
  email: 'mariana.oliveira@vetexoticos.com',
  experience: '6 anos de experiência em atendimento clínico e preventivo de aves ornamentais.',
  availability: 'Segunda, quarta e sexta, das 09:00 às 17:00',
  image: img8
},

{
  name: 'Dr. Lucas Ferreira',
  specialty: 'Medicina de Répteis',
  city: 'Jundiaí - SP',
  phone: '(11) 96543-2109',
  email: 'lucas.ferreira@vetexoticos.com',
  experience: '10 anos de experiência com répteis, incluindo tartarugas, lagartos e serpentes.',
  availability: 'Terça a sábado, das 10:00 às 19:00',
  image: img7
},

{
  name: 'Dra. Beatriz Santos',
  specialty: 'Medicina de Pequenos Mamíferos',
  city: 'Campinas - SP',
  phone: '(19) 99876-5432',
  email: 'beatriz.santos@vetexoticos.com',
  experience: '7 anos de experiência no atendimento de coelhos, hamsters, porquinhos-da-índia e outros pequenos mamíferos.',
  availability: 'Segunda a sexta, das 08:00 às 16:00',
  image: img4
},

{
  name: 'Dr. Rafael Martins',
  specialty: 'Clínica de Animais Silvestres',
  city: 'Sorocaba - SP',
  phone: '(15) 98765-4320',
  email: 'rafael.martins@vetexoticos.com',
  experience: '12 anos de experiência em clínica veterinária e cuidados de animais silvestres e exóticos.',
  availability: 'Segunda a quinta, das 09:00 às 18:00',
  image: img2
},

{
  name: 'Dra. Carolina Mendes',
  specialty: 'Dermatologia Veterinária',
  city: 'São Paulo - SP',
  phone: '(11) 95432-1098',
  email: 'carolina.mendes@vetexoticos.com',
  experience: '5 anos de experiência em diagnóstico e tratamento de problemas dermatológicos em animais exóticos.',
  availability: 'Terça a sexta, das 08:00 às 17:00',
  image: img3
},

{
  name: 'Dr. Felipe Rodrigues',
  specialty: 'Medicina de Animais Silvestres',
  city: 'Campinas - SP',
  phone: '(19) 97654-1098',
  email: 'felipe.rodrigues@vetexoticos.com',
  experience: '9 anos de experiência com atendimento clínico e acompanhamento de animais silvestres.',
  availability: 'Segunda a sexta, das 10:00 às 19:00',
  image: img5
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
    <section id="products" className="bg-white py-20 ">

    <div className="py-20 bg-emerald-100 m-20 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 ">Veterinários</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-500 sm:text-4xl">
            Nossos profissionais especialisados para os cuidados de seu filhote
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {vets.map((vet) => (
            <article key={vet.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <img src={vet.image} alt={vet.name} className="h-100 w-full object-cover" />
              <div className="p-6">
                <SiAnimalplanet size={40} className=" flex mb-3 text-emerald-900" />
                <p className="text-sm font-semibold text-emerald-700">{vet.specialty}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{vet.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Cidade: {vet.city}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Telefone: {vet.phone}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Email: {vet.email}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Experiência: {vet.experience}</p>
                <p className="mt-2  text-sm leading-7 text-slate-600">Disponível: {vet.availability}</p>
              </div>
            </article>
          ))}
        </div>
    </div>
    </div>

    <div className="py-20 bg-emerald-100 m-20 rounded-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Remédios</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-500 sm:text-4xl">
            Nossos rémedios para os cuidados e melhoras dos seus animais  
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <AiFillMedicineBox size={40} className=" flex mb-3 text-emerald-900" />
                <p className="text-sm font-semibold text-emerald-700">{product.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{product.description}</p>
                <button className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">Peça aqui</button>
              </div>
            </article>
        
          ))}
          </div>
          </div>
        </div>
    </section>
  )
}

export default Products