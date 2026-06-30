import Image from "next/image";

const EVENTS_DATA = [
  {
    id: "ms-summer-camp",
    title: "Middle School Summer Camp",
    description: "Join us this summer for an immersive science camp geared towards middle schoolers. Through engaging activities and guided lessons, we spark early interest in STEM and lay the groundwork for future scientific curiosity.",
    status: "upcoming",
    signupsOpen: true,
    airtableEmbedUrl: "https://airtable.com/embed/YOUR_FORM_ID_HERE?backgroundColor=green",
    imageSrc: "",
    imagePlaceholder: "[ Middle School Camp Image Placeholder ]"
  },
  {
    id: "ms-bootcamp",
    title: "Middle School Experimental Biology Bootcamp",
    description: "Currently, we are working on our online bootcamp. Our organization will be providing science kits, along with online live sessions to make topics easier to follow along.",
    status: "current",
    signupsOpen: false,
    airtableEmbedUrl: "",
    imageSrc: "",
    imagePlaceholder: "[ Bootcamp Image Placeholder ]"
  },
  {
    id: "hs-nicotine-reach",
    title: "High School: Effects of Nicotine on Brain",
    description: "We have a team of 9 students building an online tobacco prevention model. The project intends to display the impact of nicotine on the brain, while explaining the molecular and systemic biology in a digestible format. The project is being reviewed by a faculty member from Stanford's REACH program.",
    status: "current",
    signupsOpen: false,
    airtableEmbedUrl: "",
    imageSrc: "",
    imagePlaceholder: "[ Nicotine on Brain Project Image Placeholder ]"
  },
  {
    id: "hs-dna-extraction",
    title: "HS Workshops — Learning Microscopy",
    description: "We provide hands-on, interactive experiences for high school students to engage directly with advanced scientific techniques. Recently, we conducted an in-person DNA extraction and microscopy workshop.",
    status: "past",
    signupsOpen: false,
    airtableEmbedUrl: "",
    imageSrc: "/events/dna-extraction-microscopy.jpg",
    imagePlaceholder: "[ HS DNA Extraction / Microscopy Image Placeholder ]"
  },
  {
    id: "ms-summer-camps-2026",
    title: "Middle School Summer Camps",
    description: "During the summer of 2026, we partnered with India Community Center to teach experimental biology to 70+ students. Our goal was to simplify complex biology topics such as enzyme reaction, cellular respiration, and more with labs and worksheets.",
    status: "past",
    signupsOpen: false,
    airtableEmbedUrl: "",
    imageSrc: "/events/ms-summer-camp-lesson.jpg",
    imagePlaceholder: "[ Middle School Summer Camps Image Placeholder ]"
  },
  {
    id: "ms-workshops-2025-2026",
    title: "Middle School Workshops",
    description: "We have taught 30+ students biology topics such as DNA and enzymes during the school year 2025-2026. Our goal is to continue expanding our reach and access.",
    status: "past",
    signupsOpen: false,
    airtableEmbedUrl: "",
    imageSrc: "/events/ms-workshops.jpg",
    imagePlaceholder: "[ Middle School Workshops Image Placeholder ]"
  },
  {
    id: "stem-discovery-day",
    title: "STEM Discovery Day",
    description: "In April of 2026, we partnered up with the American Association of University Women to host a mother-daughter STEM Discovery Day. During this workshop, we taught 70+ attendees the biomechanics of lungs, and gave them the opportunity to model it.",
    status: "past",
    signupsOpen: false,
    airtableEmbedUrl: "",
    imageSrc: "/events/stem-discovery-day.jpg",
    imagePlaceholder: "[ STEM Discovery Day Image Placeholder ]"
  }
];

export default function Page() {
  const upcomingEvents = EVENTS_DATA.filter((e) => e.status === "upcoming");
  const currentEvents = EVENTS_DATA.filter((e) => e.status === "current");
  const pastEvents = EVENTS_DATA.filter((e) => e.status === "past");

  return (
    <div className="mx-auto px-6 py-16 max-w-5xl">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-[var(--dark-green)] mb-16">
        Programs & Workshops
      </h1>

      {upcomingEvents.length > 0 && (
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold text-[var(--dark-green)]">Upcoming Events</h2>
            <span className="h-1 flex-1 bg-[var(--light-green)] opacity-30 rounded-full" />
          </div>
          <div className="space-y-16">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-[var(--light-green)]/5 p-8 rounded-3xl border border-[var(--light-green)]/30 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl font-bold text-[var(--dark-green)]">{event.title}</h3>
                      {event.signupsOpen ? (
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Signups Open</span>
                      ) : (
                        <span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Signups Closed</span>
                      )}
                    </div>
                    <p className="text-lg text-[var(--dark-green)] leading-relaxed mb-6 opacity-90">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {currentEvents.length > 0 && (
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold text-[var(--dark-green)]">Current Events</h2>
            <span className="h-1 flex-1 bg-[var(--light-green)] opacity-30 rounded-full" />
          </div>
          <div className="space-y-16">
            {currentEvents.map((event) => (
              <div key={event.id} className="text-lg text-[var(--dark-green)] leading-relaxed">
                <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                <p className="opacity-90">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold text-[var(--dark-green)]">Past Events</h2>
            <span className="h-1 flex-1 bg-[var(--light-green)] opacity-30 rounded-full" />
          </div>
          <div className="space-y-16">
            {pastEvents.map((event, index) => (
              <div key={event.id} className={`flex flex-col gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div className="flex-1 text-lg text-[var(--dark-green)] leading-relaxed">
                  <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                  <p className="opacity-90">{event.description}</p>
                </div>
                <div className="flex-1 w-full aspect-[4/3] relative bg-gray-100 rounded-2xl overflow-hidden border border-[var(--light-green)]/30">
                  {event.imageSrc ? (
                    <Image src={event.imageSrc} alt={event.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 bg-gray-200">{event.imagePlaceholder}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="text-center mt-20 pt-10 border-t border-[var(--light-green)]/20">
        <p className="text-xl text-[var(--dark-green)] mb-6">
          Email us for more information at{" "}
          <a href="mailto:thebiomedjournal@gmail.com" className="underline hover:text-[var(--light-green)] font-semibold">
            thebiomedjournal@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
