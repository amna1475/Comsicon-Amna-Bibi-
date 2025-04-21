let usersDatabase = [
    { email: "admin@collabsphere.com", password: "password123", role: "manager" },
    { email: "user@collabsphere.com", password: "password123", role: "member" }
];
//fn for login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("usersDatabase")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log("Login successful for", email);
        if (user.role === "manager") {
            window.location.href = "Manager.html";
        } else {
            window.location.href = "Member.html";
        }
    } else {
        alert("Login failed: Incorrect email or password");
    }
}

//fn for signup
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const role = document.getElementById("role").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("usersDatabase")) || [];
    users.push({ email, password, role });
    localStorage.setItem("usersDatabase", JSON.stringify(users));

    console.log("Signup successful for", email);

    if (role === "manager") {
        window.location.href = "Manager.html";
    } else if (role === "member") {
        window.location.href = "Member.html";
    }
}

function toggleSignup() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('signup-container').classList.remove('hidden');
}

function toggleLogin() {
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('signup-container').classList.add('hidden');
}
