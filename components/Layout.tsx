import { useState, lazy, Suspense, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Sidebar from './Sidebar';
import { Language } from '@/lang';

const AuthModal = lazy(() => import('./AuthModal'));

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const router = useRouter();

    // Get lang from URL path directly during render (no useEffect needed)
    const pathLang = router.asPath.split('/')[1];
    const lang: Language = ['id', 'en', 'ms'].includes(pathLang) ? pathLang as Language : 'id';

    return (
        <div className="h-screen bg-black flex flex-col overflow-hidden">
            <Header
                onToggleSidebar={() => setShowSidebar(!showSidebar)}
                onOpenAuth={() => setShowAuthModal(true)}
                lang={lang}
            />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar isOpen={showSidebar} lang={lang} />
                <main className="flex-1 px-4 py-4 overflow-hidden">
                    {children}
                </main>
            </div>

            <Suspense fallback={null}>
                <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
            </Suspense>
        </div>
    );
}
