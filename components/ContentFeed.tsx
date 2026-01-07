import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Forward, Heart, MessageCircle, Star } from 'lucide-react';

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
            <div className="w-full">
                <div className="text-white text-center py-8">Loading...</div>
            </div>
        );
    }

    return (
        <div className="w-full space-y-4">
            {contents.map((content) => (
                <div
                    key={content.id}
                    className="bg-black border border-gray-800 rounded-3xl p-6"
                >
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
                                <div className="flex items-center">
                                    <span className="text-white font-semibold">{content.name}</span>
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

                    <div className="mb-4">
                        <h3 className="text-white font-medium mb-2">{content.title}</h3>
                        <p className="text-gray-400 text-sm">
                            {content.topic}
                        </p>
                    </div>

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

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                                <Heart className="w-6 h-6" />
                                <span className="text-sm">{content.data.total_like}</span>
                            </button>

                            <button className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                                <MessageCircle className="w-6 h-6" />
                                <span className="text-sm">{content.data.total_comment}</span>
                            </button>

                            <button className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                                <Forward className="w-6 h-6" />
                            </button>

                            <button className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                                <Star className="w-6 h-6" />
                            </button>
                        </div>

                        <button className="text-gray-400 hover:text-teal-400 text-sm font-medium transition-colors cursor-pointer">
                            Balas
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
