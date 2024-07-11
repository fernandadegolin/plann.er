import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartEndDates: (dates: DateRange | undefined) => void;
  eventStartEndDates: DateRange | undefined;
}

export function DestinationDateStep(props: DestinationDateStepProps) {
  const {
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput,
    setDestination,
    setEventStartEndDates,
    eventStartEndDates,
  } = props;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartEndDates?.from && eventStartEndDates?.to
      ? `${format(eventStartEndDates.from, "d' de 'LLL")} até ${format(
          eventStartEndDates.to,
          "d' de 'LLL"
        )}`
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="placeholder-zinc-400 text-lg bg-transparent outline-none flex-1"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 w-[240px] "
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-zinc-400 text-lg text-left flex-1 w-40">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-lg font-semibold">Selecione a data</h2>
                <button>
                  <X
                    className="size-5 text-zinc-400"
                    onClick={closeDatePicker}
                  />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartEndDates}
              onSelect={setEventStartEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
