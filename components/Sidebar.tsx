import Link from 'next/link';
import { useRouter } from 'next/router';
import { Heart, MessageCircle, Users, FileText, Apple, Ghost, Volleyball } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    const router = useRouter();

    const isActive = (path: string) => router.pathname === path;

    return (
        <aside
            className={`bg-black transition-all duration-300 flex-shrink-0 ${isOpen ? 'w-64' : 'w-0'
                } overflow-hidden`}
        >
            <div className="flex flex-col h-full w-64">
                <nav className="flex-1 overflow-y-auto">
                    <div className="px-4 py-2">
                        <Link href="/" className={`text-sm flex items-center gap-4 py-3 ${isActive('/') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <div className={`w-6 h-6 rounded-full ${isActive('/') ? 'bg-teal-400' : 'bg-gray-700'}`} />
                            <span className={isActive('/') ? 'font-medium' : ''}>Beranda</span>
                        </Link>

                        <Link href="/match" className={`text-sm flex items-center gap-4 py-3 ${isActive('/match') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <Heart className="w-6 h-6" />
                            <span className={isActive('/match') ? 'font-medium' : ''}>Cocok</span>
                        </Link>

                        <Link href="/message" className={`text-sm flex items-center gap-4 py-3 ${isActive('/message') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <MessageCircle className="w-6 h-6" />
                            <span className={isActive('/message') ? 'font-medium' : ''}>Pesan</span>
                        </Link>

                        <Link href="/profile" className={`text-sm flex items-center gap-4 py-3 ${isActive('/profile') ? 'text-teal-400' : 'text-white hover:text-gray-300'}`}>
                            <Ghost className="w-6 h-6" />
                            <span className={isActive('/profile') ? 'font-medium' : ''}>Profil</span>
                        </Link>
                    </div>

                    <div className="mt-4 pt-4 px-4">
                        <Link href="/personality-database" className={`text-sm flex items-center gap-4 py-3 ${isActive('/personality-database') ? 'text-teal-400' : 'text-gray-400 hover:text-gray-300'}`}>
                            <Users className="w-6 h-6" />
                            <span className={isActive('/personality-database') ? 'font-medium' : ''}>Basis Data Kepribadian</span>
                        </Link>

                        <Link href="/personality-test" className={`text-sm flex items-center gap-4 py-3 ${isActive('/personality-test') ? 'text-teal-400' : 'text-gray-400 hover:text-gray-300'}`}>
                            <FileText className="w-6 h-6" />
                            <span className={isActive('/personality-test') ? 'font-medium' : ''}>Tes Kepribadian</span>
                        </Link>

                        <Link href="/source" className={`text-sm flex items-center gap-4 py-3 ${isActive('/source') ? 'text-teal-400' : 'text-gray-400 hover:text-gray-300'}`}>
                            <Volleyball className="w-6 h-6" />
                            <span className={isActive('/source') ? 'font-medium' : ''}>Sumber</span>
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
                        <p>Kami berdiri untuk cinta. 💙</p>
                        <div className="flex gap-4">
                            <Link href="/#" className="hover:text-gray-300">Ketentuan</Link>
                            <Link href="/#" className="hover:text-gray-300">Kebijakan...</Link>
                            <Link href="/#" className="hover:text-gray-300">FAQ</Link>
                            <Link href="/#" className="hover:text-gray-300">Tips...</Link>
                        </div>
                    </div>

                    <div className="text-gray-500 text-xs">
                        <p>© {new Date().getFullYear()} Boo Enterprises, Inc</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
