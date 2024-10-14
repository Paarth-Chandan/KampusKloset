# KampusKloset

KampusKloset is a sleek, user-friendly e-commerce website built using React. It offers an easy way for users to browse, search, and explore various products. This app utilizes the **Fake Store API** to fetch product details, including images, pricing, and categories. In addition, KampusKloset provides secure **login and signup** functionality through a custom backend using **MongoDB, Express.js, and JWT**.  

## Features  

- **User Authentication**: Users can securely **sign up** and **log in** with credentials.  
- **JWT-based Authentication**: User sessions are managed using **JSON Web Tokens (JWT)**.    
- **Product Details Page**: Displays detailed information about each product, including price and description  
- **Cart Functionality**: Users can add items to the cart, view the total, and proceed to checkout.  
- **Responsive Design**: The website ensures a smooth experience across all devices (desktop, tablet, and mobile).  
- **Error Handling**: Handles invalid search queries, failed logins, or network issues with user-friendly error messages.  


## Video 



https://github.com/user-attachments/assets/e6559ba9-965e-4a78-9e72-e67e8e006b90


---

## Getting Started  

Follow these steps to set up the project on your local machine for development and testing.  

### Prerequisites  
Ensure you have the following installed:  
- **Node.js**  
- **npm** (Node Package Manager)  
- **MongoDB** (Make sure MongoDB is installed and running locally or use **MongoDB Atlas**)  

### Installation  

#### Frontend Setup  
1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/your-username/kampuskloset.git  
   cd kampuskloset  
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Start the frontend development server**:  
   ```bash  
   npm start  
   ```  
   The frontend will be available at **http://localhost:3000**.  

#### Backend Setup  
1. Navigate to the `backend` directory:  
   ```bash  
   cd backend  
   ```  

2. **Install backend dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Configure environment variables**:  
   Create a `.env` file in the `backend` directory with the following variables:  
   ```bash  
   MONGODB_URI=<your-mongodb-connection-string>  
   JWT_SECRET=<your-secret-key>  
   PORT=4000  
   ```  

4. **Start the backend server**:  
   ```bash  
   npm run start  
   ```  
   The backend will run on **http://localhost:4000**.  

---

## Usage  

- Open the website in your browser.  
- **Sign up or log in** to your account using the authentication feature.    
- Click on a product to view detailed information on the product details page.  
- Add items to your cart, view the total, and proceed to checkout.  

---

## API  
KampusKloset uses the **Fake Store API** to fetch product data:  
[https://fakestoreapi.com/](https://fakestoreapi.com/)  

---

## Technologies Used  

### Frontend  
- HTML, CSS (using **Tailwind CSS**), JavaScript, React.js  

### Backend  
- **Node.js** with **Express.js** for backend logic  
- **MongoDB** for storing user data  
- **JWT (JSON Web Tokens)** for secure authentication  

---

## Contributing  

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  

---
