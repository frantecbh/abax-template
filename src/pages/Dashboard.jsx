import logo from '../assets/logo.png'
import { TableNfe } from '../components/TableNfe'

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

      <TableNfe />

      {/* <Footer /> */}
    </div>
  )
}
