export const registerFormControls=[  
{
    name: 'userName',
    label: 'User name',
    type: 'text',
    placeholder: 'Enter your user name',
    componentType: 'input',   
},
{
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your Email',
    componentType: 'input',   
},
{
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your Password',
    componentType: 'input',  
},

]

export const loginFormControls=[
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your Email',
        componentType: 'input',   
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your Password',
        componentType: 'input',  
    },
    
    ]

export const laptopFormControls = [
   {
    name: 'brand',
    label: 'Brand',
    placeholder: 'Select a brand',
    componentType: 'select',
    options: [
      { id: 'Acer', label: 'Acer' },
      { id: 'Apple', label: 'Apple' },
      { id: 'Asus', label: 'Asus' },
      { id: 'Dell', label: 'Dell' },
      { id: 'HP', label: 'HP' },
      { id: 'Huawei', label: 'Huawei' }
    ]
  },
  {
    name: 'category',
    label: 'Category',
    placeholder: 'Select a category',
    componentType: 'select',
    options: [
      // Acer
      { id: 'Acer Aspire', label: 'Acer Aspire', brand: 'Acer' },
      { id: 'Acer Predator', label: 'Acer Predator (gaming laptops)', brand : 'Acer' },
      { id: 'Acer Swift', label: 'Acer Swift' ,brand : 'Acer'},
      // Apple
      { id: 'MacBook Air', label: 'MacBook Air' , brand : 'Apple'},
      { id: 'MacBook Pro', label: 'MacBook Pro' , brand : 'Apple'},
      // Asus
      { id: 'Asus ROG', label: 'Asus ROG (Republic of Gamers)' , brand : 'Asus'},
      { id: 'Asus VivoBook', label: 'Asus VivoBook', brand : 'Asus'},
      { id: 'Asus ZenBook', label: 'Asus ZenBook' ,brand : 'Asus'},
      // Dell
      { id: 'Alienware', label: 'Alienware' , brand : 'Dell'},
      { id: 'Inspiron 13', label: 'Inspiron 13' , brand : 'Dell'},
      { id: 'Inspiron 15', label: 'Inspiron 15' , brand : 'Dell'},
      { id: 'Ryzen', label: 'Ryzen' , brand : 'Dell'},
      { id: 'XPS 13', label: 'XPS 13' , brand : 'Dell'},
      { id: 'XPS 15', label: 'XPS 15' , brand : 'Dell'},
      { id: 'XPS 2', label: 'XPS 2' , brand: 'Dell'},
      // HP
      { id: 'HP Envy', label: 'HP Envy' , brand : 'HP'},
      { id: 'HP Pavilion', label: 'HP Pavilion' , brand : 'HP'},
      { id: 'HP Spectre', label: 'HP Spectre' , brand : 'HP'},
      { id: 'Omen', label: 'Omen' , brand : 'HP'},
      { id: 'Victus', label: 'Victus' , brand : 'HP'},
      { id: 'ZBook', label: 'ZBook' , brand : 'HP'},
      // Huawei
      { id: 'Huawei MateBook', label: 'Huawei MateBook' , brand : 'Huawei'},
    ]
  },
  
  {
    name: 'model',
    label: 'Model',
    type: 'text',
    placeholder: 'e.g. HP ProBook 440 G9',
    componentType: 'input',
  },
  {
    name: 'quantity',
    label: 'Quantity',
    type: 'number',
    placeholder: 'e.g. 10',
    componentType: 'input',
  },
  {
    name: 'processor',
    label: 'Processor',
    type: 'text',
    placeholder: 'e.g. Intel Core i7-1255U',
    componentType: 'input',
  },
  {
    name: 'screen',
    label: 'Screen',
    type: 'text',
    placeholder: 'e.g. 14.1 inch FHD 1080p IPS Touch',
    componentType: 'input',
  },
  {
    name: 'storage',
    label: 'Storage',
    type: 'text',
    placeholder: 'e.g. 512GB NVMe SSD',
    componentType: 'input',
  },
  {
    name: 'ram',
    label: 'RAM',
    type: 'text',
    placeholder: 'e.g. 16GB DDR4',
    componentType: 'input',
  },
  {
    name: 'graphics',
    label: 'Graphics',
    type: 'text',
    placeholder: 'e.g. Intel UHD Graphics',
    componentType: 'input',
  },
  {
    name: 'batteryLife',
    label: 'Battery Life',
    type: 'number',
    placeholder: 'e.g. 7hr+',
    componentType: 'input',
  },
  {
    name: 'useCase',
    label: 'Perfect For',
    type: 'text',
    placeholder: 'e.g. Coders, Video Editors, AI Developers',
    componentType: 'textarea',
  },
  {
    name: 'features',
    label: 'Features',
    type: 'text',
    placeholder: 'e.g. Fingerprint, Wi-Fi 6, HD Sound...',
    componentType: 'textarea',
  },
  {
    name: 'condition',
    label: 'Condition',
    type: 'text',
    placeholder: 'e.g. Brand New',
    componentType: 'input',
  },
  {
    name: 'externalWebcam',
    label: 'External Webcam',
    type: 'text',
    placeholder: 'e.g. 1080p FHD',
    componentType: 'input',
  }
];
