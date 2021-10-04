// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     const emailLogin = document.querySelector('#email-login').value.trim();
//     const passwordLogin = document.querySelector('#password-login').value.trim();
  
//     if (emailLogin && passwordLogin) {
//       const response = await fetch('/api/user/login', {    // ------ change to the correct route ------ //
//         method: 'POST',
//         body: JSON.stringify({ emailLogin, passwordLogin }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');   // ------ change to the correct route ------ //
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };
  
  // ----------------- LOG OUT SECTION still under construction --------------------//
  const logout = async () => {
    const response = await fetch('/api/user/logout', {   // ------ change to the correct route ------ //
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');   // ------ change to the correct route ------ //
    } else {
      alert('Failed to log out.');
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm').value.trim();
  
    if (userName && email && password && passwordConfirm) {
      if (password === passwordConfirm) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ userName, email, password, passwordConfirm}),
        headers: { 'Content-Type': 'application/json' },
      })
      
  
      if (response.ok) {
        document.location.replace('/'); // ------ change to the correct route ------ //
      } else {
        alert('Failed to sign up.');
      }
    } else {
      alert('Failed to sign up.')  // -------- make this a non alert ------//
    };
    }
  };
  
  document
    .querySelector('.sign-in').addEventListener('click', signupFormHandler);
  
  // document            
  //   .querySelector('#logout').addEventListener('click', logout);
  
  // document
    // .querySelector('.new-account').addEventListener('click', signupFormHandler);