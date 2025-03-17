# Travel Vista Web Application  

Welcome to **Travel Vista**, a modern, multi-functional web application designed for travel enthusiasts, bloggers, and hosts. This platform allows users to explore travel destinations, share experiences through blogging, and host properties or services. Users can also interact with each other by visiting profiles and engaging in a vibrant community.  

**Live Demo:** [Travel Vista](https://travel-vista-web-application.vercel.app/)  

---

## Key Features  

- **Traveling**:  
  - Explore travel destinations, itineraries, and recommendations.  
  - Book travel services or accommodations directly through the platform.  

- **Blogging**:  
  - Create, publish, and manage travel blogs.  
  - Share experiences, tips, and stories with the community.  

- **Hosting**:  
  - List properties or services for hosting (e.g., hotels, homestays, tours).  
  - Manage bookings and interact with guests.  

- **User Profile**:  
  - Personalized profiles for users to showcase their travel experiences, blogs, and hosting services.  
  - Follow other users and explore their activities.  

- **User Management**:  
  - Secure authentication and authorization system.  
  - Role-based access control (e.g., user, admin).  

- **Admin Panel**:  
  - Manage users, blogs, travel listings, and hosting services.  
  - Monitor platform activity and resolve issues.  

---

## Technology Stack  

- **Frontend**: Next.js (React-based framework)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: Google OAuth, JWT (JSON Web Tokens)  
- **Payment Integration**: Stripe  
- **Image Hosting**: ImgBB API  
- **Deployment**: Vercel  

---

## Environment Variables  

To run this project locally, you need to set up the following environment variables in a `.env` file:  

```plaintext
NEXT_PUBLIC_BASE_URL = [Your website URL]  
NEXT_PUBLIC_MONGO_URI = [MongoDB connection URL]  
NEXT_PUBLIC_IMGBB_API_KEY = [ImgBB API key]  
SECRET_TOKEN = [Secret token for JWT]  
NEXT_GOOGLE_CLIENT_ID = [Google OAuth Client ID]  
NEXT_GOOGLE_CLIENT_SECRET = [Google OAuth Client Secret]  
NEXT_PUBLIC_STRIPE_PK = [Stripe Publishable Key]  
NEXT_SK_Payment = [Stripe Secret Key]  

## Getting Started

First, clone this project in your terminal </br>

      $ git clone https://github.com/hasanredoy/travel-vista-web-application.git

Second,  run this command ,

        $ npm i 

Third, make sure all environment variables 

Finally, run this command 

      $ npm run dev
