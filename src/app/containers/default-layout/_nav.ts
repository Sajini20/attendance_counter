import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  
  
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      
    ]
  },
  
  
];
