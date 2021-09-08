import * as actionTypes from "./types";
import { request } from "@/request";

export const crud = {
  resetState: () => async (dispatch) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },
  resetAction: (actionType) => async (dispatch) => {
    dispatch({
      type: actionTypes.RESET_ACTION,
      keyState: actionType,
      payload: null,
    });
  },
  currentItem: (data) => async (dispatch) => {
    dispatch({
      type: actionTypes.CURRENT_ITEM,
      payload: { ...data },
    });
  },
  currentAction: (actionType, data) => async (dispatch) => {
    dispatch({
      type: actionTypes.CURRENT_ACTION,
      keyState: actionType,
      payload: { ...data },
    });
  },
  banner: (entity) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "banner",
      payload: null,
    });
    
    let data = await request.get(entity);
    if (data.success === true) {
      const result = {
        items: data.result
      };
      console.log(result);
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "banner",
        payload: result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "banner",
        payload: null,
      });
    }
  },
  category: (entity) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "category",
      payload: null,
    });
    
    let data = await request.get(entity);
    console.log("DATA CATEGORY:",data);
    if (data.success === true) {
      const result = {
        items: data.result,
      };
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "category",
        payload: result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "category",
        payload: null,
      });
    }
  },
  brandWithProduct: (entity) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "brandWithProduct",
      payload: null,
    });
    
    let data = await request.get(entity);
    if (data.success === true) {
      const result = {
        items: data.result,
      };
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "brandWithProduct",
        payload: result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "brandWithProduct",
        payload: null,
      });
    }
  },
  brand: (entity) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "brand",
      payload: null,
    });
    
    let data = await request.get(entity);
    if (data.success === true) {
      const result = {
        items: data.result,
      };
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "brand",
        payload: result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "brand",
        payload: null,
      });
    }
  },
  create: (entity, jsonData) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "create",
      payload: null,
    });
    console.log("jsonData action redux", jsonData);
    let data = await request.create(entity, jsonData);
    console.log(data);
    if (data.success === true) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "create",
        payload: data.result,
      });

      dispatch({
        type: actionTypes.CURRENT_ITEM,
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "create",
        payload: null,
      });
    }
  },
  read: (entity, itemId) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "read",
      payload: null,
    });

    let data = await request.read(entity, itemId);

    if (data.success === true) {
      dispatch({
        type: actionTypes.CURRENT_ITEM,
        payload: data.result,
      });
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "read",
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "read",
        payload: null,
      });
    }
  },
  update: (entity, itemId, jsonData) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "update",
      payload: null,
    });

    let data = await request.update(entity, itemId, jsonData);

    if (data.success === true) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "update",
        payload: data.result,
      });
      dispatch({
        type: actionTypes.CURRENT_ITEM,
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "update",
        payload: null,
      });
    }
  },

  delete: (entity, itemId) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "delete",
      payload: null,
    });

    let data = await request.delete(entity, itemId);

    if (data.success === true) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "delete",
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "delete",
        payload: null,
      });
    }
  },

  search: (entity, source, option) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: "search",
      payload: null,
    });

    source.cancel();

    source = request.source();
    let data = await request.search(entity, source, option);

    if (data.success === true) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: "search",
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: "search",
        payload: null,
      });
    }
  },
};
