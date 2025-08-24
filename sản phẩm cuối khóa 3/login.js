
 
 
 

 
 let isLogin = true;

    function toggleForm() {
      isLogin = !isLogin;

      const title = document.getElementById('form-title');
      const button = document.getElementById('auth-button');
      const switchText = document.querySelector('.switch');
      const error = document.getElementById('error-message');
      const emailField = document.getElementById('email');
      const fullname = document.getElementById('fullname');
      const job = document.getElementById('job');

      title.textContent = isLogin ? 'Login' : 'Đăng kí';
      button.textContent = isLogin ? 'Login' : 'Đăng kí';
      switchText.textContent = isLogin ? "Chưa có tài khoản? Đăng kí" : "Đã có tài khoản? Đăng nhập";
      error.textContent = '';

      emailField.style.display = isLogin ? 'none' : 'block';
      fullname.style.display = isLogin ? 'none' : 'block';
      job.style.display = isLogin ? 'none' : 'block';

      clearFields();
    }

    function handleAuth() {
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const fullname = document.getElementById('fullname').value.trim();
      const job = document.getElementById('job').value.trim();
      const error = document.getElementById('error-message');

      if (!username || !password || (!isLogin && (!email || !fullname || !job))) {
        error.textContent = 'Vui lòng điền đầy đủ thông tin.';
        return;
      }

      if (!isLogin) {
        if (!email.includes('@')) {
          error.textContent = 'Email không hợp lệ.';
          return;
        }
        if (password.length < 6) {
          error.textContent = 'Mật khẩu phải trên 6 kí tự.';
          return;
        }
        if (localStorage.getItem('user_' + username)) {
          error.textContent = 'Tên người dùng đã tồn tại.';
          return;
        }
        const userData = { username, password, email, fullname, job };
        localStorage.setItem('user_' + username, JSON.stringify(userData));
        alert('Đăng kí thành công!');
        toggleForm();
      } else {
        const stored = JSON.parse(localStorage.getItem('user_' + username));
        if (!stored || stored.password !== password) {
          error.textContent = 'Sai tên người dùng hoặc mật khẩu.';
        } else {
          alert('Đăng nhập thành công!');
          window.location.href = 'main.html';
        }
      }
    }

    function togglePassword() {
      const passInput = document.getElementById('password');
      passInput.type = passInput.type === 'password' ? 'text' : 'password';
    }

    function clearFields() {
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('fullname').value = '';
      document.getElementById('job').value = '';
    }

  
  