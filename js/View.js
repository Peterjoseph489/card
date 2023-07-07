const MainBody2 = document.querySelector(".MainBody2")
let info =JSON.parse(localStorage.getItem("EflexContactsApp")) || []
// console.log(info);

info.forEach((element) => {
    const show = `
    <div class="ViewCard">
    <div class="Logo">E</div>
    <div class="TextName">
        <span class="Username">${element.UserName}</span>
        <span class="Phone">${element.phone}</span>
        <span class="Group">${element.grp}</span>
    </div>
</div>
    `
    MainBody2.innerHTML += show
});
