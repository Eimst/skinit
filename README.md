# 🚀 Skinet

An internet shop with cart management using Redis, supporting sorting and filtering of products based on user preferences. Users can view their orders, make real payments via Stripe, and enjoy a seamless e-commerce experience. Admins have order management capabilities, including viewing all user orders and issuing refunds.

---

## 🔗 Live Demo & Screenshots
🌐 **Live Demo**: [Azure Demo](https://skinetweb.azurewebsites.net/)

> ⚠️ **Note:**  
>- This project is **optimized for desktop screens** and may not display correctly on mobile devices. If viewing on a smaller screen, consider adjusting the browser zoom for the best experience.

### 📸 Product Filtering & Sorting **(Video Demo)**
[![Watch Video]()]()

### 📹 Real Payment via Stripe **(Video Demo)**
[![Watch Video]()]()

### 📹 Order Management for Admins **(Video Demo)**
[![Watch Video]()]()

---

## 🛠 Tech Stack

- **Backend**: C#, ASP.NET, SQL Server  
- **Frontend**: Angular, TypeScript, Zustand (for global state)
- **Database**: SQL Server + Redis (for cart storage)  
- **Authentication**: .NET Identity (Roles: User & Admin)  
- **Payment Processing**: Stripe  
- **Hosting**: Azure (Backend serves Angular static files)  
- **CI/CD**: GitHub Actions (Auto-Deploy on Push)  

---

## ✨ Key Features

### ✅ **Implemented**
- 🛒 **Shopping Cart with Redis**: Cart items are stored in **Redis**, ensuring fast and persistent updates.
- 🔍 **Advanced Filtering & Sorting**: Users can filter products by **category** and **sort items by price** for better browsing.
- 📦 **Order Management**: Users can **view their order history** and **track order status**.
- 💳 **Real Payment Integration**: Payments are processed securely using **Stripe**.
- 🔑 **User Authentication & Roles**: 
  - **User Role**: Can browse products, add to cart, purchase items, and view their order history.
  - **Admin Role**: 
    - View **all users' orders**.
    - **Refund payments** when necessary.
- 🔄 **Secure Login & Authentication**: Managed via **ASP.NET Identity**.
- 🌍 **Optimized Deployment**: Angular frontend is **precompiled into static files** and served by the **.NET backend on Azure**.

---

## 🚀 Deployment & CI/CD

### 🌍 **Hosting**
- **Frontend**: Angular static files are served by **.NET backend on Azure**.
- **Backend**: Deployed on **Azure App Service**.

### ⚙️ **Continuous Deployment (CI/CD)**
- **GitHub Actions** automates deployments whenever changes are pushed to the repository.  
- **Frontend & Backend** auto-deploy to **Azure** on commit.

---

## 📚 Acknowledgments
This project was initially built following the **Build a proof of concept e-commerce store using Angular, .Net and Stripe for payment processing** by **Neil Cummings** as part of my structured learning process.  

