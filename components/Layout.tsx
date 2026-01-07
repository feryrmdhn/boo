import { useState, lazy, Suspense, ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const AuthModal = lazy(() => import('./AuthModal'));

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="h-screen bg-black flex flex-col overflow-hidden">
            <Header
                onToggleSidebar={() => setShowSidebar(!showSidebar)}
                onOpenAuth={() => setShowAuthModal(true)}
            />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar isOpen={showSidebar} />
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
