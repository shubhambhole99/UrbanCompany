

let left = document.getElementById('left');
let right = document.getElementById('right');
let thiimg = document.getElementById('thiimg');

left.onclick=()=>{
    thiimg.innerHTML=`
    
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667386493900-1d5e09.jpeg">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/partner-app-supply/1667472964177-812867.jpeg">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg">

    `
   
thiimg = document.getElementById('thiimg');

}
right.onclick=()=>{


 thiimg.innerHTML=`
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg">
   <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667544806430-20fdbb.jpeg">
   `



}
let nav = document.getElementById('try1');
window.addEventListener("scroll",()=>{
    x=window.scrollY
    if(x>=600){

nav.id="try"
nav = document.getElementById('try');
    }
   else{
    nav.id="try1"
    nav = document.getElementById('try1');
   }
})


const play=()=>{
    let cities=[
        "Serving In","USA","Austin","Washington","New York","Dallas","IND","Mumbai","Delhi","Kolkata","Bengaluru","Chennai","Hyderabad","Ahmedabad","Pune","Surat","Jaipur","Lucknow","Bhopal","Kanpur","Patna","Indore","Kochi","Nagpur","Chandigarh","Ghaziabad","Rajkot","Thane","Vishakapatnam","Agra","Thiruvananthapuram","Guwahati","Vadodara","Bhubaneswar","Srinagar","Meerut","Nashik","Varanasi","Raipur","Allahabad","Pimpri-Chinchwad","Aurangabad","Ludhiana","Faridabad","Gurgaon","Amritsar","Ranchi","Noida","Jabalpur","Bareilly","Kalyan-Dombivli","Vasai-Virar","Coimbatore","Vijayawada","Navi Mumbai","Gwalior","Madurai","UAE","Abu Dabhi","Dubai","Sharjah","AUS","Melbourne","Sydney","SGP","Singapore","KSA","Jeddah","Riyadh"    
    ]
    let links = [
        'About Us','UC Impacts','Terms & Conditions','Privacy Policy','Interest-based Advertising','Anti Discrimination Policy','Partner Welfare Policy','Blog','Reviews','Near Me','Careers','Gift Cards','Contact Us','Quicks Links'
    ];
    links.forEach(function(el){
        let sp = document.createElement("span");
        sp.innerHTML = el;
        document.querySelector("#links_disp").append(sp);
    }) 
    cities.forEach(function(el){
        let sp = document.createElement("span");
        sp.innerHTML = el;
        if(el=="Serving In" || el=="USA" || el=="IND" || el== "KSA" || el=="UAE" || el=="AUS")
        {
            sp.style.display= "block"
            sp.style.fontSize = "20px"
            sp.style.marginTop= "20px"
            sp.style.cursor = "none"
        }
        document.querySelector("#cities_disp").append(sp);
    })
}

play()




// next four
// <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg">
// <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg">
// <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg">
// <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667544806430-20fdbb.jpeg">