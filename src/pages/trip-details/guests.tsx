import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
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
  );
}
