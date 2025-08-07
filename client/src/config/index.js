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
      { id: 'Acer Aspire', label: 'Acer Aspire' },
      { id: 'Acer Predator', label: 'Acer Predator (gaming laptops)' },
      { id: 'Acer Swift', label: 'Acer Swift' },
      // Apple
      { id: 'MacBook Air', label: 'MacBook Air' },
      { id: 'MacBook Pro', label: 'MacBook Pro' },
      // Asus
      { id: 'Asus ROG', label: 'Asus ROG (Republic of Gamers)' },
      { id: 'Asus VivoBook', label: 'Asus VivoBook' },
      { id: 'Asus ZenBook', label: 'Asus ZenBook' },
      // Dell
      { id: 'Alienware', label: 'Alienware' },
      { id: 'Inspiron 13', label: 'Inspiron 13' },
      { id: 'Inspiron 15', label: 'Inspiron 15' },
      { id: 'Ryzen', label: 'Ryzen' },
      { id: 'XPS 13', label: 'XPS 13' },
      { id: 'XPS 15', label: 'XPS 15' },
      { id: 'XPS 2', label: 'XPS 2' },
      // HP
      { id: 'HP Envy', label: 'HP Envy' },
      { id: 'HP Pavilion', label: 'HP Pavilion' },
      { id: 'HP Spectre', label: 'HP Spectre' },
      { id: 'Omen', label: 'Omen' },
      { id: 'Victus', label: 'Victus' },
      { id: 'ZBook', label: 'ZBook' },
      // Huawei
      { id: 'Huawei MateBook', label: 'Huawei MateBook' }
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
