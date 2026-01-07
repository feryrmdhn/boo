import UniverseCard from '@/components/UniverseCard';
import CommunitySection from '@/components/CommunitySection';
import ContentFeed from '@/components/ContentFeed';
import NewsFeed from '@/components/NewsFeed';

export default function Home() {
  return (
    <div className="flex gap-x-4 h-full">
      <div className="flex-shrink-0">
        <UniverseCard />
      </div>
      <div className="flex-1 min-w-0 space-y-4 overflow-y-auto scrollbar-hide">
        <CommunitySection />
        <ContentFeed />
      </div>
      <div className="flex-1 min-w-0">
        <NewsFeed />
      </div>
    </div>
  );
}
