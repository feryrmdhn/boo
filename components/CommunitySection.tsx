import { Forward } from 'lucide-react';

interface DailyQuestion {
    category: string;
    question: string;
    date: string;
    likes: number;
    comments: number;
}

export default function CommunitySection() {

    const dailyQuestion: DailyQuestion = {
        category: '#pertanyaan',
        question: 'What would you choose: a relationship full of adventures or a peaceful one?',
        date: '7/11/2025',
        likes: 595,
        comments: 4077
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="bg-black border border-gray-800 rounded-3xl p-6">
                <div className="flex items-center justify-center mb-4">
                    <span className="bg-teal-400 text-black text-xs font-semibold px-4 py-2 rounded-full">
                        {dailyQuestion?.category || '#pertanyaan'}
                    </span>
                </div>

                <div className="mb-4">
                    <h3 className="text-white text-sm mb-2">Pertanyaan Hari Ini</h3>
                    <div className='flex justify-between items-center gap-x-2'>
                        <p className="text-white text-xl font-bold leading-relaxed">
                            {dailyQuestion?.question || 'Loading...'}
                        </p>
                        <span className="text-gray-400 text-xs">{dailyQuestion?.date}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400">
                        <button className="flex items-center gap-2 cursor-pointer">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="text-sm">{dailyQuestion?.likes || 0}</span>
                        </button>
                        <button className="flex items-center gap-2 cursor-pointer">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="text-sm">{dailyQuestion?.comments || 0}</span>
                        </button>
                        <button className="ml-auto cursor-pointer">
                            <Forward className='w-5 h-5 text-gray-400' />
                        </button>
                    </div>
                    <button className='text-sm text-gray-400 cursor-pointer'>
                        Komentar
                    </button>
                </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-3xl p-6">
                <h2 className="text-white text-2xl font-bold mb-2">Pertanyaan Komunitas</h2>
                <p className="text-white text-sm mb-6">
                    Komunitas pertanyaan, obrolan, dan diskusi.
                </p>
                <button className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-teal-500 transition-colors cursor-pointer">
                    GABUNG SEKARANG
                </button>
            </div>
        </div>
    );
}
