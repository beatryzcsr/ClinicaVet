import { useState } from 'react'

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
        className="flex min-h-screen items-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/contatos.jpg')" }}
      >
        <h1 className="ml-2 text-5xl text-[#e6d8a8] md:text-6xl">Contatos</h1>
      </section>

      <section className="min-h-[600px] bg-[#e6d8a8] px-5 py-10 md:px-20">
        <div className="space-y-4 text-sm leading-8 text-[#333]">
          <p>patascal@gmail.com</p>
          <p>(19) 99999-9999</p>
          <p>Assunto</p>
          <span>Nos sua mensagem por aqui</span>
        </div>

        <div className="mx-auto my-14 w-full max-w-[420px] rounded-xl bg-[#efe5c6] p-8 shadow-sm">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-xs">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="h-7 rounded-md border border-[#ff7a7a] bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#efb1b1]"
            />

            <label className="text-xs">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="h-7 rounded-md border border-[#ff7a7a] bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#efb1b1]"
            />
              <label className="text-xs">Assunto</label>
            <input
              type="text"
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              required
              className="h-7 rounded-md border border-[#ff7a7a] bg-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#efb1b1]"
            />

            <label className="text-xs">Mensagem</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows="6"
              required
              className="resize-none rounded-lg border border-[#ff7a7a] bg-white p-2 focus:outline-none focus:ring-2 focus:ring-[#efb1b1]"
            ></textarea>

            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-md border-0 bg-[#efb1b1] px-4 py-2 text-xs text-white transition duration-300 hover:bg-[#e89a9a]"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
