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
    name: 'Te kripura',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'QIpsa',
        to: '/forms/form-control',
      },
      {
        component:CNavItem,
        name:'Oferta',
        to:'/forms/oferta'
      }

    
    ],
  },

 
  
  
 
 
]

export default _nav
