export interface CoinMarket {
    id?: string;
    symbol?: string;
    name?: string;
    image?: string;
    current_price?: number;
    market_cap?: number;
    market_cap_rank?: number;
    fully_diluted_valuation?: number;
    total_volume?: number;
    high_24h?: number;
    low_24h?: number;
    price_change_24h?: number;
    price_change_percentage_24h?: number;
    market_cap_change_24h?: number;
    market_cap_change_percentage_24h?: number;
    circulating_supply?: number;
    total_supply?: number;
    max_supply?: number;
    ath?: number;
    ath_change_percentage?: number;
    ath_date?: string;
    atl?: number;
    atl_change_percentage?: number;
    atl_date?: string;
    roi?: {
        times?: number;
        currency?: string;
        percentage?: number;
    };
    last_updated?: string;
};

export interface SimplePrice {
    [coinId: string]: {
        usd?: number;
        inr?: number;
        usd_24h_change?: number;
        inr_24h_change?: number;
    };
};

export interface Data {
    price: number;
    price_btc: string;
    price_change_percentage_24h: { [currency: string]: number };
    sparkline: string
}

export interface Item {
    id?: string;
    coin_id?: number;
    name?: string;
    symbol?: string;
    market_cap_rank?: number;
    thumb?: string;
    small?: string;
    large?: string;
    slug?: string;
    price_btc?: number;
    score?: number;
    data: Data
}
export interface Coins {
    item?: Item;
}

export interface TrendingCoins {
    coins?: Coins[];
}

export interface MarketChart {
    prices?: [number, number][];
    market_caps?: [number, number][];
    total_volumes?: [number, number][];
}

export interface Links {
    homepage?: string[];
    blockchain_site?: string[];
    official_forum_url?: string[];
    twitter_screen_name?: string;
    facebook_username?: string;
    subreddit_url?: string;
}

export interface Image {
    thumb?: string;
    small?: string;
    large?: string;
}



export interface MarketData {
    current_price?: { [currency: string]: number };
    market_cap?: { [currency: string]: number };
    total_volume?: { [currency: string]: number };
    price_change_percentage_24h?: number;
    price_change_percentage_7d?: number;
    price_change_percentage_14d?: number;
    price_change_percentage_30d?: number;
    price_change_percentage_1y?: number;
    low_24h?: { [currency: string]: number };
    high_24h?: { [currency: string]: number };
    ath?: { [currency: string]: number };
    atl?: { [currency: string]: number };
    atl_date?: { [currency: string]: string };
    ath_date?: { [currency: string]: string };
    circulating_supply: number;
    max_supply: number;
}

export interface CommunityData {
    facebook_likes?: number;
    twitter_followers?: number;
    reddit_average_posts_48h?: number;
    reddit_average_comments_48h?: number;
    reddit_subscribers?: number;
}

export interface DeveloperData {
    forks?: number;
    stars?: number;
    subscribers?: number;
    total_issues?: number;
    closed_issues?: number;
    pull_requests_merged?: number;
    pull_request_contributors?: number;
}

export interface CoinDetails {
    id?: string;
    symbol?: string;
    market_cap_rank?: number;
    name?: string;
    description?: { [language: string]: string };
    links?: Links;
    image?: Image;
    market_data?: MarketData;
    community_data?: CommunityData;
    developer_data?: DeveloperData;
    last_updated?: string;

}


export interface GetDefaultMiddlewareOptions {
    thunk?: boolean;
    immutableCheck?: boolean;
    serializableCheck?: boolean;
}