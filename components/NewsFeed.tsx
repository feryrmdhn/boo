import { useState, useEffect } from 'react';
import axios from 'axios';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Language, t } from '@/lang';

interface NewsData {
    id: string;
    title: string;
    activity: {
        like: number;
        comment: number;
    };
}

interface NewsFeedProps {
    lang: Language;
}

export default function NewsFeed({ lang }: NewsFeedProps) {
    const [news, setNews] = useState<NewsData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('/api/news');
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
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
        <div className="w-full h-full flex flex-col">
            <div className="mb-4 flex-shrink-0 px-4">
                <h2 className="text-white text-xl font-bold">{t(lang, 'home.relatedPosts')}</h2>
            </div>

            <div className="space-y-4 overflow-y-auto scrollbar-hide flex-1 px-4">
                {news.map((item) => (
                    <div
                        key={item.id}
                        className="bg-black border border-gray-800 rounded-3xl p-4 hover:border-gray-700 transition-colors cursor-pointer"
                    >
                        <div className="mb-3">
                            <p className="text-xs mb-2">Pertanyaan Hari Ini</p>
                            <h3 className="text-white text-base font-semibold leading-snug">
                                {item.title}
                            </h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="flex items-center gap-1">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-xs">{item.activity.like}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="text-xs">{item.activity.comment}</span>
                                </div>
                                <Share2 className="w-4 h-4" />
                            </div>
                            <span className="text-gray-500 text-xs">7/1/2026</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
