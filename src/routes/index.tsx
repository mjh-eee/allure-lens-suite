import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import kettlebellAsset from "@/assets/shammi-kettlebell.jpg.asset.json";
import studioAsset from "@/assets/shammi-studio.jpg.asset.json";
import gymAsset from "@/assets/shammi-gym.jpg.asset.json";
import cardioAsset from "@/assets/shammi-cardio.jpg.asset.json";
import thumbsUpAsset from "@/assets/shammi-client-thumbsup.jpg.asset.json";
import selfieGreyAsset from "@/assets/shammi-selfie-grey.jpg.asset.json";
import selfieBlueAsset from "@/assets/shammi-selfie-blue.jpg.asset.json";
import teamFlexAsset from "@/assets/shammi-team-flex.jpg.asset.json";
import muralAsset from "@/assets/shammi-mural.jpg.asset.json";

const heroImg = kettlebellAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shammi Nasrin — Fitness Coach & Beauty, Dhaka" },
      {
        name: "description",
        content:
          "1:1 personal training, sustainable diet plans and skincare coaching by Shammi Nasrin in Dhaka. Strong body, glowing skin.",
      },
      { property: "og:title", content: "Shammi Nasrin — Fitness Coach & Beauty, Dhaka" },
      {
        property: "og:description",
        content:
          "1:1 personal training, sustainable diet plans and skincare coaching by Shammi Nasrin in Dhaka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Shammi Nasrin
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Book a session
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-[-10%] size-[480px] rounded-full bg-accent/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-8%] size-[420px] rounded-full bg-secondary/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Fitness &amp; Beauty · Dhaka
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Strong body,
            <br />
            <em className="text-primary">glowing</em> skin.
          </h1>
          <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            I'm Shammi — a fitness coach and beauty coach helping women build
            strength and confidence with training, nutrition and skincare that
            actually fit real life. No crash diets, no filters.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              Book a free call
            </a>
            <a
              href="#programs"
              className="rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Explore programs
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            <div>
              <dt className="font-display text-3xl font-semibold text-foreground">830+</dt>
              <dd className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Posts
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-foreground">8.9K</dt>
              <dd className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Followers
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-foreground">6 yrs</dt>
              <dd className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Coaching
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-accent/40 blur-2xl" aria-hidden="true" />
            <img
              src={heroImg}
              alt="Shammi Nasrin training with a kettlebell at her gym in Dhaka"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card px-5 py-3 shadow-lift">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Follow the journey
              </p>
              <p className="font-display text-base font-semibold text-primary">@shammi_nasrin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOCUS_AREAS = ["Strength & tone", "Sustainable nutrition", "Skincare routines", "Confidence & mindset"];

function About() {
  return (
    <section id="about" className="bg-foreground py-20 text-background sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={studioAsset.url}
            alt="Shammi Nasrin seated on a gym machine between sets"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">About me</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            Strength and softness, in the same frame.
          </h2>
          <p className="mt-6 max-w-[54ch] text-pretty leading-relaxed text-background/75">
            From a small studio in Dhaka, I built my coaching around one idea:
            you shouldn't have to choose between a strong body and a glowing
            complexion. My programs pair structured strength training with real
            nutrition and skin-first beauty rituals — so the results you see
            are the results you feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full bg-background/10 px-4 py-2 text-sm font-semibold text-background/90 ring-1 ring-background/15"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  {
    number: "01",
    title: "Personal Training",
    description:
      "1:1 sessions blending strength, mobility and conditioning — built around your body, your schedule and your goals.",
    price: "৳2,500",
    unit: "per session",
    featured: false,
  },
  {
    number: "02",
    title: "Diet Plans",
    description:
      "Sustainable monthly nutrition built around the food you actually love. No starving, no guilt — just steady progress.",
    price: "৳4,000",
    unit: "per month",
    featured: true,
  },
  {
    number: "03",
    title: "Beauty & Skincare",
    description:
      "Personalised skincare and glow rituals that pair with your training, for skin that looks as rested as you feel.",
    price: "৳3,000",
    unit: "per consult",
    featured: false,
  },
];

