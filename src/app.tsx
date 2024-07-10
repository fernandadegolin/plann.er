import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logo Planner" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                className="placeholder-zinc-400 text-lg bg-transparent outline-none flex-1"
                disabled={isGuestInputOpen}
              />
            </div>

            <div className="flex items-center gap-2 ">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="placeholder-zinc-400 text-lg bg-transparent outline-none w-40"
                disabled={isGuestInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                onClick={closeGuestInput}
                className="text-base text-zinc-200 rounded-lg px-5 py-2 font-medium bg-zinc-800 flex items-center gap-2 hover:bg-zinc-7 00"
              >
                Alterar local/data
                <Settings2 className="size-5 text-zinc-200" />
              </button>
            ) : (
              <button
                onClick={openGuestInput}
                className="text-base text-lime-950 rounded-lg px-5 py-2 font-medium bg-lime-300 flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1 ">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Quem estará na viagem?"
                  className="placeholder-zinc-400 text-lg bg-transparent outline-none flex-1"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="text-base text-lime-950 rounded-lg px-5 py-2 font-medium bg-lime-300 flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade.
          </a>
        </p>
      </div>
    </div>
  );
}