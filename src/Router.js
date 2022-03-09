// ./src/Router.js
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

import UsersState from './context/Users/UsersState';


import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import Auth from './routes/Auth'
import Public from './routes/Public';

import NewDiary from './components/Diary/NewDiary'

import Profile from './components/Profile/Profile';

import ProfileMaker from './components/Profile/ProfileMaker'
import DiaryState from './context/Diary/DiaryState';
import ProfileState from './context/Profile/ProfileState';




function Router() {
  return (
    <>

      <UsersState>
      <ProfileState>
      <DiaryState>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route 
                  index 
                  element={
                    <Public component={Home}
                  />} 
                />

            
                <Route 
                  path="registro"
                  element={
                    <Auth component={Register} />
                  } 
                />

                {/* localhost:3000/login */}
                <Route 
                  path="login"
                  element={
                    <Auth component={Login} />
                  } 
                />                



                {/* localhost:3000/login */}
                  <Route 
                  path="profile"
                  element={
                    <Auth component={Profile} />
                  } 
                />

                  <Route 
                  path="profile-maker"
                  element={
                    <Auth component={ProfileMaker} />
                  } 
                />

                <Route 
                  path="/diary" 
                  element=
                  {<Public component={NewDiary} />}/> 

            </Route>

          </Routes>
      </BrowserRouter>
      </DiaryState>
      </ProfileState>
      </UsersState>

    </>
  );
}

export default Router;