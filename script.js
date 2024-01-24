let url="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
async function entryData(){
    // fetch(url)
    // .then((res)=>res.json())
    // .then((data)=>{
    //     console.log(data)
    //     console.table(data)
    // })
   let response= await fetch(url)
   let data=await response.json()
   console.log(data)
   console.table(data)
   var id=1
   
   for(var i=0;i<9;i++){

   }
   display(data,id)
   function display(data,id){
    
   }
}