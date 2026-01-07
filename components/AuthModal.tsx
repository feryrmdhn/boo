import Image from 'next/image';
import { ReactPortal, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { X, Apple, Mail } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const subscribe = () => () => { };
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function AuthModal({ isOpen, onClose }: AuthModalProps): ReactPortal | null {
    const isBrowser = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    if (!isBrowser) return null;

    return createPortal(
        <div
            className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <button
                onClick={onClose}
                className="absolute top-6 left-6 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
            >
                <X className="w-6 h-6" />
            </button>

            <div
                className={`flex flex-col items-center justify-center w-full h-full px-4 transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'
                    }`}
            >
                <div className="mb-12">
                    <Image
                        src="/assets/boo-planet.png"
                        alt="BOO Planet"
                        width={400}
                        height={400}
                        priority
                    />
                </div>

                <p className="text-center text-sm mb-8 max-w-md">
                    Dengan mendaftar berarti kamu menyetujui {' '}
                    <span className="text-teal-400">Ketentuan</span> dan{' '}
                    <span className="text-teal-400">Kebijakan Privasi</span> kami
                </p>

                <div className="flex flex-col gap-4 w-full max-w-sm">
                    <button className="cursor-pointer flex items-center gap-4 hover:bg-gray-900 text-white py-3 px-6 rounded-full transition-colors border border-gray-800">
                        <Apple className="w-6 h-6" />
                        <span className="flex-1 text-center">MASUK DENGAN APPLE</span>
                    </button>

                    <button className="cursor-pointer flex items-center gap-4 hover:bg-gray-900 text-white py-3 px-6 rounded-full transition-colors border border-gray-800">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="flex-1 text-center">MASUK DENGAN GOOGLE</span>
                    </button>

                    <button className="cursor-pointer flex items-center gap-4 hover:bg-gray-900 text-white py-3 px-6 rounded-full transition-colors border border-gray-800">
                        <Mail className="w-6 h-6" />
                        <span className="flex-1 text-center">MASUK DENGAN EMAIL</span>
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
