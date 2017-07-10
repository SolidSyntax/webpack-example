import React from 'react';
import {hashHistory, IndexRoute, Route, Router} from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';


const componentRoutes = {
    component: Home,
    path: '/',
    indexRoute: {component: ArtistMain},
    childRoutes: [
        {
            path: 'artists/new',
            getComponent(location, cb) {
                System.import('./components/artists/ArtistCreate').
                    then(module => cb(null,module.default));
            }

        },
        {
            path: 'artists/:id',
            getComponent(location, cb) {
                System.import('./components/artists/ArtistDetail').
                then(module => cb(null,module.default));

            }
        },
        {
            path: 'artists/:id/edit',
            getComponent(location, cb) {
                System.import('./components/artists/ArtistEdit').
                then(module => cb(null,module.default));
            }
        }

    ]
};

// const Routes = () => {
//     return (
//         <Router history={hashHistory}>
//             <Route path="/" component={Home}>
//                 <IndexRoute component={ArtistMain}/>
//                 <Route path="artists/new" component={ArtistCreate}/>
//                 <Route path="artists/:id" component={ArtistDetail}/>
//                 <Route path="artists/:id/edit" component={ArtistEdit}/>
//             </Route>
//         </Router>
//     );
// };


 const Routes = () => {
     return (
         <Router history={hashHistory} routes={componentRoutes}/>
     );
 };
export default Routes;
