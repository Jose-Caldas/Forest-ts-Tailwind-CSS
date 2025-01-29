export default function Contacts() {
  return (
    <section
      id="contato"
      className="container my-12 sm:my-16 lg:my-20 grid lg:grid-cols-2 gap-8"
    >
      <div>
        <h1 className="font-serif text-4xl text-verde-300 mb-4">
          Nossos Contatos
        </h1>
        <p className="text-gray-200 text-balance mb-8">
          Tem interesse em passar uma temporada na Forest? Entre em contato com
          a gente por telefone ou email.
        </p>
        <div className="grid gap-4">
          <div>
            <span className="h-0.5 w-6 neon inline-block"></span>
            <h2 className="font-serif text-verde-300 text-2xl mb-2">Base</h2>
            <p className="text-gray-300">
              Rua da Mata, 123 - Floresta Nacional - RJ
            </p>
          </div>
          <div>
            <span className="h-0.5 w-6 neon inline-block"></span>
            <h2 className="font-serif text-verde-300 text-2xl mb-2">Email</h2>
            <p className="text-gray-300">contato@forest.com</p>
          </div>
          <div>
            <span className="h-0.5 w-6 neon inline-block"></span>
            <h2 className="font-serif text-verde-300 text-2xl mb-2">Base</h2>
            <p className="text-gray-300">21 99999-9999</p>
          </div>
        </div>
      </div>

      <form
        action=""
        className="grid gap-4 rounded-xl bg-verde-900 shadow-2xl p-4 lg:p-8"
      >
        <div className="grid gap-1">
          <label className="text-white" htmlFor="nome">
            Nome
          </label>
          <input type="text" id="nome" name="nome" className="input" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" className="input" />
          </div>
          <div className="grid gap-1">
            <label className="text-white" htmlFor="telefone">
              Telefone
            </label>
            <input
              type="telefone"
              id="text"
              name="telefone"
              className="input"
              placeholder="(21) 00000-0000"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label className="text-white" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            className="input resize-none"
          ></textarea>
        </div>

        <button className="place-self-start btn">Enviar Email</button>
      </form>
    </section>
  )
}
