// // Auth Switching
// const loginFormDiv = document.getElementById('login');
// const signupFormDiv = document.getElementById('signup');
// const showSignup = document.getElementById('showSignup');
// const showLogin = document.getElementById('showLogin');

// showSignup.addEventListener('click', () => {
//   loginFormDiv.classList.remove('active');
//   signupFormDiv.classList.add('active');
// });

// showLogin.addEventListener('click', () => {
//   signupFormDiv.classList.remove('active');
//   loginFormDiv.classList.add('active');
// });

// // LocalStorage Users
// let users = JSON.parse(localStorage.getItem('users')) || [];

// // Signup
// document.getElementById('signupForm').addEventListener('submit', e => {
//   e.preventDefault();
//   const name = e.target[0].value;
//   const email = e.target[1].value;
//   const password = e.target[2].value;

//   if (users.find(u => u.email === email)) {
//     alert('Email already registered!');
//     return;
//   }

//   users.push({ name, email, password });
//   localStorage.setItem('users', JSON.stringify(users));
//   alert('Signup successful! Login now.');
//   signupFormDiv.classList.remove('active');
//   loginFormDiv.classList.add('active');
//   e.target.reset();
// });

// // Login
// document.getElementById('loginForm').addEventListener('submit', e => {
//   e.preventDefault();
//   const email = e.target[0].value;
//   const password = e.target[1].value;

//   const user = users.find(u => u.email === email && u.password === password);
//   if (!user) {
//     alert('Invalid credentials!');
//     return;
//   }

//   alert(`Welcome ${user.name}!`);
//   document.getElementById('auth').style.display = 'none';
//   document.getElementById('portal').style.display = 'block';
// });

// // Logout
// document.getElementById('logoutBtn').addEventListener('click', () => {
//   document.getElementById('portal').style.display = 'none';
//   document.getElementById('auth').style.display = 'block';
// });

// // Tabs
// const tabs = document.querySelectorAll('.tab-btn');
// const tabContents = document.querySelectorAll('.tab-content');

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     tabs.forEach(btn => btn.classList.remove('active'));
//     tab.classList.add('active');

//     const target = tab.dataset.tab;
//     tabContents.forEach(tc => {
//       tc.classList.toggle('active', tc.id === target);
//     });
//   });
// });

// // Lost & Found Form
// const lostFoundForm = document.getElementById('lostFoundForm');
// const lostFoundList = document.getElementById('lostFoundList');

// lostFoundForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const item = e.target[0].value;
//   const desc = e.target[1].value;
//   const type = e.target[2].value;
//   const li = document.createElement('li');
//   li.textContent = `${type}: ${item} - ${desc}`;
//   lostFoundList.appendChild(li);
//   lostFoundForm.reset();
// });

// // Complaints Form
// const complaintForm = document.getElementById('complaintForm');
// const complaintList = document.getElementById('complaintList');

// complaintForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const name = e.target[0].value;
//   const email = e.target[1].value;
//   const category = e.target[2].value;
//   const desc = e.target[3].value;
//   const li = document.createElement('li');
//   li.textContent = `${category} complaint by ${name} (${email}): ${desc}`;
//   complaintList.appendChild(li);
//   complaintForm.reset();
// });

// // Volunteer Form
// const volunteerForm = document.getElementById('volunteerForm');
// const volunteerList = document.getElementById('volunteerList');

// volunteerForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const name = e.target[0].value;
//   const email = e.target[1].value;
//   const phone = e.target[2].value;
//   const li = document.createElement('li');
//   li.textContent = `Volunteer: ${name}, Email: ${email}, Phone: ${phone}`;
//   volunteerList.appendChild(li);
//   volunteerForm.reset();
// });
// Auth Switching
const loginFormDiv = document.getElementById('login');
const signupFormDiv = document.getElementById('signup');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', () => {
  loginFormDiv.classList.remove('active');
  signupFormDiv.classList.add('active');
});

showLogin.addEventListener('click', () => {
  signupFormDiv.classList.remove('active');
  loginFormDiv.classList.add('active');
});

// LocalStorage Users
let users = JSON.parse(localStorage.getItem('users')) || [];

// Signup
document.getElementById('signupForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  if (users.find(u => u.email === email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email already registered!',
    });
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  Swal.fire({
    icon: 'success',
    title: 'Signup Successful!',
    text: 'You can login now.',
    confirmButtonColor: '#66b032'
  }).then(() => {
    signupFormDiv.classList.remove('active');
    loginFormDiv.classList.add('active');
  });

  e.target.reset();
});

// Login
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Credentials!',
      text: 'Please check your email and password',
    });
    return;
  }

  Swal.fire({
    title: `Welcome ${user.name}!`,
    text: "You have successfully logged in",
    icon: 'success',
    confirmButtonColor: '#66b032'
  }).then(() => {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('portal').style.display = 'block';
  });
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You will be logged out!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#66b032',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout'
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById('portal').style.display = 'none';
      document.getElementById('auth').style.display = 'block';
    }
  });
});

// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    tabContents.forEach(tc => {
      tc.classList.toggle('active', tc.id === target);
    });
  });
});

// Lost & Found Form
const lostFoundForm = document.getElementById('lostFoundForm');
const lostFoundList = document.getElementById('lostFoundList');

lostFoundForm.addEventListener('submit', e => {
  e.preventDefault();
  const item = e.target[0].value;
  const desc = e.target[1].value;
  const type = e.target[2].value;
  const li = document.createElement('li');
  li.textContent = `${type}: ${item} - ${desc}`;
  lostFoundList.appendChild(li);

  Swal.fire({
    icon: 'success',
    title: 'Submitted!',
    text: 'Your lost/found item has been posted.',
    timer: 1500,
    showConfirmButton: false
  });

  lostFoundForm.reset();
});

// Complaints Form
const complaintForm = document.getElementById('complaintForm');
const complaintList = document.getElementById('complaintList');

complaintForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const category = e.target[2].value;
  const desc = e.target[3].value;
  const li = document.createElement('li');
  li.textContent = `${category} complaint by ${name} (${email}): ${desc}`;
  complaintList.appendChild(li);

  Swal.fire({
    icon: 'success',
    title: 'Complaint Submitted!',
    text: 'Your complaint has been recorded.',
    timer: 1500,
    showConfirmButton: false
  });

  complaintForm.reset();
});

// Volunteer Form
const volunteerForm = document.getElementById('volunteerForm');
const volunteerList = document.getElementById('volunteerList');

volunteerForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const phone = e.target[2].value;
  const li = document.createElement('li');
  li.textContent = `Volunteer: ${name}, Email: ${email}, Phone: ${phone}`;
  volunteerList.appendChild(li);

  Swal.fire({
    icon: 'success',
    title: 'Registered!',
    text: 'You are successfully registered as a volunteer.',
    timer: 1500,
    showConfirmButton: false
  });

  volunteerForm.reset();
});
