import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { searchCategories } from '@/utils/searchCategories';

interface HeaderProps {
    onToggleSidebar: () => void;
    onOpenAuth: () => void;
}

export default function Header({ onToggleSidebar, onOpenAuth }: HeaderProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-black px-4 py-3 sticky top-0 z-40">
            <div className="flex items-center justify-between max-w-full">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onToggleSidebar}
                        className="text-white hover:text-gray-300 cursor-pointer focus:outline-none"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="text-white font-bold text-xl">BOO</div>
                </div>

                <div className="flex-1 mx-4 relative">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-white" />
                        </div>
                        <input
                            type="text"
                            placeholder="Cari"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowDropdown(true)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                            className="w-full bg-black text-white placeholder-gray-500 rounded-full pl-10 pr-4 py-2 focus:outline-none ring-2 ring-gray-800"
                        />
                    </div>

                    {showDropdown && (
                        <div className="absolute top-full mt-2 w-full bg-black border border-gray-800 rounded-xl shadow-lg max-h-96 overflow-y-scroll dropdown-scrollbar-hide z-50">
                            {searchCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        setSearchQuery(category.hashtag);
                                        setShowDropdown(false);
                                    }}
                                    className="w-full text-sm text-left px-8 py-2 text-white hover:bg-teal-400 hover:text-black transition-colors cursor-pointer focus:outline-none"
                                >
                                    {category.hashtag}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    onClick={onOpenAuth}
                    className="text-sm text-black bg-teal-400 shadow animated-shadow px-8 py-3 rounded-full text-center w-fit cursor-pointer hover:scale-103 active:scale-99 duration-500 focus:outline-none"
                >
                    MASUK
                </button>
            </div>
        </header>
    );
}
