import DefaultLayout from '../layout/DefaultLayout';
import Home from '../screens/home'
import Create from '../screens/create';
import ItemDetails from '../screens/itemdetails';
import Profile from '../screens/profile';
import Editprofile from '../screens/editprofile';

const routes = [
    {
        path: `/`,
        exact: true,
        layout: DefaultLayout,
        component: Home,
    }
]


export default routes;