import Link from 'next/link';
import { useRouter } from 'next/router';
import { Heart, MessageCircle, Users, FileText, Apple, Ghost, Volleyball } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Language, t } from '@/lang';

interface SidebarProps {
    isOpen: boolean;
    lang: Language;
}

export default function Sidebar({ isOpen, lang }: SidebarProps) {
    const router = useRouter();

    const isActive = (path: string) => router.pathname === path || router.asPath.includes(path);

    return (
        <aside
            className={`bg-black transition-all duration-300 flex-shrink-0 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}
        >
            <div className="flex flex-col h-full w-64">
                <nav className="flex-1 overflow-y-auto">
                    <div className="px-4 py-2">
                        <Link href={`/${lang}`} className={`text-sm flex items-center gap-4 py-3 ${isActive(`/${lang}`) && router.asPath === `/${lang}` ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <div className={`w-6 h-6 rounded-full ${isActive(`/${lang}`) && router.asPath === `/${lang}` ? 'bg-teal-400' : 'bg-gray-700'}`} />
                            <span>{t(lang, 'nav.home')}</span>
                        </Link>

                        <Link href={`/${lang}/match`} className={`text-sm flex items-center gap-4 py-3 ${isActive('/match') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <Heart className="w-6 h-6" />
                            <span>{t(lang, 'nav.match')}</span>
                        </Link>

                        <Link href={`/${lang}/message`} className={`text-sm flex items-center gap-4 py-3 ${isActive('/message') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <MessageCircle className="w-6 h-6" />
                            <span>{t(lang, 'nav.message')}</span>
                        </Link>

                        <Link href={`/${lang}/profile`} className={`text-sm flex items-center gap-4 py-3 ${isActive('/profile') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <Ghost className="w-6 h-6" />
                            <span>{t(lang, 'nav.profile')}</span>
                        </Link>
                    </div>

                    <div className="mt-4 pt-4 px-4">
                        <Link href={`/${lang}/personality-database`} className={`text-sm flex items-center gap-4 py-3 ${isActive('/personality-database') ? 'text-teal-400' : 'text-gray-400 hover:text-gray-300'}`}>
                            <Users className="w-6 h-6" />
                            <span>{t(lang, 'nav.personalityDatabase')}</span>
                        </Link>

                        <Link href={`/${lang}/personality-test`} className={`text-sm flex items-center gap-4 py-3 ${isActive('/personality-test') ? 'text-teal-400' : 'text-gray-400 hover:text-gray-300'}`}>
                            <FileText className="w-6 h-6" />
                            <span>{t(lang, 'nav.personalityTest')}</span>
                        </Link>

                        <Link href={`/${lang}/source`} className={`text-sm flex items-center gap-4 py-3 ${isActive('/source') ? 'text-teal-400' : 'text-gray-400 hover:text-gray-300'}`}>
                            <Volleyball className="w-6 h-6" />
                            <span>{t(lang, 'nav.source')}</span>
                        </Link>
                    </div>
                </nav>

                <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#00D7FE" d="M1.5 1.5l11 11-11 11V1.5z" />
                            <path fill="#00C853" d="M1.5 1.5l11 11 4-4-15-7z" />
                            <path fill="#F43249" d="M1.5 23.5l11-11 4 4-15 7z" />
                            <path fill="#FFD900" d="M16.5 8.5l-4 4 4 4 6-4-6-4z" />
                        </svg>
                        <Apple className='w-6 h-6 text-white' />
                    </div>

                    <div className="mb-4">
                        <LanguageSelector />
                    </div>

                    <div className="text-gray-400 text-xs space-y-1 mb-2">
                        <p>{t(lang, 'footer.tagline')}</p>
                        <div className="flex gap-4">
                            <button onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-gray-300">{t(lang, 'footer.terms')}</button>
                            <button onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-gray-300">{t(lang, 'footer.privacy')}</button>
                            <button onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-gray-300">{t(lang, 'footer.faq')}</button>
                            <button onClick={(e) => e.preventDefault()} className="cursor-pointer hover:text-gray-300">{t(lang, 'footer.tips')}</button>
                        </div>
                    </div>

                    <div className="text-gray-500 text-xs">
                        <p>© 2026 Boo Enterprises, Inc</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
