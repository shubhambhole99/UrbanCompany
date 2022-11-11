const play = () => {
    let cities = [
        "Serving In", "USA", "Austin", "Washington", "New York", "Dallas", "IND", "Mumbai", "Delhi", "Kolkata", "Bengaluru", "Chennai", "Hyderabad", "Ahmedabad", "Pune", "Surat", "Jaipur", "Lucknow", "Bhopal", "Kanpur", "Patna", "Indore", "Kochi", "Nagpur", "Chandigarh", "Ghaziabad", "Rajkot", "Thane", "Vishakapatnam", "Agra", "Thiruvananthapuram", "Guwahati", "Vadodara", "Bhubaneswar", "Srinagar", "Meerut", "Nashik", "Varanasi", "Raipur", "Allahabad", "Pimpri-Chinchwad", "Aurangabad", "Ludhiana", "Faridabad", "Gurgaon", "Amritsar", "Ranchi", "Noida", "Jabalpur", "Bareilly", "Kalyan-Dombivli", "Vasai-Virar", "Coimbatore", "Vijayawada", "Navi Mumbai", "Gwalior", "Madurai", "UAE", "Abu Dabhi", "Dubai", "Sharjah", "AUS", "Melbourne", "Sydney", "SGP", "Singapore", "KSA", "Jeddah", "Riyadh"
    ]
    let links = [
        'About Us', 'UC Impacts', 'Terms & Conditions', 'Privacy Policy', 'Interest-based Advertising', 'Anti Discrimination Policy', 'Partner Welfare Policy', 'Blog', 'Reviews', 'Near Me', 'Careers', 'Gift Cards', 'Contact Us', 'Quicks Links'
    ];
    links.forEach(function(el) {
        let sp = document.createElement("span");
        sp.innerHTML = el;
        document.querySelector("#links_disp").append(sp);
    })
    cities.forEach(function(el) {
        let sp = document.createElement("span");
        sp.innerHTML = el;
        if (el == "Serving In" || el == "USA" || el == "IND" || el == "KSA" || el == "UAE" || el == "AUS") {
            sp.style.display = "block"
            sp.style.fontSize = "20px"
            sp.style.marginTop = "20px"
            sp.style.cursor = "none"
        }
        document.querySelector("#links_disp").append(sp);
        // document.querySelector("#cities_disp").append(sp);
    })
}

play()