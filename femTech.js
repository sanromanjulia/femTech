console.log('femTech.js is loaded')

function plotData(){
        Plotly.d3.json ('https://data.cdc.gov/api/views/epev-k6ss/rows.json', function (err, fig) {
                var dt={}
                fig.data.map(function(d){
                        if(!dt[d[8]]){
                                dt[d[8]]={year:[],mortality:[]}
                        }
                        dt[d[8]].year.push(parseInt(d[9]))
                        dt[d[8]].mortality.push(parseFloat(d[10]))
                        //debugger;
                })

                data = Object.getOwnPropertyNames(dt).map(function(n){
                        return {
                               type: 'scatter',
                               mode: 'lines',
                               name: n+' mortality rate',
                               color: 'rgb',
                               x:dt[n].year,
                               y:dt[n].mortality 
                        }
                })
                
                 var layout = {
                         yaxis: {title: 'Mortality Rate'},
                         xaxis: {
                                 title: 'Year'
                         }
                 }
              
               Plotly.plot('mortGraph', data, layout, {showLink: true});

        });
}
/*
var mortData = 'https://data.cdc.gov/api/views/epev-k6ss/rows.json';
var fertData = 'https://data.cdc.gov/api/views/e6fc-ccez/rows.json';
var birthData =  'https://data.cdc.gov/api/views/g6qk-ngsf/rows.json';

 p1 = $.getJSON( mortData, function(dt){
         var year=[], mort=[]
         dt.data.forEach(function(r,i){
             year[i]=parseFloat(r[9])
             mortData[i]=parseFloat(r[10])
         });
         var n = year.slice(1).indexOf(year[0])
         var yr = year.slice(0,n+1)
         ft1= mortData.slice(0,n+1)
            
         ft2=mortData.slice(n+1,2*n)
 })
plotData = function(){
        var mortData = [neonatalMort, infantMort];
        var layout = {
                title: 'Infant and Neonatal Mortality',
                type: 'scatter',
                xaxis: {
                        title: 'year',
                        titlefont: {
                                family:'Open Sans'
                        },
                        color: 'red'
                },
                yaxis: {
                        title:'mortality rate',
                        titlefont: 'Open Sans',
                        color: 'blue'
                },

        };
        pt1 = Plotly.plot (mortGraph, mortData, layout);

     

}
/*

        p1 = $.getJSON( fertData, function(dt){
        //console.log('this after loadind the data',dt)
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
         
         
         pt1 = Plotly.plot( fertGraph, [
             {
                x:yr,
                y: ft1,
                name: 'births'},

             {
                x: yr,
                y: ft2,
                name: 'fertility rate'}
                ])
     
 })

  p1 = $.getJSON( birthData, function(dt){
         var year=[], birth=[]
         dt.data.forEach(function(r,i){
             year[i]=parseFloat(r[9])
             birth[i]=parseFloat(r[10])
         });
         var n = year.slice(1).indexOf(year[0])
         var yr = year.slice(0,n+1)
         ft1= birthData.slice(0,n+1)
            
         ft2= birthData.slice(n+1,2*n)
         
     //need to slice at each age group 

        
         pt1 = Plotly.plot( birthGraph, [
             {
                x:yr,
                y: ft1,
                name: 'Age 15-19'},
             {
                x: yr,
                y: ft2,
                name: 'Age 20-24'},
             {
                x: yr,
                y: ft3,
                name: 'Age 25-29'},
             {
                x: yr,
                y: ft4,
                name: 'Age 30-34'},
             {
                x: yr,
                y: ft5,
                name: 'Age 35-40'},
             {
                x: yr,
                y: ft6,
                name: 'Age Over 40'},
             {
                x: yr,
                y: ft7,
                name: 'Age Under 15'},
               ])
        
  })

*/

 plotData()

 
 // loading multiple urls

