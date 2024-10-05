const button = document.querySelector(".button");

button.addEventListener("click", function () {
    const today = new Date();
    const CurrentDay = today.getDate();
    const CurrentMonth = today.getMonth() + 1; 
    const CurrentYear = today.getFullYear();

    const dob = new Date(document.getElementById("DOB").value);
    
    if (isNaN(dob.getTime())) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const InputDay = dob.getDate();
    const InputMonth = dob.getMonth() + 1;
    const InputYear = dob.getFullYear();

    CalculateAge(CurrentDay, CurrentMonth, CurrentYear, InputDay, InputMonth, InputYear);
});

const CalculateAge = (CurrentDay, CurrentMonth, CurrentYear, InputDay, InputMonth, InputYear) => {
    let ageYear = CurrentYear - InputYear;
    let ageMonth = CurrentMonth - InputMonth;
    let ageDay = CurrentDay - InputDay;

    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(CurrentYear, CurrentMonth - 1, 0).getDate();
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    document.getElementById("Cal-day").value = ageDay;
    document.getElementById("Cal-month").value = ageMonth;
    document.getElementById("Cal-year").value = ageYear;
};
