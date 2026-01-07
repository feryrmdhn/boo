import { GetServerSideProps } from 'next';
import { Language, t } from '@/lang';

interface MatchProps {
    lang: Language;
}

export default function Match({ lang }: MatchProps) {
    return (
        <>
            <h1 className="text-3xl font-bold text-white">{t(lang, 'nav.match')}</h1>
            <p className="text-gray-400 mt-4">{t(lang, 'pages.matchDesc')}</p>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { lang } = context.params as { lang: string };
    const validLangs = ['id', 'en', 'ms'];
    if (!validLangs.includes(lang)) {
        return { redirect: { destination: '/id/match', permanent: false } };
    }
    return { props: { lang } };
};
