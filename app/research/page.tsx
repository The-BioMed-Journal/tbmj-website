const EVENT = {
  title: "Photosynthesis Lab: Conducting Experiments & Writing Research Reports",
  description: "Explore photosynthesis through hands-on experiments and interactive simulations in this two-day workshop. Students will work in teams to design an investigation, analyze their results, and write a scientific research report.",
  details: [
    { label: "Date", value: "December 5–6" },
    { label: "Time", value: "4:00 pm–6:00 pm" },
    { label: "Age group", value: "6th–8th graders" },
    { label: "Entrance fee", value: "$25" },
    { label: "Location", value: "Irvington Community Center, 41885 Blacow Road, Fremont, CA 94538" },
    { label: "Capacity", value: "30 students" },
  ],
  proposalUrl: "https://docs.google.com/document/d/1Oaj1u-Ms82GbBTpsoL0nzJ464vnRsdCbXJ2nKSQPGBE/edit?usp=sharing",
};

export default function ResearchPage() {
  return (
    <main className="mx-auto px-6 py-16 max-w-5xl w-full">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-[var(--dark-green)] mb-16">
        Research
      </h1>

      <section aria-labelledby="current-events-heading" className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <h2 id="current-events-heading" className="text-4xl font-bold text-[var(--dark-green)]">Current Events</h2>
          <span className="h-1 flex-1 bg-[var(--light-green)] opacity-30 rounded-full" />
        </div>
        <div className="space-y-16 mb-6">
            <div className="text-lg text-[var(--dark-green)] leading-relaxed">
              <h3 className="text-3xl font-bold mb-4">{EVENT.title}</h3>
              <p className="opacity-90">{EVENT.description}</p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  {EVENT.details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="font-semibold">{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6">
                  <a href={EVENT.proposalUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--light-green)] font-semibold">
                    View the workshop agenda (opens in a new tab)
                  </a>
                </p>
            </div>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeNKDWGCbSw1xdrFceMuvBTFHhr3hYAqU5gwzZabtXbgtf5KQ/viewform?embedded=true"
          title="Photosynthesis Lab registration form"
          className="w-full h-[80vh] min-h-[600px] rounded-2xl border border-[var(--light-green)]/30"
        />
        <p className="mt-6 text-[var(--dark-green)]">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeNKDWGCbSw1xdrFceMuvBTFHhr3hYAqU5gwzZabtXbgtf5KQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--light-green)] font-semibold"
          >
            Open the registration form in a new tab
          </a>
        </p>
      </section>

    </main>
  );
}
