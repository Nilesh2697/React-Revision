// function App() {
//   return (
//     <div>
//       <header>
//         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//     </div>
//   );
// }

// export default App;
// export function MainGoal() {
//   return <p>My main goal: Learn React from the ground up.</p>;
// }
 
// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice!</h1>
//       <p>
//         Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
//         text.
//       </p>
//       <p>
//         Your <code>&lt;MainGoal&gt;</code> component should simply output some
//         text that describes your main course goal (e.g., &quot;My main goal:
//         Learn React in great detail&quot;).
//       </p>
//       <p>
//         <strong>Important:</strong> You custom component must contain the text
//         &quot;My main goal:&quot;
//       </p>
//       <p>
//         <strong>Also important:</strong> For the automatic checks to succeed,
//         you <strong>must export</strong> your custom component function! Not as
//         a default but simply by adding the <code>export</code> keyword in front
//         of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
//         ).
//       </p>
//       {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
//       {/* OUTPUT YOUR COMPONENT HERE */}
//       <MainGoal />
//     </div>
//   );
// }
 
// export default App;

// export const userData = {
//   firstName: 'Maximilian',
//   lastName: 'Schwarzmüller',
//   title: 'Instructor',
// };
 
// export function User() {
//   return (
//     <div id="user" data-testid="user">
//       <h2>
//         {userData.firstName} {userData.lastName}
//       </h2>
//       <p>{userData.title}</p>
//     </div>
//   );
// }
 
// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice</h1>
//       <p>Welcome on board of this course! You got this 💪</p>
//       <User />
//     </div>
//   );
// }
 
// export default App;

// export function CourseGoal(props) {
//   return (
//     <li>
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// function App() {
//   return (
//     <div id="app" data-testid="app">
//       <h1>Time to Practice</h1>
//       <p>One course, many goals! 🎯</p>
//       <ul>
//         <CourseGoal title="Learn React" description="In-depth" />
//         <CourseGoal title="Build a React App" description="From scratch" />
//         {/* Add more CourseGoal instances with different titles and descriptions as needed */}
//       </ul>
//     </div>
//   );
// }

// export default App;

// export default function Card({ name, children }) {
//   return (
//     <article className="card">
//       <h2>{name}</h2>
//       {children}
//     </article>
//   );


// export const user = {
//   email: '',
//   password: '',
//   loggedIn: false,
// };
// function App() {
//   function handleLogin() {
//     user.email = 'test@example.com';
//     user.password = 'test';
//     user.loggedIn = true;
//   }
 
//   return (
//     <div id="app">
//       <h1>User Login</h1>
//       <p>
//         <label>Email</label>
//         <input type="email" />
//       </p>
 
//       <p>
//         <label>Password</label>
//         <input type="password" />
//       </p>
 
//       <p id="actions">
//         <button onClick={handleLogin}>Login</button>
//       </p>
//     </div>
//   );
// }
 
// export default App;

// export const user = {
//   name: '',
// };

// function App() {
//   // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
//   function handleCreateUser(name) {
//     user.name = name;
//   }

//   return (
//     <div id="app">
//       <h1>User Login</h1>
//       <p>
//         <label>Name</label>
//         {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
//         <input type="text" />
//       </p>

//       <button onClick={() => handleCreateUser('Max')}>Create User</button>
//     </div>
    
//   );
// }

// export default App;

// import React from 'react';
 
// export default function App() {
//     const [price, setPrice] = React.useState(100);
    
//     function handleClick() {
//         setPrice(50);
//     }
    
//     return (
//         <div>
//             <p data-testid="price">${price}</p>
//             <button onClick={handleClick}>Apply Discount</button>
//         </div>
//     );
// }

import React from 'react';

export default function App() {
  
  const [showWarning, setShowWarning] = React.useState(false);

 const handleProceedClick = () => {
    setShowWarning(true);
  };

  const handleDismissClick = () => {
    setShowWarning(false);
  };

  return (
    <div>
      {showWarning && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleDismissClick}>Dismiss</button>
        </div>
      )}
      <button onClick={handleProceedClick}>Delete</button>
    </div>
  );
}
