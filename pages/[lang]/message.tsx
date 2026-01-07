import { GetServerSideProps } from 'next';
import { Language, t } from '@/lang';

interface MessageProps {
    lang: Language;
}

export default function Message({ lang }: MessageProps) {
    return (
        <>
            <h1 className="text-3xl font-bold text-white">{t(lang, 'nav.message')}</h1>
            <p className="text-gray-400 mt-4">{t(lang, 'pages.messageDesc')}</p>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { lang } = context.params as { lang: string };
    const validLangs = ['id', 'en', 'ms'];
    if (!validLangs.includes(lang)) {
        return { redirect: { destination: '/id/message', permanent: false } };
    }
    return { props: { lang } };
};
