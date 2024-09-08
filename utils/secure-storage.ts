// import * as SecureStore from "expo-secure-store";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Platform } from "react-native";
// import createShopifyCart from "@/shopify/cart/create-cart";

// const isAndroidOrIos = Platform.OS === "android" || Platform.OS === "ios";

// export async function addToSecureStore(key: string, value: string) {
//   if (isAndroidOrIos) {
//     return await SecureStore.setItemAsync(key, value);
//   }
//   await AsyncStorage.setItem(key, value);
// }

// export async function getFromSecureStore(key: string) {
//   if (isAndroidOrIos) {
//     return await SecureStore.getItemAsync(key);
//   }
//   return await AsyncStorage.getItem(key);
// }

// export async function deleteFromSecureStore(key: string) {
//   if (isAndroidOrIos) {
//     await SecureStore.deleteItemAsync(key);
//     return;
//   }
//   AsyncStorage.removeItem(key);
// }

// export async function setAccessTokenInSecureStore(value: string) {
//   await addToSecureStore("accessToken", value);
// }

// export async function getAccessTokenFromSecureStore() {
//   return await getFromSecureStore("accessToken");
// }

// export async function deleteAccessTokenFromSecureStore() {
//   await deleteFromSecureStore("accessToken");
// }

// export async function setAppwriteUserIdInStore(value: string) {
//   await addToSecureStore("appwriteUserId", value);
// }

// export async function getAppwriteUserIdFromStore() {
//   return await getFromSecureStore("appwriteUserId");
// }

// export async function deleteAppwriteUserIdFromStore() {
//   await deleteFromSecureStore("appwriteUserId");
// }

// export async function setCartIdInStore(value: string) {
//   await addToSecureStore("cartId", value);
// }

// export async function getCartIdFromStore() {
//   const cartId = await getFromSecureStore("cartId");
//   if (!cartId) {
//     const newCart = await createShopifyCart();
//     await setCartIdInStore(newCart.id);
//     return newCart.id;
//   }
//   return cartId;
// }

// export async function deleteCardIdFromStore() {
//   return await deleteFromSecureStore("cartId");
// }

// export async function setWishlistInStorage(items: string[]) {
//   await AsyncStorage.setItem("wishlist", JSON.stringify(items));
//   return items;
// }

// export async function getWishlistFromStore() {
//   const wishlist = await AsyncStorage.getItem("wishlist");
//   if (!wishlist) return [];
//   return JSON.parse(wishlist) as string[];
// }
