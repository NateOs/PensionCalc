var age = document.getElementById('ageInput');
$pensionForm = document.querySelector('#pension-form')
$result = document.getElementById('result')
$resultinmonths = document.getElementById('resultinmonths')


function calc() {
    var cAge = parseInt(age.value);
    console.log(cAge)

    var yearsToPension, pensionYear, pensionYearinMonths = 0;

    yearsToPension = 60 - cAge
        
    var Day = new Date() 
    var Year = Day.getFullYear()
    pensionYear = Year + yearsToPension
    pensionYearinMonths = (pensionYear - 2020) * 12

    const $result = document.getElementById("result").value = pensionYear
    const $resultinmonths = document.getElementById("resultinmonths").value = pensionYearinMonths

}

function maxWidth () {
   window.resizeTo(300, 200)
}




