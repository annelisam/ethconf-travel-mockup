import { GettingThereSection } from '@/components/site/getting-there-section';
import { HeroSection } from '@/components/site/hero-section';
import { PlusBanner } from '@/components/site/plus-banner';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { StaysSection } from '@/components/site/stays-section';
import { VenueSection } from '@/components/site/venue-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <HeroSection />
        <StaysSection />
        <VenueSection />
        <GettingThereSection />
        <PlusBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
