import { ArrowUpRight, Navigation, Plane, TrainFront } from 'lucide-react';

import { SectionIntro } from '@/components/site/section-intro';

const DIRECTIONS_URL =
  'https://maps.google.com/?q=Javits+Center+429+11th+Ave+New+York';

const routes = [
  {
    kind: 'Subway',
    title: 'Take the 7.',
    body: 'Exit at 34 St–Hudson Yards. Javits is one block west, about a four-minute walk.',
    meta: 'Closest station',
    badge: '7',
    icon: TrainFront,
    iconClass: 'bg-iris-mist text-iris-deep',
  },
  {
    kind: 'Rail',
    title: 'From Penn Station.',
    body: 'Walk west along 34th Street, or hop on the M34-SBS for a direct ride to 11th Avenue.',
    meta: '~15 min walk',
    icon: Navigation,
    iconClass: 'bg-ember-mist text-ember',
  },
  {
    kind: 'Airports',
    title: 'Three ways in.',
    body: 'JFK, LaGuardia, and Newark all connect to Midtown by rail, subway, or taxi.',
    meta: 'Allow 45–75 min',
    icon: Plane,
    iconClass: 'bg-lime-mist text-[#4c7510]',
  },
];

export function GettingThereSection() {
  return (
    <section
      id="getting-there"
      className="section-pad scroll-mt-28 bg-white"
      aria-labelledby="getting-there-title"
    >
      <div className="shell">
        <SectionIntro
          eyebrow="Getting there"
          title={<span id="getting-there-title">Land. Ride. Walk in.</span>}
        >
          <p className="lede">
            Javits Center sits on Manhattan’s far west side, one block from the 7
            train and an easy walk from Penn Station.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-iris-deep hover:underline"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open directions in Google Maps{' '}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </SectionIntro>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-ink/12 md:grid-cols-3">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <article
                key={route.kind}
                className={`p-7 lg:p-9 ${
                  index < routes.length - 1
                    ? 'border-b border-ink/12 md:border-b-0 md:border-r'
                    : ''
                }`}
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-full ${route.iconClass}`}
                >
                  <Icon aria-hidden />
                </span>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">
                  {route.kind}
                </p>
                <h3 className="display-3 mt-2">{route.title}</h3>
                <p className="mt-4 leading-7 text-ink-soft">{route.body}</p>
                <p className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                  {route.badge ? (
                    <span className="flex size-6 items-center justify-center rounded-full bg-[#9b51e0] text-xs text-white">
                      {route.badge}
                    </span>
                  ) : null}
                  {route.meta}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col justify-between gap-6 rounded-3xl bg-lime p-7 sm:flex-row sm:items-center lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-lime-deep">
              Travel support
            </p>
            <h3 className="display-3 mt-2">Need a visa invitation letter?</h3>
            <p className="mt-2 text-sm text-[#41551e]">
              Available for confirmed ETHConf ticket holders.
            </p>
          </div>
          <a
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-white transition hover:bg-ink-raised"
            href="mailto:hello@ethglobal.com"
          >
            Contact our team <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
