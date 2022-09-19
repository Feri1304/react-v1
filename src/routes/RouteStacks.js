import React, { lazy, useEffect } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import urls from '../enums/urls'
import PrivateRoute from './PrivateRoute'
// pages
const Home = lazy(() => import('../pages/home/page-home'))
const Page404 = lazy(() => import('../pages/404/page-404'))
const About = lazy(() => import('../pages/about/page-about'))
const Profile = lazy(() => import('../pages/profile/profile'))
const Login = lazy(() => import('../pages/login/login'))



const RouteStacks = ({ history }) => {
    const loggedIn = () => {
		return true
	}
    const userVerified =()=>{
        return true
    }
    useEffect(() => {
        history.listen((location, action) => {
            console.info(action, location.pathname)
        })
    }, [history])
    return (
        <Switch>

            <Route exact path={urls.ROOT}>
                <Redirect
                    to={{
                        pathname: urls.HOME
                    }}
                />
            </Route>

            <Route path={urls.HOME}>
                <Home />
            </Route>

            <Route path={urls.LOGIN}>
                <Login/>
            </Route>

            <Route path={urls.ABOUT}>
                <About/>
            </Route>

            <PrivateRoute exact path={urls.PROFILE} allow={[loggedIn, userVerified]}>
				<Profile />
			</PrivateRoute>


            {/* keep  <Route path="*"> being the last of siblings */}
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
}
export default withRouter(RouteStacks)