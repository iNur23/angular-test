export type HeroSection = 'powerstats' | 'biography' | 'appearance' | 'work' | 'connections';

export interface Hero {
    id: string;
    name: string;
    powerstats: {
        "intelligence": string;
        "strength": string;
        "speed": string;
        "durability": string;
        "power": string;
        "combat": string
    };
    biography: {
        "full-name": string;
        "alter-egos": string;
        "aliases": string[];
        "place-of-birth": string;
        "first-appearance": string;
        "publisher": string;
        "alignment": 'good' | 'bad' | '-' | 'neutral'
    };
    appearance: {
        "gender": 'Male' | 'Female' | '-';
        "race": string;
        "height": string[];
        "weight": string[];
        "eye-color": string;
        "hair-color": string
    };
    work: {
        "occupation": string;
        "base": string
    };
    connections: {
        "group-affiliation": string;
        "relatives": string
    };
    image: { "url": string }
}

export interface HeroSchema {
    data?: Hero;
    isLoading: boolean;
    selectedSection: HeroSection;
    error?: string
}