 let store= document.getElementById("counter_k");


let timeout;
let flag=1;

function counter_start(){
    if(flag==1){
        $(document).ready(function(){
            $('#count-example1').jQuerySimpleCounter({
    
            // start number
                start:  0,
    
            // end number
                end:    75,
    
            // easing effect
                easing: 'swing',
    
            // duration time in ms
                duration: 5000,
           });

           $('#count-example2').jQuerySimpleCounter({
    
            // start number
                start:  0,
    
            // end number
                end:    110,
    
            // easing effect
                easing: 'swing',
    
            // duration time in ms
                duration: 6200,
           });

           $('#count-example3').jQuerySimpleCounter({
    
            // start number
                start:  0,
    
            // end number
                end:    59,
    
            // easing effect
                easing: 'swing',
    
            // duration time in ms
                duration: 3600,
           });

           $('#count-example4').jQuerySimpleCounter({
    
            // start number
                start:  0,
    
            // end number
                end:    51,
    
            // easing effect
                easing: 'swing',
    
            // duration time in ms
                duration: 5500,
           });
        })
    }
    flag=0;
}
window.addEventListener("scroll",function(){
    if(window.pageYOffset>2700){
            store.style.opacity="1";
            timeout= setTimeout(counter_start,10); 
    }
    
    else{
       clearTimeout(timeout);
    }
})


    