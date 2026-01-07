import type { NextApiRequest, NextApiResponse } from 'next';

export interface NewsData {
    id: string;
    title: string;
    activity: {
        like: number;
        comment: number;
    };
}

const mockNews: NewsData[] = [
    {
        id: '1',
        title: 'What would you choose: a relationship full of adventures or a peaceful one?',
        activity: {
            like: 595,
            comment: 4077
        }
    },
    {
        id: '2',
        title: 'How do you handle conflicts in your relationships?',
        activity: {
            like: 423,
            comment: 2156
        }
    },
    {
        id: '3',
        title: 'What personality trait do you value most in a partner?',
        activity: {
            like: 789,
            comment: 3421
        }
    },
    {
        id: '4',
        title: 'Do you believe in love at first sight?',
        activity: {
            like: 1024,
            comment: 5678
        }
    },
    {
        id: '5',
        title: 'What is your ideal date night?',
        activity: {
            like: 567,
            comment: 1890
        }
    },
    {
        id: '6',
        title: 'How important is communication in a relationship?',
        activity: {
            like: 892,
            comment: 4123
        }
    },
    {
        id: '7',
        title: 'What makes you feel most loved?',
        activity: {
            like: 1156,
            comment: 6234
        }
    },
    {
        id: '8',
        title: 'Do you prefer quality time or words of affirmation?',
        activity: {
            like: 678,
            comment: 2987
        }
    },
    {
        id: '9',
        title: 'What is your biggest relationship deal-breaker?',
        activity: {
            like: 945,
            comment: 4567
        }
    },
    {
        id: '10',
        title: 'How do you show appreciation to your loved ones?',
        activity: {
            like: 734,
            comment: 3145
        }
    }
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<NewsData[] | NewsData | { error: string }>
) {
    if (req.method === 'GET') {
        const { id } = req.query;

        if (id) {
            const news = mockNews.find(item => item.id === id);
            if (news) {
                res.status(200).json(news);
            } else {
                res.status(404).json({ error: 'News not found' });
            }
            return;
        }

        // Get all news
        res.status(200).json(mockNews);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
