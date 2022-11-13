
let bv=localStorage.getItem("user")

// console.log(bv)
document.getElementById('home').addEventListener("click",op)
document.getElementById('logout').addEventListener("click",lo)
if(bv==null||bv=='n'){
    document.querySelector("#change").innerHTML="Login / SignUp"
    document.querySelector("#logout").innerHTML=""
}
else{
    // console.log(1)
    document.querySelector("#change").innerHTML=bv
    document.querySelector("#logout").innerHTML="Logout"
}
function op(){
    // window.location.assign("./home.html")
}
function lo(){
    // console.log(1)
    let e="n"
    localStorage.setItem("user",e)
    window.location.reload()
}
class User{
    constructor(){

    }
    validateUsername(username){
        // if (username.includes('@')){
        //     return false
        // }
        // else{
        //     return true
        // }

        return username.includes('@')?false:true

    }

    validatePassword(password){
        return password.length>=8?true:false;
    }
// https://github.com/masai-school/api-mocker/wiki/Authentication-API
// fetch causes the sign up to be async
    async signup(n,e,u,p,m,d){
        // console.log(1)
        console.log(this.validateUsername("12@"))
        console.log(this.validatePassword("12345678"))
        let isValidated=this.validateUsername(u) && this.validatePassword(p);
        if(isValidated){
            console.log(1)
            this.name=n;
            this.email=e;
            this.username=u;
            this.password=p;
            this.mobile=m;
            this.description=d

            const register_api='https://masai-api-mocker.herokuapp.com/auth/register'
            const response=await fetch(register_api,{
                method:'POST',
                body: JSON.stringify(this),
                headers:{
                    'Content-Type':'application/json'
                }})

                const data=await response.json()
                console.log('data',data)


          
        
        
        }

    }
    // rararararara
    // 2121212121
    async login(u,p){
        try{
        const login_data={
            username:u,
            password:p
        };
        // console.log(login_data)

        const login_api="https://masai-api-mocker.herokuapp.com/auth/login"
        const response=await fetch(login_api,{
            method:'POST',
            body:JSON.stringify(login_data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json();
        console.log(data)
        return data
        
    }
    catch{
        console.log("lag")
    }

}
}
let users= new User()
const Register=()=>{
    let reg_form=document.getElementById("reg_form")
    const name=reg_form.name.value
    const email=reg_form.email.value
    const username=reg_form.username.value
    const password=reg_form.password.value
    const mobile=reg_form.mobile.value
    const description=reg_form.description.value
   
    users.signup(name,email,username,password,mobile,description)
    // console.log(users.signup)
}

const Login=async()=>{
    const username=document.getElementById('login-username').value
    const password=document.getElementById('login-password').value
    // console.log()
    // let data = await users.login(username,password)
    // using Destructuring
    let {token} = await users.login(username,password)

    
    getProfile(username,token)

}
const getProfile=async (username,token) => {
    try{
    let api_link=`https://masai-api-mocker.herokuapp.com/user/${username}`;
    let response=await fetch(api_link,{
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'application/json'
        }
    })
    let data=await response.json()
    console.log(data)
    if(data.message=='Invalid token for user'){
       return 0
    }
    else{
    localStorage.setItem("user",username)
        window.location.reload()

    }
}
catch(err){
console.log(err)
}
}

document.querySelector('#rg').addEventListener("click",Register)
document.querySelector("#lg").addEventListener("click",Login)