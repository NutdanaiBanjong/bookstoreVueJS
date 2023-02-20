<template>
  <div class="checkout bg-white px-52">
	<div class="px-4 py-2 bg-[#D5B895] mt-5 rounded-lg">
          <h1 class="text-2xl">Cart</h1> <hr className=" my-2"/>
          <div v-for="showBook in cartToChild" :key="showBook.id" >
            <div class="flex justify-between">
              <h1> {{showBook.title}} </h1>
              <h1> x {{ showBook.amount }} เล่ม</h1>
            </div>
          </div>          
            <p class="flex justify-end">ราคา {{ priceToChild }} THB</p> 
      </div>
  </div>
</template>

<script>
export default {
    title: 'checkout',
	props:["cartToChild","priceToChild"],
}
</script>

