import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationDateStep(props: DestinationDateStepProps) {
  const { isGuestsInputOpen, closeGuestsInput, openGuestsInput } = props;
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="placeholder-zinc-400 text-lg bg-transparent outline-none flex-1"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="flex items-center gap-2 ">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          className="placeholder-zinc-400 text-lg bg-transparent outline-none w-40"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="text-base text-zinc-200 rounded-lg px-5 py-2 font-medium bg-zinc-800 flex items-center gap-2 hover:bg-zinc-7 00"
        >
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="text-base text-lime-950 rounded-lg px-5 py-2 font-medium bg-lime-300 flex items-center gap-2 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </button>
      )}
    </div>
  );
}
