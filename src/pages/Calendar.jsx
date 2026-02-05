import HeroBackground from '../components/HeroBackground';

// BGA Google Calendar (from your calendar link)
const CALENDAR_EMBED_SRC =
  'https://calendar.google.com/calendar/embed?src=cb86ca4cb73433ae4fc9a4c2c6d3f69a66a8de737ae62710946b37647f30a2aa%40group.calendar.google.com&ctz=America%2FNew_York';

export default function Calendar() {
  return (
    <main className="flex-1">
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[280px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold">
            Calendar
          </h1>
          <p className="text-xl text-gray-300 mt-2">Meetings, events, and deadlines</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white">
            <iframe
              title="BGA Calendar"
              src={CALENDAR_EMBED_SRC}
              style={{
                border: 0,
                width: '100%',
                height: '600px',
              }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
