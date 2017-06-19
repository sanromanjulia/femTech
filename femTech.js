console.log('helloWold.js is loaded')

x.onkeyup=y.onkeyup=function(ev){
    //if(ev.key=='Enter'){
        z.textContent=parseFloat(x.value)+parseFloat(y.value)
        //console.log('Enter was pressed for '+this.id+' at '+Date()+' and the value was '+this.value)
    //}
}

// playing with Plot.ly
/*
$.getJSON('https://data.cdc.gov/api/views/epev-k6ss/rows.json',function(dt){
    console.log('this after loadind the data',dt)
     var year=[], fert=[]
     dt.data.forEach(function(r,i){
         //console.log(r[10],r[9])
         year[i]=parseFloat(r[9])
         fert[i]=parseFloat(r[10])
     });
     pt = Plotly.plot( lala, [{
         x:year,
         y: fert }]
               

      )
      4
})
*/
plotData = function(){
    $.getJSON('https://data.cdc.gov/api/views/epev-k6ss/rows.json',function(dt){
        console.log('this after loadind the data',dt)
         var year=[], fert=[]
         dt.data.forEach(function(r,i){
             //console.log(r[10],r[9])
             year[i]=parseFloat(r[9])
             fert[i]=parseFloat(r[10])
         });
         var n = year.slice(1).indexOf(year[0])
         var yr = year.slice(0,n+1)
         ft1= fert.slice(0,n+1)
            
         ft2=fert.slice(n+1,2*n)
         

         pt1 = Plotly.plot( lala, [
             {
                x:yr,
                y: ft1,
                name: 'Infant Mortality'},

             {
                x: yr,
                y: ft2,
                name: 'Neonatal Mortality'}
                ])
              

           
          
     })
 }
 plotData()
 console.log('is this before of after?')
