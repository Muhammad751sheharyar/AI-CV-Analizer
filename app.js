
// let submitBtn = document.getElementById('submitBtn');

// submitBtn.addEventListener('click', async () => {
//     let Fname = document.getElementById('Fname').value;
//     let Email = document.getElementById('Email').value;
//     let Password = document.getElementById('Password').value;

//     console.log("Event Fired:", Fname, Lname, Email, Password);

//     try {
//         const res = await axios.post('http://localhost:3000/api/home', {
//             Fname,
//             Email,
//             password: Password
//         });
//         console.log("Response from server:", res.data);
//         alert(res.data.message);
//           window.open('login.html');

//     } catch (err) {
//         // alert("Signup Failed")
//         console.log(err);
//     }
// });

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async () => {
    let Fname = document.getElementById('Fname').value;
    let Lname = document.getElementById('Lname').value;
    let Email = document.getElementById('Email').value;
    let Password = document.getElementById('Password').value;

    console.log("Event Fired:", Fname, Lname, Email, Password);

    try {
        const res = await axios.post('http://localhost:3000/api/home', {
            Fname,
            Lname,
            Email,
            password: Password
        });
        console.log("Response from server:", res.data);
        alert(res.data.message);
          window.open('login.html');

    } catch (err) {
        // alert("Signup Failed")
        console.log(err);
    }
});
