
let loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async () => {
    let Email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    console.log('event fired', loginEmail,loginPassword)

    try {

        const res = await axios.post('http://localhost:3000/api/login',{
          Email,
          password  
        })
        alert("login sucessFully")
        window.open('index.html');

    } catch (err) {
        console.log(err)
    }
})