
import './App.css'
 import Registration from './pages/registration.page';  // import registration page
 import LoginPage from './pages/login.page';

 import ProtectedRoute from './components/ProtectedRoute'; // prtect route 

 import Layout from './dashboard/Layout';
 import { Routes ,Route} from 'react-router-dom';
 import Home from "./components/Home";
import Expense from "./components/Expense";
import Addexpense from "./components/Addexpense";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

function App(){
return(
<>
<Routes>
  <Route path="/" element={<Registration />} />
  <Route path="/login" element={<LoginPage />} />

 <Route path="/dashboard" element={<ProtectedRoute>
<Layout></Layout>
 </ProtectedRoute>}>


          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="expense" element={<Expense />} />
          <Route path="add-expense" element={<Addexpense />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

</Routes>
</>

)

}

export default App;
