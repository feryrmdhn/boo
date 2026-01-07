import UniverseCard from '@/components/UniverseCard';
import CommunitySection from '@/components/CommunitySection';
import ContentFeed from '@/components/ContentFeed';

export default function Home() {
  return (
    <div className="flex items-start gap-x-4 px-4 py-6 overflow-hidden">
      <UniverseCard />
      <div className="w-full space-y-4 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 190px)' }}>
        <CommunitySection />
        <ContentFeed />
      </div>
    </div>
  );
}
