<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="home container max-w-full bg-white sm:px-52 pt-5">
    <div class=" mb-5 grid grid-cols-3 divide-x-2 divide-white rounded-lg p-2 bg-[#D5B895] text-white">
      <div className="px-4 py-2 col-span-2">
        <h1 className="text-2xl">Promotion</h1> <hr className="border border-white my-2"/>
        <p> โปรโมชั่นซื้อหนังสือHarry Potterที่ร้าน BookStore ทุกภาคทั้ง7เล่ม</p>
        <h1>{{ id }}</h1>
        <ul className="list-disc list-inside space-y-1 px-5">
            <li>ซื้อเล่มไม่ซํ้ากัน2เล่ม ลด 10% ของทั้ง2เล่ม</li>
            <li>ซื้อเล่มไม่ซํ้ากัน3เล่ม ลด 20% ของทั้ง3เล่ม</li>
            <li>ซื้อเล่มไม่ซํ้ากัน4เล่ม ลด 30% ของทั้ง4เล่ม</li>
            <li>ซื้อเล่มไม่ซํ้ากัน5เล่ม ลด 40% ของทั้ง5เล่ม</li>
            <li>ซื้อเล่มไม่ซํ้ากัน6เล่ม ลด 50% ของทั้ง6เล่ม</li>
            <li>ซื้อเล่มไม่ซํ้ากัน7เล่ม ลด 60% ของทั้ง7เล่ม</li>
        </ul>
      </div>
      <div class="px-4 py-2">
          <h1 class="text-2xl">Cart</h1> <hr className="border border-white my-2"/>
          <div v-for="showBook in cartToChild" :key="showBook.id" >
            <div class="flex justify-between">
              <h1> {{showBook.title}} </h1>
              <h1> x {{ showBook.amount }} เล่ม</h1>

            </div>
          </div>          
            <p class="flex justify-end">ราคา {{ priceToChild }} THB</p> 
      </div>
    </div>
    <div>
      <h1 class="text-xl">All Products</h1> <hr class="border border-black mb-5" />
    </div>
    <div class=" grid sm:grid-cols-4 grid-cols-2 gap-4">
      <div v-for="itemBook of bookToChild" :key="itemBook.id" class="bg-slate-200 rounded-lg flex flex-col">
          <img :src="itemBook.image" class="rounded-t-lg"/>
          <div class="text-base space-y-2 mb-2">
            <p class="text-center">{{ itemBook.title }}</p> <hr class="mx-2 border border-slate-500"/>
            <p class="text-end pr-3">{{ itemBook.value }} THB</p>
          </div>
          <div class="flex justify-center">
            <!-- <button @click="addToCart(itemBook)" class="bg-green-500 py-2 px-5 mb-2 rounded-lg">Add to Cart</button> -->
            <button @click="addtoCartFromChild(itemBook)" class="bg-green-500 py-2 px-5 mb-2 rounded-lg">Add to Cart</button>
          </div>
      </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    title: 'List',
    props: ['bookToChild','cartToChild','priceToChild','id'],
    data(){
      return{
      }
    },
    methods:{
      addtoCartFromChild(itemBook){
        // this.id
        this.$emit('addCart',itemBook)
        // console.log(itemBook,'test5555')
      },
    },
  }
  </script>
  <style>
  </style>
           