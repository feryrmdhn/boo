import { GetServerSideProps } from 'next';
import { Language, t } from '@/lang';

interface PersonalityDatabaseProps {
    lang: Language;
}

export default function PersonalityDatabase({ lang }: PersonalityDatabaseProps) {
    return (
        <>
            <h1 className="text-3xl font-bold text-white">{t(lang, 'nav.personalityDatabase')}</h1>
            <p className="text-gray-400 mt-4">{t(lang, 'pages.personalityDatabaseDesc')}</p>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { lang } = context.params as { lang: string };
    const validLangs = ['id', 'en', 'ms'];
    if (!validLangs.includes(lang)) {
        return { redirect: { destination: '/id/personality-database', permanent: false } };
    }
    return { props: { lang } };
};
