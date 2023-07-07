const FullName = document.querySelector(".FullName")
const PhoneNumber = document.querySelector(".PhoneNumber")
const Group = document.querySelector(".Group")
const Addbtn = document.querySelector(".Addbtn")


let info =JSON.parse(localStorage.getItem("EflexContactsApp")) || []


const err = ()=>{
    if(!FullName.value){
       FullName.style.border= "1px solid red";
    }else if(!PhoneNumber.value){
        PhoneNumber.style.border= "1px solid red";
    }else if(!Group.value){
        Group.style.border= "1px solid red";
    }
}



Addbtn.onclick = ()=>{
    err()
    let UserName = FullName.value
    let phone = PhoneNumber.value
    let grp = Group.value
    let allData = {UserName, phone, grp}
    info.push(allData)
    localStorage.setItem("EflexContactsApp", JSON.stringify(info))
    window.location.reload()
}



