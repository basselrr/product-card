

const app = Vue.createApp({

    
    data(){

        return {
            product:'Socks',
           selectedVariant:0,
            outOfStockImage:"image/out-of-stock.jpg",
            cart :0,
            details:['50% coton','40% silk','2% polyster','8% fiber'],
            
            variants:[
                {id:1236, color:'blue', image:"image/blue-sucks.JPG",altt:"Blue Sucks Image ",qty:6,sale:true},
                {id:1658, color:'green', image:"image/green-sucks.JPG",alt:"Green Sucks Image ",qty:12,sale:false},
                {id:1236, color:'red', image:"image/blue-sucks.JPG",altt:"red Sucks Image ",qty:0,sale:false},
            ],
            sizes:['S','M','L'],
            
            brand:"BOSS",
          
           


        }
    },
    methods :{
        addToCart(){
            if (this.cart < this.variants[this.selectedVariant].qty){
                
           this.cart += 1

            }
            
            else inStock=false
        },
        updateVariant(index){
            this.selectedVariant = index

          



        }



    },
    computed:{
        title(){
           return this.brand+' '+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].qty
            
                 
        },
       

       
    }

})

app.mount("#app")