function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Programs</p>
          <h2 className="mt-3 max-w-[18ch] font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            Three ways to work with me.
          </h2>
        </div>
        <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
          From self-guided plans to fully personal coaching — start where you are.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PROGRAMS.map((program) => (
          <article
            key={program.number}
            className={
              program.featured
                ? "relative flex flex-col rounded-[1.75rem] bg-primary p-8 text-primary-foreground shadow-lift"
                : "relative flex flex-col rounded-[1.75rem] border border-border bg-card p-8"
            }
          >
            {program.featured && (
              <span className="absolute -top-3 right-6 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                Most loved
              </span>
            )}
            <p className={program.featured ? "text-sm font-bold opacity-80" : "text-sm font-bold text-primary"}>
              {program.number}
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{program.title}</h3>
            <p
              className={
                program.featured
                  ? "mt-3 flex-1 text-pretty text-sm leading-relaxed text-primary-foreground/85"
                  : "mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground"
              }
            >
              {program.description}
            </p>
            <p className="mt-6">
              <span className="font-display text-3xl font-semibold">{program.price}</span>{" "}
              <span className={program.featured ? "text-sm opacity-80" : "text-sm text-muted-foreground"}>
                {program.unit}
              </span>
            </p>
            <a
              href="#book"
              className={
                program.featured
                  ? "mt-6 rounded-full bg-card py-3 text-center text-sm font-bold text-primary transition-transform hover:scale-[1.02]"
                  : "mt-6 rounded-full bg-foreground py-3 text-center text-sm font-bold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              }
            >
              Book now
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

const GALLERY = [
  {
    image: gymAsset.url,
    alt: "Shammi leaning on a gym machine between sets",
    caption: "Putting in the work, one session at a time.",
  },
  {
    image: cardioAsset.url,
    alt: "Shammi on the elliptical during a cardio session",
    caption: "Cardio day — steady, consistent, strong.",
  },
  {
    image: thumbsUpAsset.url,
    alt: "Shammi celebrating a client giving a thumbs up",
    caption: "Every client win is a win for both of us.",
  },
  {
    image: selfieGreyAsset.url,
    alt: "Shammi taking a mirror selfie with a client",
    caption: "Training partners make the hard days easier.",
  },
  {
    image: selfieBlueAsset.url,
    alt: "Shammi with a client after a workout at the gym",
    caption: "Sweat now, glow later.",
  },
  {
    image: muralAsset.url,
    alt: "Shammi with a friend in front of a boxing mural",
    caption: "Surround yourself with people who push you.",
  },
  {
    image: teamFlexAsset.url,
    alt: "Shammi and friends flexing after a group workout",
    caption: "Strong women lift each other up.",
  },
];

function Results() {
  return (
    <section id="results" className="bg-secondary/15 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Results</p>
            <h2 className="mt-3 max-w-[18ch] font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              Real training, real life.
            </h2>
          </div>
          <a href="#reviews" className="text-sm font-bold text-primary underline-offset-4 hover:underline">
            Read client reviews →
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {GALLERY.map((shot) => (
            <figure key={shot.caption} className="group">
              <img
                src={shot.image}
                alt={shot.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <figcaption className="mt-4 px-1">
                <p className="text-sm font-semibold text-muted-foreground">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    quote:
      "Shammi completely changed how I see my body. Six months in, I'm stronger and more confident than I've ever been.",
    name: "Nusrat A.",
    program: "Personal training",
  },
  {
    quote:
      "The diet plan finally felt doable. No starving, just steady progress — and my skin looks rested for the first time in years.",
    name: "Farida R.",
    program: "Diet & beauty plan",
  },
  {
    quote:
      "Patient, funny and so motivating. Booking that first call was honestly the best decision I made this year.",
    name: "Sadia H.",
    program: "Beauty & skincare",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Reviews</p>
      <h2 className="mt-3 max-w-[18ch] font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
        Words from my clients.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <figure key={review.name} className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8">
            <p className="text-lg font-semibold tracking-tight text-accent-foreground" aria-label="5 out of 5 stars">
              ★★★★★
            </p>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
              "{review.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-accent font-display text-base font-semibold text-accent-foreground">
                {review.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-bold">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.program}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const INTERESTS = ["Personal training", "Diet plan", "Beauty & skincare", "Not sure yet"];

function Book() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground sm:p-14">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-[340px] rounded-full bg-background/10 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="max-w-[14ch] font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              Ready to glow up?
            </h2>
            <p className="mt-6 max-w-[42ch] text-pretty leading-relaxed text-primary-foreground/85">
              Book a free 15-minute discovery call and we'll figure out the
              right plan for you. No pressure — just an honest conversation
              about your goals.
            </p>
            <div className="mt-8 space-y-2 text-sm font-semibold">
              <p>@shammi_nasrin</p>
              <p>Dhaka, Bangladesh</p>
              <p>hello@shamminasrin.com</p>
            </div>
          </div>
          {sent ? (
            <div className="flex flex-col items-start justify-center rounded-[1.75rem] bg-card/15 p-8 ring-1 ring-primary-foreground/25">
              <p className="font-display text-2xl font-semibold">Thank you! 🌿</p>
              <p className="mt-3 text-primary-foreground/85">
                Your request is in — I'll get back to you within 24 hours to
                set up your free call.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-full bg-primary-foreground/15 px-6 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/60 ring-1 ring-primary-foreground/25 outline-none transition-colors focus:bg-primary-foreground/25"
              />
              <input
                type="email"
                required
                placeholder="Email or phone"
                className="w-full rounded-full bg-primary-foreground/15 px-6 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/60 ring-1 ring-primary-foreground/25 outline-none transition-colors focus:bg-primary-foreground/25"
              />
              <select
                defaultValue=""
                required
                className="w-full appearance-none rounded-full bg-primary-foreground/15 px-6 py-3.5 text-sm text-primary-foreground ring-1 ring-primary-foreground/25 outline-none transition-colors focus:bg-primary-foreground/25 [&>option]:text-foreground"
              >
                <option value="" disabled>
                  I'm interested in…
                </option>
                {INTERESTS.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full rounded-full bg-foreground py-4 text-sm font-bold text-background transition-colors hover:bg-card hover:text-primary"
              >
                Book my free call
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <span className="font-display text-lg font-semibold text-foreground">Shammi Nasrin</span>
        <div className="flex items-center gap-6 font-semibold">
          <a href="https://instagram.com/shammi_nasrin" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
            Instagram
          </a>
          <a href="#book" className="transition-colors hover:text-primary">
            Book a session
          </a>
        </div>
        <p>© 2026 Shammi Nasrin · Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Results />
        <Reviews />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
