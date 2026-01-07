import { GetServerSideProps } from 'next';
import UniverseCard from '@/components/UniverseCard';
import CommunitySection from '@/components/CommunitySection';
import ContentFeed from '@/components/ContentFeed';
import NewsFeed from '@/components/NewsFeed';
import { Language } from '@/lang';

interface HomeProps {
    lang: Language;
}

export default function Home({ lang }: HomeProps) {
    return (
        <div className="flex gap-x-4 h-full">
            <div className="flex-shrink-0">
                <UniverseCard lang={lang} />
            </div>
            <div className="flex-1 min-w-0 space-y-4 overflow-y-auto scrollbar-hide">
                <CommunitySection />
                <ContentFeed />
            </div>
            <div className="flex-1 min-w-0">
                <NewsFeed lang={lang} />
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { lang } = context.params as { lang: string };

    // Validate language
    const validLangs = ['id', 'en', 'ms'];
    if (!validLangs.includes(lang)) {
        return {
            redirect: {
                destination: '/id',
                permanent: false,
            },
        };
    }

    return {
        props: {
            lang,
        },
    };
};
