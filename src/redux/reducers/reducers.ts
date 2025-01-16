import { CoinDetails, CoinMarket, MarketChart, SimplePrice, TrendingCoins } from "@/type";
import { SET_DATA, SET_DATA_BY_DAY, SET_DATA_BY_YEARLY, SET_SINGLE_COIN, SET_SINGLE_DATA, SET_SYMBOL, SET_TRENDING, SET_DATA_BY_DAYS } from "../actions/actions";

interface InitialState {
    data: CoinMarket[];
    simplePrice: SimplePrice;
    trending: TrendingCoins;
    daysData: MarketChart;
    dayData: MarketChart;
    yearlyData: MarketChart;
    singleCoin: CoinDetails
}
type ReducerAction =
    | { type: typeof SET_DATA; payload: CoinMarket[] }
    | { type: typeof SET_SINGLE_DATA; payload: SimplePrice }
    | { type: typeof SET_TRENDING; payload: TrendingCoins }
    | { type: typeof SET_DATA_BY_DAY; payload: MarketChart }
    | { type: typeof SET_DATA_BY_YEARLY; payload: MarketChart }
    | { type: typeof SET_SYMBOL; payload: string }
    | { type: typeof SET_SINGLE_COIN; payload: CoinDetails }
    | { type: typeof SET_DATA_BY_DAYS; payload: MarketChart };

const initialState: InitialState = {
    data: [],
    simplePrice: {},
    trending: {},
    daysData: {},
    dayData: {},
    yearlyData: {},
    singleCoin: {},

};

export const mainReducer = (state = initialState, action: ReducerAction): InitialState => {
    switch (action.type) {

        case SET_DATA:
            return { ...state, data: action.payload };

        case SET_SINGLE_DATA:
            return { ...state, simplePrice: action.payload };

        case SET_TRENDING:
            return { ...state, trending: action.payload };

        case SET_DATA_BY_DAY:

            return { ...state, dayData: action.payload };

        case SET_DATA_BY_YEARLY:
            return { ...state, yearlyData: action.payload };

        case SET_SINGLE_COIN:
            return { ...state, singleCoin: action.payload };

        case SET_DATA_BY_DAYS:
            return { ...state, daysData: action.payload }

        default:
            return state;
    }
};


