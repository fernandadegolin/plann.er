import { Clock, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}
export function CreateActivityModal(props: CreateActivityModalProps) {
  const { closeCreateActivityModal } = props;

  return (
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

          <Button size="full">Salvar atividade</Button>
        </form>
      </div>
    </div>
  );
}
