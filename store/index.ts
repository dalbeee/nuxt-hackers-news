import { ActionTree, GetterTree } from "vuex/types/index";
import { getPosts } from "~/util/axios";

import { getAccessorType } from "typed-vuex";

export type RootState = ReturnType<typeof state>;

export interface State {
  posts: string[];
  pageNumber: number;
}

export const state = (): State => ({
  posts: [],
  pageNumber: 1
});

export const getters: GetterTree<RootState, RootState> = {
  // getPosts: (state: any) => state.posts
};

export const mutations = {
  getPosts: (state: State, payload: string) => {
    state.pageNumber += 1;
    state.posts.push(...payload);
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async api({ commit, state }) {
    const data = await getPosts(state.pageNumber);
    commit("getPosts", data);
    return { data };
  }
};

interface IPost {
  author: string;
  comment_text: any;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: any;
  points: number;
  story_id: any;
  story_text: string;
  story_title: any;
  story_url: any;

  title: string;
  url: any;
  _tags: string[];
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  }
});
