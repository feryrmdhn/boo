import type { NextApiRequest, NextApiResponse } from 'next';

export interface ContentData {
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

const mockContent: ContentData[] = [
    {
        id: '1',
        avatar: '/api/dumy-avatar.jpg',
        zodiac: 'Aries',
        type: 'post',
        name: 'John',
        personality_type: 'INTJ',
        topic: 'Technology',
        post: '/api/dummy-post.jpg',
        title: 'The Future of AI',
        data: {
            total_like: 245,
            total_comment: 32
        }
    },
    {
        id: '2',
        avatar: '/api/dumy-avatar.jpg',
        zodiac: 'Taurus',
        type: 'article',
        name: 'Stephanie',
        personality_type: 'ENFP',
        topic: 'Lifestyle',
        post: '',
        title: 'Mindful Living',
        data: {
            total_like: 189,
            total_comment: 24
        }
    },
    {
        id: '3',
        avatar: '/api/dumy-avatar.jpg',
        zodiac: 'Gemini',
        type: 'post',
        name: 'Brandon',
        personality_type: 'ISTP',
        topic: 'Travel',
        post: '/api/dummy-post.jpg',
        title: 'Southeast Asia Adventures',
        data: {
            total_like: 412,
            total_comment: 56
        }
    },
    {
        id: '4',
        avatar: '/api/dumy-avatar.jpg',
        zodiac: 'Cancer',
        type: 'article',
        name: 'Jessica',
        personality_type: 'ESFJ',
        topic: 'Food',
        post: '',
        title: 'Heritage Cooking',
        data: {
            total_like: 328,
            total_comment: 45
        }
    },
    {
        id: '5',
        avatar: '/api/dumy-avatar.jpg',
        zodiac: 'Leo',
        type: 'post',
        name: 'Louis',
        personality_type: 'ENTJ',
        topic: 'Business',
        post: '/api/dummy-post.jpg',
        title: 'Modern Leadership',
        data: {
            total_like: 567,
            total_comment: 78
        }
    }
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ContentData[] | { error: string }>
) {
    if (req.method === 'GET') {
        const { type, personality_type, topic, zodiac } = req.query;

        let filteredContent = [...mockContent];

        if (type) {
            filteredContent = filteredContent.filter(item => item.type === type);
        }
        if (personality_type) {
            filteredContent = filteredContent.filter(item => item.personality_type === personality_type);
        }
        if (topic) {
            filteredContent = filteredContent.filter(item => item.topic === topic);
        }
        if (zodiac) {
            filteredContent = filteredContent.filter(item => item.zodiac === zodiac);
        }

        res.status(200).json(filteredContent);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
