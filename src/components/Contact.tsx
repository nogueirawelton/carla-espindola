import { ArrowRight, CircleNotch } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://lab.nogueirawelton.com.br/send-mail/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer bd708905cd2acd2c17e86821b8488c1f5a9d3c01eb6599bdcf42d7c6bfb09a74",
          },
          body: JSON.stringify({
            subject: "Novo Contato!",
            referent: "Contato Site",
            recipient: {
              name: "Weltin",
              email: "welton.nogueira.dev@gmail.com",
            },
            data,
          }),
        },
      );

      if (!response.ok) {
        throw new Error();
      }

      form.reset();
      toast.success("Contato enviado com sucesso!");
    } catch (err) {
      toast.error("Houve um erro ao enviar o formulário!");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function onPhoneInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setPhone(
      value
        ? value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2")
        : "",
    );
  }

  return (
    <section id="contato" className="bg-beige-500 py-12">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <h2 className="text-center font-jomolhari text-3xl text-green-500 lg:text-4xl">
          Contato
        </h2>

        <p className="desc mx-auto mt-4 max-w-2xl text-center text-green-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultricies ut neque vitae pharetra. In a lorem fringilla, porttitor
          tellus ut, iaculis nisi.
        </p>

        <form className="mx-auto mt-8 max-w-screen-xl" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-3">
            <input
              placeholder="Nome"
              type="text"
              name="nome"
              required
              className="h-12 rounded-sm px-4 shadow-sm placeholder:uppercase"
            />
            <input
              placeholder="Telefone"
              type="tel"
              name="telefone"
              inputMode="numeric"
              required
              className="h-12 rounded-sm px-4 shadow-sm placeholder:uppercase"
              value={phone}
              onChange={onPhoneInputChange}
              maxLength={15}
              pattern="^\(\d{2}\) \d{4,5}-\d{4}$"
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
              className="h-12 rounded-sm px-4 shadow-sm placeholder:uppercase"
            />
          </div>

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            className="mt-4 h-36 w-full resize-none rounded-sm p-4 shadow-sm placeholder:uppercase"
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className="ml-auto mt-4 grid h-12 w-[130px] place-items-center gap-2 rounded-sm bg-green-500 px-4 uppercase text-beige-500 shadow-sm disabled:cursor-not-allowed disabled:opacity-90"
          >
            {isLoading ? (
              <CircleNotch className="h-8 w-8 animate-spin" />
            ) : (
              <span className="flex items-center gap-4">
                Enviar
                <ArrowRight className="h-6 w-6" />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
