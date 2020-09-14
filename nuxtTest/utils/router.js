const { resolve } = require('path')
const router = [  
    {    
        name: 'vuls',    
        path: '/vuls',    
        component: resolve('./', 'pages/articles/web/index.vue')  
    },  
    {    
        name: 'columnId',    
        path: '/column/:id(\\d+).html',    
        component: resolve('./', 'pages/articles/web/_id.vue')  
    },  
    {    
        name: 'webid',    
        path: '/web/:id',    
        component: resolve('./', 'pages/articles/web/_id.vue')  
    },
]
module.exports = router
