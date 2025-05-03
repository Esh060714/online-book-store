  
    // Hardcoded admin
    const admin = {
        username: "admin",
        password: "admin123"
      };
      
      function login() {
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
      
        if (username === admin.username && password === admin.password) {
          document.getElementById('login-page').classList.add('hidden');
          document.getElementById('dashboard').classList.remove('hidden');
          loadBooks();
          loadMembers();
          loadOrders();
        } else {
          alert("Invalid credentials!");
        }
      }
      
      function logout() {
        location.reload();
      }
      
      function toggleDarkMode() {
        document.body.classList.toggle('dark');
      }
      
      function showTab(tabName) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
        document.getElementById(tabName).classList.remove('hidden');
      }
      
      // Books Handling
      function addBook() {
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const price = document.getElementById('book-price').value;
        const image = document.getElementById('book-image').value;
        const file =document.getElementById('file').value;
      
        if (!title || !author || !price || !image || !file) {
          alert("Please fill all fields!");
          return;
        }
      
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books.push({ title, author, price, image });
        localStorage.setItem('books', JSON.stringify(books));
      
        loadBooks();
      }
      
      function loadBooks() {
        const list = document.getElementById('book-list');
        list.innerHTML = "";
        const books = JSON.parse(localStorage.getItem('books')) || [];
      
        books.forEach((book, index) => {
          const div = document.createElement('div');
          div.innerHTML = `
            <img src="${book.image}" style="width:100%;height:100px;object-fit:cover;">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="deleteBook(${index})">Delete</button>
            
          `;
          list.appendChild(div);
        });
        
      }
      
      //users view point
      function loadBook() {
        const list = document.getElementById('book-lists');
        list.innerHTML = "";
        const books = JSON.parse(localStorage.getItem('books')) || [];
          
        books.forEach((book, index) => {
          const div = document.createElement('div');
          div.innerHTML = `
            <img src="${book.image}" style="width:100%;height:100px;object-fit:cover;">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="addToCart(${index})">Buy</button>
          `;
          list.appendChild(div);
        });
        
      }
      
      
      
      
      
      
      
      
       function addToCart(bookTitle, price) {
          alert(`Added "${bookTitle}" to cart (Price: ₹ ${price})`);
        }
      
      
      function deleteBook(index) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        loadBooks();
      }
      
      // Members (static)
      function loadMembers() {
        const membersTable = document.getElementById('members-table');
        membersTable.innerHTML = `
          <tr><th>ID</th><th>Name</th><th>Email</th></tr>
          <tr><td>1</td><td>John Doe</td><td>john@example.com</td></tr>
          <tr><td>2</td><td>Jane Smith</td><td>jane@example.com</td></tr>
        `;
      }
      
      // Orders (static)
      function loadOrders() {
        const ordersTable = document.getElementById('orders-table');
        ordersTable.innerHTML = `
          <tr><th>Order ID</th><th>Customer</th><th>Book</th><th>Status</th></tr>
          <tr><td>101</td><td>John Doe</td><td>Book A</td><td>Shipped</td></tr>
          <tr><td>102</td><td>Jane Smith</td><td>Book B</td><td>Processing</td></tr>
        `;
      }
      
      // Settings (change password)
      function changePassword() {
        const newPassword = document.getElementById('new-password').value;
        if (!newPassword) {
          alert("Enter a new password!");
          return;
        }
        admin.password = newPassword;
        alert("Password changed successfully! (Remember, this change is temporary in this simple version)");
      }
       window.onload =  loadBook;
      
        