

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const rememberCheckbox = document.getElementById('remember');

// Demo users for testing
const demoUsers = [
    { email: 'admin@kycc.com', password: 'admin123', name: 'Admin User' },
    { email: 'user@kycc.com', password: 'user123', name: 'Test User' }
];

// Load remembered email
window.addEventListener('load', function () {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail && emailInput) {
        emailInput.value = rememberedEmail;
        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }
});

// Form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Clear previous messages
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');
    
    // Validate inputs
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Simulate login (In production, this would be an API call)
    simulateLogin(email, password);
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateLogin(email, password) {
    // Simulate API delay
    loginForm.querySelector('button').disabled = true;
    loginForm.querySelector('button').innerText = 'Logging in...';
    
    setTimeout(() => {
        // First, try demo users
        let user = demoUsers.find(u => u.email === email && u.password === password);

        // If not found in demoUsers, check locally signed-up user (single-user signup stored in localStorage)
        if (!user) {
            const storedEmail = localStorage.getItem('signupEmail');
            const storedPass = localStorage.getItem('signupPass');
            const storedName = localStorage.getItem('signupName');

            if (storedEmail && storedPass && storedEmail === email && storedPass === password) {
                user = { email: storedEmail, name: storedName || 'User' };
            }
        }

        if (user) {
            // Store login data
            localStorage.setItem('signupName', user.name);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('loginTime', new Date().toISOString());

            // Remember email if checkbox is checked
            if (rememberCheckbox && rememberCheckbox.checked) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }

            showSuccess(`Welcome back, ${user.name}!`);

            // Redirect to home page after 1.5 seconds
            setTimeout(() => {
                window.location.href = '../Kycc home/mywebsite.html';
            }, 1500);
        } else {
            // If there's a stored signup email but password mismatch, show clearer error
            const storedEmail = localStorage.getItem('signupEmail');
            const storedPass = localStorage.getItem('signupPass');
            if (storedEmail === email && storedPass && storedPass !== password) {
                showError('Password does not match the registered account');
            } else {
                showError('Invalid email or password');
            }
            loginForm.querySelector('button').disabled = false;
            loginForm.querySelector('button').innerText = 'LOGIN';
        }
    }, 800);
}

function showError(message) {
    if (errorMessage) {
        errorMessage.innerText = '❌ ' + message;
        errorMessage.classList.add('show');
    }
}

function showSuccess(message) {
    if (successMessage) {
        successMessage.innerText = '✓ ' + message;
        successMessage.classList.add('show');
    }
}

// password


let img= document.querySelector(".icon");

img.addEventListener("click",(e)=>{
    if (passwordInput.type == "password") {
        passwordInput.type="text";
        img.src = "https://cdn-icons-png.flaticon.com/128/535/535193.png";
        
    }else{
        passwordInput.type="password";
        img.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
    }

    
});