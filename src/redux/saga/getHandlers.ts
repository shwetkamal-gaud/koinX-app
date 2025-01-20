import { call, put } from 'redux-saga/effects';
import { SET_DATA, SET_DATA_BY_DAY, SET_DATA_BY_YEARLY, SET_SINGLE_COIN, SET_SINGLE_DATA, SET_TRENDING } from '../actions/actions'
import { getRequest, getSingleCoinRequest, getSingleRequest, getTrendingRequest, getDataForDaysRequest } from './getRequests';
import { SagaIterator } from 'redux-saga';

export function* fetchDataSaga(): SagaIterator {
    try {
        const response = yield call(getRequest);
        yield put({ type: SET_DATA, payload: response });
    } catch (error) {
        console.log(error);
    }
}

export function* getSingleDataHanlder(action: { type: string, payload: string }): SagaIterator {
    try {
        const response = yield call(getSingleRequest, action.payload)
        console.log('single', response)
        yield put({ type: SET_SINGLE_DATA, payload: response });
    }
    catch (error) {
        console.log(error);
    }
}

export function* getTrendingHandler(): SagaIterator {
    try {
        const response = yield call(getTrendingRequest)

        yield put({ type: SET_TRENDING, payload: response });
    }
    catch (error) {
        console.log(error);
    }

}

export function* getDataByDaysHandler(action: { type: string, payload: string }): SagaIterator {
    try {
        const response = yield call(getDataForDaysRequest, action.payload)
        yield put({ type: SET_DATA_BY_DAY, payload: response.oneDayData });
        yield put({ type: SET_DATA_BY_YEARLY, payload: response.yearlyData });
    }
    catch (error) {
        console.log(error);
    }

}


export function* getSingleCoinHandler(action: { type: string, payload: string }): SagaIterator {
    try {
        const response = yield call(getSingleCoinRequest, action.payload)

        yield put({ type: SET_SINGLE_COIN, payload: response });
    }
    catch (error) {
        console.log(error);
    }

}

// export function* getTradesHandler(action: any): SagaIterator {
//     try {
//         const response = yield call(getTradesRequests, action.payload)

//         yield put({ type: SET_TRADES, payload: response });
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

