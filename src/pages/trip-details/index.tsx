import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Clock,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400 " />
          <span className=" text-zinc-100">Mogi Guaçu, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400 " />
            <span className=" text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="text-base text-zinc-200 rounded-lg px-5 py-2 font-medium bg-zinc-800 flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5 text-zinc-200" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="text-base text-lime-950 rounded-lg px-5 py-2 font-medium bg-lime-300 flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="font-semibold text-zinc-300 text-xl">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className=" text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="font-semibold text-zinc-300 text-xl">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-baseline gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-sm text-zinc-400 ml-auto">8h00</span>
                </div>
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-baseline gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-sm text-zinc-400 ml-auto">8h00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl text-zinc-50">
              Links importantes
            </h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/104700011
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Regras da casa
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>
            </div>
            <button className="text-base text-zinc-200 rounded-lg px-5 h-11 font-medium bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-700 w-full">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <div className="space-y-6">
            <h2 className="font-semibold text-xl text-zinc-50">Convidados</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Fernanda Degolin
                  </span>
                  <span className="block text-sm text-zinc-400 truncate">
                    fernandadegolin@hotmail.com
                  </span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Jessica Crusco
                  </span>
                  <span className="block text-sm text-zinc-400 truncate">
                    jessicacrusco@yahoo.com
                  </span>
                </div>
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>
            </div>
            <button className="text-base text-zinc-200 rounded-lg px-5 h-11 font-medium bg-zinc-800 flex items-center justify-center gap-2 hover:bg-zinc-700 w-full">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-lg font-semibold">Cadastrar atividade</h2>
                <button>
                  <X
                    className="size-5 text-zinc-400"
                    onClick={closeCreateActivityModal}
                  />
                </button>
              </div>

              <p className="text-sm text-zinc-400 text-left">
                Todos convidados podem visualizar as atividades.
              </p>
            </div>

            <form className="space-y-3">
              <div className="px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
                <Tag className="size-5 text-zinc-400" />
                <input
                  name="title"
                  placeholder="Qual a atividade?"
                  className="placeholder-zinc-400 text-base bg-transparent outline-none flex-1"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14 flex-1">
                  <Clock className="size-5 text-zinc-400" />
                  <input
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Data e horário da atividade"
                    className="placeholder-zinc-400 text-base bg-transparent outline-none flex-1 [color-scheme:dark]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-base text-lime-950 rounded-lg h-11 font-medium bg-lime-300  gap-2 hover:bg-lime-400 w-full"
              >
                Salvar atividade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
