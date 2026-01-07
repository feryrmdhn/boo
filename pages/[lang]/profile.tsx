import { GetServerSideProps } from 'next';
import { Language, t } from '@/lang';

interface ProfileProps {
    lang: Language;
}

export default function Profile({ lang }: ProfileProps) {
    return (
        <>
            <h1 className="text-3xl font-bold text-white">{t(lang, 'nav.profile')}</h1>
            <p className="text-gray-400 mt-4">{t(lang, 'pages.profileDesc')}</p>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { lang } = context.params as { lang: string };
    const validLangs = ['id', 'en', 'ms'];
    if (!validLangs.includes(lang)) {
        return { redirect: { destination: '/id/profile', permanent: false } };
    }
    return { props: { lang } };
};
