
  
// // import React from 'react';
// // import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Reports from './pages/Reports';
// // import Products from './pages/Products';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/reports' component={Reports} />
//           <Route path='/products' component={Products} />
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Router>
     
      <Switch>
        <Route path='/' component={Navbar} />

        
      </Switch>
    </Router>
     
    </>
  );
};

export default App;