<template>
     <div>
      <header>
        <Navbar />
      </header>
      <div class="body">
        <router-view  
        :bookToChild="bookData" 
        :cartToChild="cart"
        :priceToChild="priceTotal"       
        @addCart="addToCart" 
        ></router-view> 
      </div>
      <footer>
      </footer>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  title: 'App',
  data(){
    return{
        bookData : [
        { id: 1, title: 'แฮร์รี่พอตเตอร์กับศิลาอาถรรพ์',image:require('./assets/Harry1.jpg'),value:100,amount:0},
        { id: 2, title: 'แฮร์รี่พอตเตอร์กับห้องแห่งความลับ',image:require('./assets/Harry2.jpg'),value:100,amount:0},
        { id: 3, title: 'แฮร์รี่พอตเตอร์กับนักโทษแห่งอัซคา..',image:require('./assets/Harry3.jpg'),value:100,amount:0 },
        { id: 4, title: 'แฮร์รี่พอตเตอร์กับถ้วยอัคนี',image:require('./assets/Harry4.jpeg'),value:100,amount:0},
        { id: 5, title: 'แฮร์รี่พอตเตอร์กับภาคีนกฟีนิกซ์',image:require('./assets/Harry5.jpeg'),value:100,amount:0 },
        { id: 6, title: 'แฮร์รี่พอตเตอร์กับเจ้าชายเลือดผสม',image:require('./assets/Harry6.jpeg'),value:100,amount:0 },
        { id: 7, title: 'แฮร์รี่พอตเตอร์กับเครื่องรางยมทูต',image:require('./assets/Harry7.jpeg'),value:100,amount:0}
      ],
      cart: [],
      priceFull :0,
      // priceTotal :0,
    }
  },
  components:{
    Navbar,
  },
  methods:{
    addToCart(itemBook){
      const findBook =  this.cart.findIndex(book => book.id === itemBook.id) // ค้นหาตําแหน่ง index 
            // console.log('ตําแหน่งindex' , findBook) // = -1 
        if (findBook < 0) {  // ถ้า ตําแหน่ง index น้อยกว่า 0 
          // console.log('เล่มแรก')     
          itemBook['amount'] = itemBook.amount + 1 // .amount +1
          this.cart.push(itemBook) // push ตัวแปรเข้า cart array
        }
        else { // ถ้า ตําแหน่ง index มากกว่า 0
          // console.log('เล่มต่อไป')
          this.cart[findBook].amount = this.cart[findBook].amount + 1 // amount ในตําแหน่ง index นั้นจะ +1
        }
        // console.log(this.cart,'ตะกร้า')
        this.priceFull = itemBook.value + this.priceFull 
        // console.log(this.price)
      },
      minDuplicateBooks() {
        let min = Number.MAX_SAFE_INTEGER; 
        this.cart.forEach((element) => {  
          if (element.amount < min) min = element.amount;  
        });
        return min; 
      },
  },
  computed: {
       discountCal() {
        let discount = 0;
        const uniqueSubjectCount = this.cart.length; 
        // console.log(uniqueSubjectCount,"test") 
        const discountPercent = (uniqueSubjectCount - 1) * 10; 
        discount = discountPercent * uniqueSubjectCount; 
        const min = this.minDuplicateBooks();
        console.log(discount,"ส่วนลด")
        return discount * min; 
      },
      priceTotal(){
        return this.priceFull - this.discountCal
      }
    }
}
</script>

<style>
</style>
         