<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Customer Details</h2>
    </div>

    <!-- Name Section -->
    <form class="rounded-md border p-4" @submit.prevent="submitName">
      <h3 class="text-lg font-semibold">Name</h3>
      <div class="form-group">
        <label for="firstName" class="block text-sm font-medium text-gray-700"
          >First Name</label
        >
        <input
          type="text"
          id="firstName"
          v-model="form.firstName"
          :disabled="!editMode.name"
          class="mt-1 w-full rounded-md border border-gray-300 p-2"
          :class="{ 'bg-white': editMode.name, 'bg-gray-100': !editMode.name }"
        />
      </div>
      <div class="form-group">
        <label for="lastName" class="block text-sm font-medium text-gray-700"
          >Last Name</label
        >
        <input
          type="text"
          id="lastName"
          v-model="form.lastName"
          :disabled="!editMode.name"
          class="mt-1 w-full rounded-md border border-gray-300 p-2"
          :class="{ 'bg-white': editMode.name, 'bg-gray-100': !editMode.name }"
        />
      </div>
      <div class="mt-2 flex justify-end">
        <button
          v-if="!editMode.name"
          type="button"
          @click="toggleEditMode('name')"
          class="rounded bg-[#28574E] px-4 py-2 text-white transition hover:bg-[#2a7c5e]"
        >
          Edit
        </button>
        <button
          v-else
          type="submit"
          :disabled="isSubmitting.name"
          class="rounded bg-[#28574E] px-4 py-2 text-white transition hover:bg-[#2a7c5e] disabled:animate-pulse disabled:cursor-not-allowed"
        >
          {{ isSubmitting.name ? "Submitting..." : "Submit" }}
        </button>
        <button
          type="button"
          @click="toggleEditMode('name')"
          v-if="editMode.name"
          class="ml-2 rounded bg-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>

    <!-- Phone Section -->
    <form class="rounded-md border p-4" @submit.prevent="submitPhone">
      <h3 class="text-lg font-semibold">Phone</h3>
      <div class="form-group">
        <label for="phone" class="block text-sm font-medium text-gray-700"
          >Phone</label
        >
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          :disabled="!editMode.phone"
          class="mt-1 w-full rounded-md border border-gray-300 p-2"
          :class="{
            'bg-white': editMode.phone,
            'bg-gray-100': !editMode.phone,
          }"
        />
      </div>
      <div v-if="editMode.phone" class="form-group">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          type="password"
          id="password-for-phone"
          v-model="form.passwordForPhone"
          placeholder="**********"
          class="mt-1 w-full rounded-md border border-gray-300 bg-white p-2"
        />
      </div>
      <div class="mt-2 flex justify-end">
        <button
          v-if="!editMode.phone"
          type="button"
          @click="toggleEditMode('phone')"
          class="rounded bg-[#28574E] px-4 py-2 text-white transition hover:bg-[#2a7c5e]"
        >
          Edit
        </button>
        <button
          v-else
          type="submit"
          :disabled="isSubmitting.phone"
          class="rounded bg-[#28574E] px-4 py-2 text-white transition hover:bg-[#2a7c5e] disabled:animate-pulse disabled:cursor-not-allowed"
        >
          {{ isSubmitting.phone ? "Submitting..." : "Submit" }}
        </button>
        <button
          type="button"
          @click="toggleEditMode('phone')"
          v-if="editMode.phone"
          class="ml-2 rounded bg-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>

    <!-- Password Section -->
    <form class="rounded-md border p-4" @submit.prevent="submitPassword">
      <h3 class="text-lg font-semibold">Password</h3>
      <div class="form-group">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >New Password</label
        >
        <input
          type="password"
          id="password"
          v-model="form.password"
          :disabled="!editMode.password"
          placeholder="**********"
          class="mt-1 w-full rounded-md border border-gray-300 p-2"
          :class="{
            'bg-white': editMode.password,
            'bg-gray-100': !editMode.password,
          }"
        />
      </div>
      <div class="form-group">
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Old Password</label
        >
        <input
          type="password"
          id="confirmPassword"
          v-model="form.oldPassword"
          placeholder="**********"
          :disabled="!editMode.password"
          class="mt-1 w-full rounded-md border border-gray-300 p-2"
          :class="{
            'bg-white': editMode.password,
            'bg-gray-100': !editMode.password,
          }"
        />
      </div>
      <div class="mt-2 flex justify-end">
        <button
          v-if="!editMode.password"
          type="button"
          @click="toggleEditMode('password')"
          class="rounded bg-[#28574E] px-4 py-2 text-white transition hover:bg-[#2a7c5e]"
        >
          Edit
        </button>
        <button
          v-else
          type="submit"
          :disabled="isSubmitting.password"
          class="rounded bg-[#28574E] px-4 py-2 text-white transition hover:bg-[#2a7c5e] disabled:animate-pulse disabled:cursor-not-allowed"
        >
          {{ isSubmitting.password ? "Submitting..." : "Submit" }}
        </button>
        <button
          type="button"
          @click="toggleEditMode('password')"
          v-if="editMode.password"
          class="ml-2 rounded bg-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>

    <!-- Email Section -->
    <form class="rounded-md border p-4" @submit.prevent>
      <h3 class="text-lg font-semibold">Email</h3>
      <div class="form-group">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="user.email"
          disabled
          class="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  updateUserName,
  updatePassword,
  updateUserPhone,
} from "~/appwrite/user";

const { user } = defineProps(["user"]);

const form = ref({
  firstName: user.firstName || "",
  lastName: user.lastName || "",
  password: "",
  oldPassword: "",
  phone: user.phone || "",
  passwordForPhone: "",
});

const editMode = ref<any>({
  name: false,
  phone: false,
  password: false,
});

const isSubmitting = ref<{ name: boolean; phone: boolean; password: boolean }>({
  name: false,
  phone: false,
  password: false,
});

const toggleEditMode = (section: any) => {
  editMode.value[section] = !editMode.value[section];
};

const submitName = async () => {
  isSubmitting.value.name = true;
  try {
    await updateUserName(form.value);
    alert("Successfully updated the name of the user.");
    toggleEditMode("name");
  } catch (error: any) {
    alert(error.message);
  } finally {
    isSubmitting.value.name = false;
  }
};

const submitPhone = async () => {
  isSubmitting.value.phone = true;
  try {
    await updateUserPhone(form.value);
    alert("Successfully updated the phone of the user.");
    toggleEditMode("phone");
  } catch (error: any) {
    alert(error.message);
  } finally {
    isSubmitting.value.phone = false;
  }
};

const submitPassword = async () => {
  isSubmitting.value.password = true;
  try {
    await updatePassword(form.value);
    alert("Successfully updated the password of the user.");
    toggleEditMode("password");
    form.value.oldPassword = "";
    form.value.password = "";
  } catch (error: any) {
    alert(error.message);
  } finally {
    isSubmitting.value.password = false;
  }
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>
