# 🌿 The Wild Oasis



## 📋 Overview

The Wild Oasis is a comprehensive hotel management application built with React and modern web technologies. This project showcases advanced frontend development techniques while providing a practical solution for hotel operations management.

## ✨ Features

### 🔐 Authentication & User Management
![image](https://github.com/user-attachments/assets/0ff6976c-5c70-4e1b-a122-48e818939dd5)
- **Secure Login System**: Restricts access to authorized hotel staff only
- **User Profile Management**: Update personal information and upload profile pictures
- **Role-Based Access**: Different permission levels for various staff positions
- **Password Management**: Secure reset and update functionality

### 🏡 Cabin Management
- **Comprehensive Cabin CRUD Operations**: Create, read, update, and delete cabin listings
- **Media Management**: Upload and manage cabin photos
- **Pricing Configuration**: Set base prices and special discount offers
- **Cabin Details**: Track capacity, amenities, and availability status
- **Filtering & Sorting**: Advanced table features for efficient cabin management

### 📅 Booking Management
- **Reservation Overview**: View all bookings in a clean, filterable table
- **Booking Details**: Track guest information, payment status, and special requests
- **Date Management**: Clear visualization of arrival and departure dates
- **Status Tracking**: Monitor whether bookings are unconfirmed, checked in, or checked out
- **Filtering System**: Filter bookings by status, dates, and other parameters

### 📊 Dashboard & Analytics
- **Business Metrics**: Visual representation of key performance indicators
- **Occupancy Visualization**: Track room occupancy rates with interactive charts
- **Revenue Statistics**: Monitor financial performance and trends
- **Check-in/Check-out Overview**: See daily operational statistics
- **Data Period Selection**: View statistics for different time periods

### 🔄 Check-in/Check-out System
- **Streamlined Process**: Efficiently manage guest arrivals and departures
- **Status Updates**: Real-time booking status changes
- **Payment Confirmation**: Verify and record payment information
- **Guest Registration**: Collect and manage guest details during check-in

### 🎨 UI/UX Features
- **Dark/Light Mode**: Toggle between visual themes for comfortable viewing
- **Responsive Design**: Optimized for both desktop and tablet devices
- **Intuitive Navigation**: Logical information architecture for easy access
- **Interactive Elements**: Tooltips, notifications, and confirmation dialogs
- **Accessible Interface**: Designed with basic accessibility considerations

## 🛠️ Technologies

### ⚛️ React Ecosystem
- **React**: Building user interfaces with functional components and hooks
- **React Router**: Client-side routing for seamless navigation
- **React Query**: Data fetching, caching, and state management
- **React Hook Form**: Efficient form handling with validation
- **Context API**: Application-wide state management for auth and settings

### 🔄 State Management
- **React Query**: Server state management with automatic caching
- **Custom Hooks**: Encapsulated state logic for reusability
- **Optimistic Updates**: Immediate UI updates for improved UX
- **Mutation Handling**: Streamlined data modification workflows

### 🎨 Styling & UI
- **Styled Components**: Component-scoped CSS with theming support
- **Responsive Design**: Adapts to different screen sizes
- **CSS Variables**: Dynamic theming and consistent design
- **Animation Effects**: Subtle transitions for improved user experience

### 📊 Data Visualization
- **Recharts**: Interactive charts for business analytics
- **Custom Visualizations**: Tailored data representations
- **Responsive Charts**: Adapt to different viewport sizes

### ⚡ Build Tools & Development
- **Vite**: Fast development server and optimized builds
- **ESLint**: Code quality and consistency enforcement
- **npm**: Package management and script automation
- **Git**: Version control and collaborative development

### 🗄️ Backend Integration
- **Supabase**: Authentication, database, and storage services
- **RESTful API**: Structured data exchange
- **JWT Authentication**: Secure token-based authentication
- **Image Storage**: Efficient handling of cabin and user images


## 💡 React Concepts Implemented

### 🧩 Custom Hooks
- **useOutsideClick**: Detect clicks outside a specified element
- **useLocalStorageState**: Persist state in localStorage
- **useDarkMode**: Toggle and manage theme preferences
- **useBookings**: Fetch and manage booking data
- **useCabins**: Handle cabin CRUD operations

### 🔄 React Query Implementation
- **Query Keys**: Structured cache management
- **Prefetching**: Improving perceived performance
- **Query Invalidation**: Maintaining data freshness
- **Infinite Queries**: Handling large data sets
- **Mutation Handlers**: Managing side effects of data changes

### 📦 Component Architecture
- **Compound Components**: Creating intuitive component APIs
- **Render Props**: Flexible component composition
- **Component Composition**: Building complex UIs from simpler parts
- **Container/Presentational Pattern**: Separation of concerns
- **Layout Components**: Consistent page structures

### 🔒 Authentication Flow
- **Protected Routes**: Access control based on authentication status
- **Auth Context**: Application-wide authentication state
- **Login/Logout Flow**: Secure authentication processes
- **Token Management**: Proper handling of JWT tokens
- **User Session**: Maintaining and refreshing user sessions

## 🎓 Advanced React Patterns

### 🧩 Compound Components
- **Form Components**: Integrated form elements with shared state
- **Modal System**: Flexible dialog components
- **Table Components**: Cohesive data display system
- **Menu Components**: Dropdown and navigation elements

### 🌐 Context API Usage
- **Authentication Context**: User login state and functions
- **Dark Mode Context**: Theme preferences across the application
- **Toast Context**: Application-wide notification system
- **Settings Context**: User and application settings

### ⚡ Performance Optimization
- **Memoization**: Using useMemo and useCallback
- **Code Splitting**: Lazy loading components and routes
- **Dependency Optimization**: Proper effect dependencies
- **Virtualization**: Efficient rendering of long lists
- **Suspense**: Improved loading states

### 🚨 Error Handling
- **Error Boundaries**: Catching and displaying errors gracefully
- **API Error Handling**: Proper management of request failures
- **Fallback UI**: Alternative displays when content fails to load
- **Toast Notifications**: User-friendly error messages
- **Form Validation**: Preventing errors through validation
