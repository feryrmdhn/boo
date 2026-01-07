import { searchCategories } from './searchCategories';

export interface UniverseItem {
    id: string;
    name: string;
    hashtag: string;
    count: string;
}

const dummyCounts = [
    '18 jt jiwa',
    '13 jt jiwa',
    '9,5 jt jiwa',
    '8,7 jt jiwa',
    '6,2 jt jiwa',
    '4,4 jt jiwa',
    '4,2 jt jiwa',
    '4,1 jt jiwa',
    '4 jt jiwa',
    '3,9 jt jiwa',
    '3,8 jt jiwa',
    '3,3 jt jiwa',
    '3 jt jiwa',
    '2,8 jt jiwa',
    '2,8 jt jiwa',
    '2,4 jt jiwa',
    '2,2 jt jiwa',
    '1,7 jt jiwa',
    '1,5 jt jiwa',
    '1,4 jt jiwa',
    '1 jt jiwa',
    '745 rb jiwa',
    '502 rb jiwa',
    '443 rb jiwa',
    '398 rb jiwa',
    '356 rb jiwa',
    '289 rb jiwa',
    '234 rb jiwa',
    '187 rb jiwa',
    '145 rb jiwa',
    '98 rb jiwa',
];

export const universeData: UniverseItem[] = searchCategories.map((category, index) => ({
    ...category,
    count: dummyCounts[index] || '50 rb jiwa',
}));
