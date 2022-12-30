

import Register from "../../Pages/RegisterPage/Register";
import React from 'react';
import HomePage from "../../Pages/HomePage/HomePage";
import AlimentumPage from "../../Pages/AlimentumPage/AlimentumPage";
import AlimentumLaktoze from "../../Pages/AlimentumLaktoze/AlimentumLaktoze";
import PiacersiConad from "../../Pages/PiacersiConad/PiacersiConad";
import ConadBio from "../../Pages/ConadBio/ConadBio";
import ConadVeg from "../../Pages/ConadVeg/ConadVeg";
import ConadEquo from "../../Pages/ConadEquo/ConadEquo";
import ConadEco from "../../Pages/ConadEco/ConadEco";
import ConadEssentiae from "../../Pages/ConadEssentiae/ConadEssentiae";
import ConadBaby from "../../Pages/ConadBaby/ConadBaby";
import ConadPet from "../../Pages/ConadPet/ConadPet";
import ProductsPage from "../../Pages/ProductsPage/ProductsPage";
import Pikat from "../../Pages/Pikat/Pikat";
import EditProduct from "../../Pages/EditProduct/EditProduct";
import Sapori from "../../Pages/Sapori/Sapori";
import Comments from "../../Pages/Comments/Comments";
import JobApplication from "../../Pages/JobApplication/JobApplication";
import Alimentum from "../../Pages/Alimentum/Alimentum";
const DefaultLayout = React.lazy(() => import('../../layout/DefaultLayout'))
const Login = React.lazy(() => import('../../views/pages/login/Login'))

export const routeData = {
    
    public:[
        {
            path:'/login',
            element:<Login />
        },
   
        {
            path:'/',
            element:<HomePage />
        },
        {
            path:'/Alimentum-PaGluten',
            element:<AlimentumPage />
        },
        {
            path:'/Alimentum-PaLaktoze',
            element:<AlimentumLaktoze />
        },
        {
            path:'/Piacersi',
            element:<PiacersiConad />
        },
        {
            path:'/VersoNatura-Bio',
            element:<ConadBio />
        },
        {
            path:'/VersoNatura-Veg',
            element:<ConadVeg />
        },
        {
            path:'/VersoNatura-Equo',
            element:<ConadEquo />
        },
        {
            path:'/VersoNatura-Eco',
            element:<ConadEco />
        },
        {
            path:'/Essentiae',
            element:<ConadEssentiae />
        },
        {
            path:'/Conad-Baby',
            element:<ConadBaby />
        },
        {
            path:'/Conad-Pet',
            element:<ConadPet />
        },
        {
            path:'/produktet/:id',
            element:<ProductsPage />
        },
        {
            path:'/pikat',
            element:<Pikat />
        },
        {
            path:'/sapori',
            element:<Sapori />
        },
        {
            path:'/komente',
            element:<Comments />
        },
        {
            path:'/apliko-pune',
            element:<JobApplication />
        },
        {
            path:'/11_paralele',
            element:<Alimentum />

        },
        

    ],
    private:[
        {
            path:'/register',
            element:<Register />
        },
        {

            path:'*',
            element:<DefaultLayout />
        },
       
        {
            path:'/produktet/edit/:id',
            element:<EditProduct />
        }

    ]
}