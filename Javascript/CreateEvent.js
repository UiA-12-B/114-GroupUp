const button = document.getElementById('submit')
const iname = document.getElementById('name')
const idate = document.getElementById('date')
const itime = document.getElementById('time')
const islots = document.getElementById('slots')
const icatagory = document.getElementById('catagory')
const ilocation = document.getElementById('location')
const idescription = document.getElementById('desc')

button.onclick = function (){
    const name = iname.value;
    const date = idate.value;
    const time = itime.value;
    const slots = islots.value;
    const catagory = icatagory.value;
    const location = ilocation.value;
    const desc = idescription.value;
    const id = Math.floor(Math.random() * 1000) + 1;

    const eventID = ("Event - ");

    const event = {
        Name: name,
        Date: date,
        Time: time,
        Slots: slots,
        Catagory: catagory,
        Location: location,
        Description: desc,
        ID: id,
    };


    if (name && date && time && slots && catagory && location && desc) {
        localStorage.setItem(eventID+name,JSON.stringify(event));
    } else {
        alert("Not all fields are filled")
    }
};


