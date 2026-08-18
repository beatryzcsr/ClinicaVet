import { useState } from 'react'
import furao from '../../public/furão1.png'

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    alert('Enviado')

    setForm({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    })
  }

  return (
    <>
      <section
        className="flex bg-cover bg-center fix  "
        style={{ backgroundImage: `url(${furao})` }}
      >
      <section className="min-h-[600px] px-5 py-10 md:px-20 p-10 mt-10">
        <div className="space-y-4 text-sm leading-8 text-[#333]">
        </div>

        <div className=" my-17 rounded-xl bg-emerald-100 p-8 shadow-sm">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-left text-xs w-20">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="h-7 rounded-md border bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />

            <label className="text-left text-xs">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="h-7 rounded-md border bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />
            <label className="text-left text-xs">Assunto</label>
            <input
              type="text"
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              required
              className="h-7 rounded-md border bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />

            <label className="text-left text-xs">Mensagem</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows="6"
              required
              className="resize-none rounded-lg border bg-white p-2 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            ></textarea>

            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-md border-0 bg-emerald-300 px-4 py-2 text-xs text-white transition duration-300 hover:bg-emerald-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      </section>

    </>
  )
}