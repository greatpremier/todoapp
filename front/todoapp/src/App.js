import logo from './logo.svg';
import './App.css';
import Header, { Nav } from './components/Common/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Search from './components/Common/Search';
import Editor from './components/Todo/TodoForm';
import Notifications from './components/Common/Notifications';
import Home from './components/Common/Home';
import Body from './components/Common/Body';
import Front from './components/Common/Home';
import Settings from './components/Common/Settings';
import UserProfile from './components/Todo/UserProfile';
import TodoList from './components/Todo/TodoList';
import Remote from './components/Common/Remote';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { AuthProvider } from './components/Auth/AuthContext';
import CreateTask from './components/Todo/CreateTask';
import Api from './components/Todo/Api';

function App() {
  return (
    <div>
      <Front />
      <AuthProvider>
         <Routes>
          <Route path='/todoform' element={<Editor />} />
          <Route path='/search' element={<Search/>} />
          <Route path='/notifications' element={<Notifications/>} />
          <Route path='/body' element={<Body/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/settings' element={<Settings/>} />
          <Route path='/user' element={<UserProfile/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
          <Route path='/remote' element={<Remote/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createtask' element={<CreateTask/>}/>
          <Route path='/api' element={<Api/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
