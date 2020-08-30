// function showHideForm() {
//     if (document.getElementsById('hostel_option').checked) {
//         document.getElementsById('no').style.display = 'none';

//     } else {
//         document.getElementsById('no').style.display = 'block';
//     }
// }





function showHide() {

    var type = document.getElementsById("hostel_option");
    if (document.getElementById('hostel_option').checked) {

        var val = document.getElementById('hostel_option').nodeValue;
        alert(val);
    } else {
        // document.getElementsById('no').style.display = 'block';

        function changeStep(btn) {
            let index = 0;
            const active = document.querySelector(".active");
            index = steps.indexOf(active);
            steps[index].classList.remove("active");
            if (btn === "next") {
                document.getElementsById('no').style.display = 'block';
                index++;
            } else if (btn === "prev") {
                index--;
            }
            steps[index].classList.add("active");
        }
    }
}

// function changeStep(btn) {
//     let index = 2;
//     const active = document.querySelector(".active");
//     index = steps.indexOf(active);
//     steps[index].classList.remove("active");
//     if (btn === "next") {
//         index++;
//     } else if (btn === "prev") {
//         index--;
//     }
//     steps[index].classList.add("active");