import { takeEvery } from "redux-saga/effects";
import { GET_DATA, GET_DATA_BY_DAY, GET_SINGLE_COIN, GET_SINGLE_DATA, GET_TRENDING } from "../actions/actions";
import { fetchDataSaga, getSingleCoinHandler, getSingleDataHanlder, getTrendingHandler, getDataByDaysHandler } from "./getHandlers";


export function* rootSaga() {
    yield takeEvery(GET_DATA, fetchDataSaga);
    yield takeEvery(GET_SINGLE_DATA, getSingleDataHanlder)
    yield takeEvery(GET_TRENDING, getTrendingHandler)
    yield takeEvery(GET_DATA_BY_DAY, getDataByDaysHandler)
    yield takeEvery(GET_SINGLE_COIN, getSingleCoinHandler)
}