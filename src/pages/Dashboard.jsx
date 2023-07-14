import logo from '../assets/logo.png'
import { Footer } from '../components/footer'

const Notas = [
  {
    id: '00001',
    status: [{ fornecedor: 'complet' }, { sefaz: 'complet' }],
    emissao: '01/01/0001',
    emitente: 'teste emitente',
    destinatário: 'teste destinatario',
  },
]

export const Dashboard = () => {
  return (
    <div className="mx-auto px-4 flex flex-col">
      <div className="bg-[#11152b] shadow-md w-full px-4 py-6 rounded-md mt-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img src={logo} className="h-12 mb-3" alt="logo site" />
              <p className="text-zinc-400">
                Notas Fiscais Eletrônicas de Mercadoria
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-2 p-1 bg-zinc-400 text-white rounded-md active:bg-zinc-500 hover:bg-zinc-500">
                NFe
              </button>
              <button className="px-2 p-1 bg-zinc-400 text-white rounded-md hover:bg-zinc-500">
                NFSe
              </button>
              <button className="px-2 p-1 bg-zinc-400 text-white rounded-md hover:bg-zinc-500">
                CTE
              </button>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="font-semibold text-base text-zinc-300">Admin</p>
              <p className="text-base font-thin text-zinc-300">
                Ambiente teste
              </p>
            </div>
            <div className="bg-green-600 h-14 w-14 rounded-full text-white flex items-center justify-center font-bold hover:bg-green-500">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-3 justify-between items-start">
        <div className="flex gap-3">
          <button className="bg-sky-950 text-zinc-100 font-semibold py-2 px-4 rounded-md hover:bg-sky-900 ">
            {' '}
            Exportar .xls
          </button>
          <button className="bg-sky-950 text-zinc-100 font-semibold py-2 px-4 rounded-md hover:bg-sky-900">
            {' '}
            Download .pdf
          </button>
          <button className="bg-sky-950 text-zinc-100 font-semibold py-2 px-4 rounded-md hover:bg-sky-900">
            {' '}
            Download .NFE
          </button>
          <button className="bg-sky-950 text-zinc-100 font-semibold py-2 px-4 rounded-md hover:bg-sky-900">
            {' '}
            Reimportar Notas
          </button>
        </div>
        <div className="flex justify-end items-end flex-col">
          <p className="font-semibold text-zinc-500 text-sm">
            0 Notas localizadas de 01/07/2023 até 30/07/2023
          </p>

          <div>
            <button className="bg-sky-950 text-zinc-100 font-semibold py-2 px-4 rounded-md hover:bg-sky-900">
              {' '}
              Filtros
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-2 py-3">
                ID
              </th>
              <th scope="col" className="px-2 py-3">
                Fornecedor
              </th>
              <th scope="col" className="px-2 py-3">
                SEFAZ
              </th>
              <th scope="col" className="px-2 py-3">
                CFOP
              </th>
              <th scope="col" className="px-2 py-3">
                OCP
              </th>
              <th scope="col" className="px-2 py-3">
                IF
              </th>
              <th scope="col" className="px-2 py-3">
                NCM
              </th>
              <th scope="col" className="px-2 py-3">
                CF
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
              <th scope="col" className="px-2 py-3">
                EMISSÃO
              </th>
              <th scope="col" className="px-2 py-3">
                EMITENTE
              </th>
              <th scope="col" className="px-2 py-3">
                DESTINATÁRIO
              </th>
              <th scope="col" className="px-2 py-3">
                VALOR
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                0001
              </th>
              <td className="px-2 py-4">Silver</td>
              <td className="px-2 py-4">Laptop</td>
              <td className="px-2 py-4">$2999</td>
              <td className="px-2 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  )
}
