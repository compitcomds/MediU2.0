import { defineStore } from "pinia";
import { getUser } from "~/appwrite/auth";
import createShopifyCart from "~/shopify/cart/create-cart";
import updateUserWishlist from "~/appwrite/wishlist/update-user-wishlist";
import { getUserDocument } from "~/appwrite/user-document";
import { type Models } from "appwrite";

export const useUserStore = defineStore("userStore", {
  state: (): {
    shopifyCartId: null | string;
    wishlist: string[];
    user: Models.User<Models.Preferences> | null;
    isAuthenticated: boolean;
  } => ({
    shopifyCartId: "",
    wishlist: [],
    isAuthenticated: false,
    user: null,
  }),

  actions: {
    setShopifyCartId(newCartId: string) {
      this.shopifyCartId = newCartId;
    },

    async getShopifyCartId() {
      if (!this.shopifyCartId) return await this.createNewCart();
      return this.shopifyCartId;
    },

    async toggleFromWishlist(handle: string, type: "product" = "product") {
      const id = `${type}.${handle}`;
      this.wishlist = toggleElementFromArray(this.wishlist, id);
      await updateUserWishlist(this.wishlist);
    },

    isItemInWishlist(handle: string, type: "product" = "product") {
      const id = `${type}.${handle}`;
      return this.wishlist.includes(id);
    },

    async checkAuthenticated() {
      try {
        this.user = await getUser();
        this.isAuthenticated = true;
      } catch (error) {
        this.isAuthenticated = false;
      }
    },

    async loadWishlist() {
      try {
        if (!this.user?.$id) throw new Error("User not logged in");
        const userDoc = await getUserDocument(this.user.$id);
        this.wishlist = userDoc.wishlist;
      } catch (error) {
        console.error(error);
      }
    },

    async initialiseUserStore() {
      await this.checkAuthenticated();
      await this.loadWishlist();
    },

    async createNewCart() {
      const newCart = await createShopifyCart();
      this.shopifyCartId = newCart.id;
      return newCart.id;
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
