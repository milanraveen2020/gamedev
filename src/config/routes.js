import DefaultLayout from '../layout/DefaultLayout';
import Home from '../screens/home'


const routes = [
    {
        path: `/`,
        exact: true,
        layout: DefaultLayout,
        component: Home,
    }
]


export default routes;