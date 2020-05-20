import { Reducer, Effect } from 'umi';
import { TradeItemDataType } from './data.d';
import { getBlotter } from './service';

export interface ModalState {
  list: TradeItemDataType[];
}

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    getBlotter: Effect;
    quotePrice: Effect;
    fillOrder: Effect;
  };
  reducers: {
    saveBlotter: Reducer<ModalState>;
    update: Reducer<ModalState>;
    delete: Reducer<ModalState>;
  };
}

const Model: ModelType = {
  namespace: 'trade',

  state: {
    list: [],
  },

  effects: {
    *getBlotter(_, { call, put }) {
      const response = yield call(getBlotter);
      console.log(response)
      yield put({
        type: 'saveBlotter',
        payload: response,
      });
    },
    // TODO: add these functions later
    *quotePrice({ payload }, { call, put }) {

    },
    *fillOrder({ payload }, { call, put }) {

    },
  },

  reducers: {
    saveBlotter(state, action) {
      return {
        ...(state as ModalState),
        list: action.payload || [],
      };
    },
    update(state, action) {
      return {
        ...(state as ModalState),
        list: action.payload || [],
      };
    },
    delete(state, action) {
      const list = (state as ModalState).list.filter(i => i.id != action.payload)
      return {
        ...(state as ModalState),
        list: list,
      };
    },
  },
};

export default Model;
