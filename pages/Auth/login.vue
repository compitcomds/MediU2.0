<template>
    <div>
        Login
        <input name="email" id="email" class="form-control" placeholder="Email Address" type="email"
        v-model="formData.email" required />
        <input name="password" id="password" placeholder="Password"
                      type="password" v-model="formData.password" required />
                    

    </div>
</template>

<script setup>

import { loginUser } from "/appwrite/auth";

// import loginUser

const router = useRouter();

const formData = useState("login-form", () => ({
  email: "",
  password: "",
}));

const submitForm = async () => {
  try {
    await loginUser(formData.value);
    await router.replace("/dashboard/profile");
  } catch (error) {
    alert(`${error.message}`);
  }
};

</script>