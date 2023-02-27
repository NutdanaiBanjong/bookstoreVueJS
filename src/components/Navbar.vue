<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class=" bg-[#D5B895] px-80 py-5 text-white">
        <div class="flex space-x-56">
          <h1 class="text-2xl">
            <router-link class="focus:underline" to="/">BookStore</router-link>
          </h1>
          <ul class="flex space-x-20 text-xl">
							<li><router-link class=" focus:underline" to="/home/list">Home</router-link> </li>
							<li><router-link class=" focus:underline" to="/home/checkout">Checkout</router-link></li>
              <li><router-link class=" focus:underline" to="/author">Author</router-link></li>
          </ul>
        </div>
    </nav>
</template>
<script>
export default {
    title: 'Navbar',
}
</script>