import {takeEvery} from "redux-saga/effects"

import {sagas as home } from "../pages/home/index"


let {GETLIST}=home.types


function* sagas() {


    yield takeEvery(GETLIST,home.action)
    
}

export default sagas