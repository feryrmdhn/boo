import { universeData } from '@/utils/universeData';

export default function UniverseCard() {
    return (
        <div className="bg-black border border-gray-800 rounded-3xl p-4 h-full flex flex-col w-[25rem]">
            <h2 className="text-white text-2xl font-bold mb-4">Alam Semesta</h2>
            <div className="space-y-2 overflow-y-auto scrollbar-hide flex-1">
                {universeData.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between"
                    >
                        <span className="text-white text-xs bg-black px-3 py-1 rounded-full border border-gray-800 hover:border-teal-400 transition-colors cursor-pointer">
                            {item.hashtag}
                        </span>
                        <span className="text-gray-500 text-xs">{item.count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
