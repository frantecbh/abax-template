import logo from '../assets/logo.png'
import imageSite from '../assets/imageSite.png'
export const SingIn = () => {
  return (
    <>
      <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className="relative h-screen z-10 flex flex-col flex-1 px-4 py-10 bg-zinc-300 shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center">
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <img src={logo} className="h-12" alt="logo site" />

                {/* <h2 className="text-4xl text-black">Ábax</h2> */}
                {/* <p className="mt-2 text-sm text-gray-500">
                Automatize seu processo de busca e registro de documentos fiscais, melhorando a produtividade e redução de custos
              </p> */}
              </div>
            </div>
            <form>
              {/* <input autoComplete="false" name="hidden" style="display: none" /> */}
              <input name="_redirect" type="hidden" value="#" />
              <div className="mt-4 space-y-6">
                <div>
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    name="name"
                  >
                    Nome do usuário
                  </label>
                  <input
                    className="block w-full px-6 py-3 text-black bg-transparent border-2 border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-[#11152b]  focus:outline-none focus:ring-[#11152b]  sm:text-sm"
                    placeholder="Informe seu Login"
                  />
                </div>
                <div>
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    name="password"
                  >
                    Senha
                  </label>
                  <input
                    type="password"
                    className="block w-full px-6 py-3 text-black bg-transparent border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-[#11152b]  focus:outline-none focus:ring-[#11152b]  sm:text-sm"
                    placeholder="Informe sua senha"
                  />
                </div>

                <div className="flex gap-2 w-full">
                  <div className="w-full">
                    <label
                      className="block mb-3 text-sm font-medium text-gray-600"
                      name="password"
                    >
                      Ambiente
                    </label>
                    <select className="block w-full px-6 py-3 text-black bg-transparent border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-[#11152b]  focus:outline-none focus:ring-[#11152b]  sm:text-sm">
                      <option selected>Selecione o ambiente</option>
                      <option>AMBIENTE 1</option>
                      <option>AMBIENTE 2</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label
                      className="block mb-3 text-sm font-medium text-gray-600"
                      name="password"
                    >
                      Módulo
                    </label>

                    <select className="block w-full px-6 py-3  bg-transparent border border-gray-200 appearance-none rounded-xl text-gray-400 focus:border-[#11152b]  focus:outline-none focus:ring-[#11152b]  sm:text-sm">
                      <option selected>Selecione o modulo</option>
                      <option>MODULO 1</option>
                      <option>MODULO 2</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <button
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white  bg-[#11152b] border-2 border-[#11152b] rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-[#11152b] focus:outline-none focus-visible:outline-[#11152b] text-sm focus-visible:ring-[#11152b] transition-all duration-300"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-end">
              <a
                className="block mt-2 text-sm font-medium text-gray-600 hover:text-[#11152b] "
                href=""
              >
                Esqueceu senha
              </a>
            </div>
          </div>

          <footer className="px-5 bottom-1 flex justify-end absolute left-0">
            <p className="text-xs text-zinc-500">Version: 1.53.11986</p>
          </footer>
        </div>
        <div className="hidden bg-[#11152b]  lg:block lg:flex-1 lg:relative sm:contents">
          <div
            className="absolute inset-0 object-cover w-full h-full bg-[#11152b]"
            alt=""
            height="1866"
            width="1664"
          >
            <div className="flex flex-col">
              <div className="flex justify-between px-20 pt-20">
                <img
                  src={logo}
                  className="h-12"
                  id="area-logo"
                  alt="logo site"
                />
                <div className="">
                  <h1 className="text-white text-5xl font-bold text-end">
                    Gestão Fiscal
                  </h1>
                  <div className="text-end">
                    <h1 className="mt-2 text-sky-700 text-lg">
                      IMBOUD DESCOMPLICADA
                    </h1>
                    <p className="text-gray-500 font-semibold">
                      de NF-e, CT-e e NFS-e
                    </p>
                    <p className="mt-2 text-sm text-gray-500 text-end">
                      Automatize seu processo de busca e registro de documentos{' '}
                      <br />
                      fiscais, melhorando a produtividade e redução de custos
                    </p>
                  </div>
                </div>
              </div>
              <img
                id="area-image"
                src={imageSite}
                className="object-contain h-[28rem] pb-10"
                alt=""
              />
            </div>

            {/* <img className="object-center w-full h-auto bg-gray-200" src="https://d33wubrfki0l68.cloudfront.net/64c901dbc4b16388ef27646a320ad9c1441594df/236fd/images/placeholders/rectangle2.svg" alt="" width="1310" height="873" /> */}
          </div>
        </div>
      </div>
    </>
  )
}
