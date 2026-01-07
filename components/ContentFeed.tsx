import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface ContentData {
    id: string;
    avatar: string;
    zodiac: string;
    type: string;
    name: string;
    personality_type: string;
    topic: string;
    post: string;
    title: string;
    data: {
        total_like: number;
        total_comment: number;
    };
}

export default function ContentFeed() {
    const [contents, setContents] = useState<ContentData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContents();
    }, []);

    const fetchContents = async () => {
        try {
            const response = await axios.get('/api/content');
            setContents(response.data);
        } catch (error) {
            console.error('Error fetching contents:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex-1 max-w-2xl">
                <div className="text-white text-center py-8">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex-1 max-w-2xl space-y-4">
            {contents.map((content) => (
                <div
                    key={content.id}
                    className="bg-black border border-gray-800 rounded-3xl p-6"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={content.avatar}
                                    alt="Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-semibold">{content.name}</span>
                                    <span className="text-gray-500">•</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-teal-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                                        {content.personality_type}
                                    </span>
                                    <span className="text-gray-400 text-sm">{content.zodiac}</span>
                                    <span className="bg-teal-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                                        3★4
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="text-gray-500 text-sm">2d</span>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                        <h3 className="text-white text-lg font-medium mb-2">{content.title}</h3>
                        <p className="text-gray-400 text-sm">
                            {content.topic} • <span className="text-gray-500">(diedit)</span>
                        </p>
                    </div>

                    {/* Image */}
                    {content.post && (
                        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-4">
                            <Image
                                src={content.post}
                                alt={content.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Like */}
                            <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="text-sm">{content.data.total_like}</span>
                            </button>

                            {/* Comment */}
                            <button className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="text-sm">{content.data.total_comment}</span>
                            </button>

                            {/* Share */}
                            <button className="text-gray-400 hover:text-teal-400 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>

                            {/* Bookmark */}
                            <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </button>
                        </div>

                        <button className="text-gray-400 hover:text-teal-400 text-sm font-medium transition-colors">
                            Balas
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
