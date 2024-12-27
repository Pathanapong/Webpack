// src/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    console.log('test2');
    
    e.preventDefault(); // หยุดการส่งฟอร์ม

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // เพิ่มการตรวจสอบชื่อผู้ใช้และรหัสผ่านที่นี่
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
});
