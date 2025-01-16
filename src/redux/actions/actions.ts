import { UnknownAction } from "redux";

export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';
export const GET_SINGLE_DATA = 'GET_SINGLE_DATA';
export const SET_SINGLE_DATA = 'SET_SINGLE_DATA';
export const GET_TRENDING = "GET_TRENDING";
export const SET_TRENDING = "SET_TRENDING";
export const SET_SYMBOL = 'SET_ID';
export const GET_DATA_BY_DAY = 'GET_DATA_BY_DAY';
export const SET_DATA_BY_DAY = 'SET_DATA_BY_DAY';
export const GET_DATA_BY_YEARLY = 'GET_DATA_BY_YEARLY';
export const SET_DATA_BY_YEARLY = "SET_DATA_BY_YEARLY";
export const GET_SINGLE_COIN = "GET_SINGLE_COIN";
export const SET_SINGLE_COIN = "SET_SINGLE_COIN";
export const GET_TRADES = "GET_TRADES";
export const SET_TRADES = "SET_TRADES";
export const GET_DATA_BY_DAYS = 'GET_DATA_BY_DAYS';
export const SET_DATA_BY_DAYS = 'SET_DATA_BY_DAYS';
export interface GetData {
    type: string;

}

export type ApiActionTypes = GetData

export const getData = (): UnknownAction => {

    return (
        {
            type: GET_DATA
        }
    );
}

export const getSingleData = (payload: string): UnknownAction => {
    return (
        {
            type: GET_SINGLE_DATA,
            payload
        }
    );
}
export const getTrending = (): UnknownAction => {
    return (
        { type: GET_TRENDING }
    )
}


export const getDataByDays = (payload: { days: number, coins: string | string[] }): UnknownAction => {
    return (
        {
            type: GET_DATA_BY_DAY,
            payload
        }
    )
}

export const getSingleCoins = (payload: string) => {
    return (
        {
            type: GET_SINGLE_COIN,
            payload
        }
    )
}

export const getTrades = (payload: string) => {
    return ({
        type: GET_TRADES,
        payload
    })
}