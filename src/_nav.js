import React from 'react'
import CIcon from '@coreui/icons-react'
import {


  cilNotes,

  cilSpeedometer,

} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  
  
  {
    component: CNavTitle,
    name: 'Produktet',
  },
 
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Shto produkte',
        to: '/forms/form-control',
      },
      {
        component:CNavItem,
        name:'Fshijë produkte',
        to:'/forms/form-delete'
      },
      {
        component:CNavItem,
        name:'Oferta',
        to:'/forms/oferta'
      },
      {
        component:CNavItem,
        name:'Komente/Kritika',
        to:'/forms/Kritika'
      },
      {
        component:CNavItem,
        name:'Aplikime pune',
        to:'/forms/applications'
      }

    
    ],
  },

  
  
 
 
]

export default _nav
