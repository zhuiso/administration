// +----------------------------------------------------------------------
// | Dscription:  The file is part of Zs
// +----------------------------------------------------------------------
// | Author: showkw <showkw@163.com>
// +----------------------------------------------------------------------
// | CopyRight: (c) 2018 zhuiso.com
// +----------------------------------------------------------------------

import Vue from 'vue';

export const debug = (state, payload) => {
    state.debug = payload;
};

export const design = (state, payload) => {
    state.design = payload;
};

export const loading = (state, payload) => {
    state.loading = payload;
};

export const navigation = (state, payload) => {
    state.navigation = payload;
};

export const page = (state, payload) => {
    state.page = payload;
};

export const refresh = (state, payload) => {
    state.refresh = payload;
};

export const script = (state, payload) => {
    state.script = payload;
};

export const setting = (state, payload) => {
    state.setting = payload;
};

export const sidebar = (state, payload) => {
    state.sidebar = payload;
};

export const single = (state, payload) => {
    Vue.set(state.setting, payload.key, payload.value);
};

export const stylesheet = (state, payload) => {
    state.stylesheet = payload;
};

export const title = (state, payload) => {
    state.title = payload;
    global.document.title = payload;
};

export const token = (state, payload) => {
    window.localStorage.setItem('token', payload);
    state.token = payload;
};

export const username = (state, payload) => {
    state.username = payload;
};