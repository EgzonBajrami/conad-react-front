const endpoints = {
    register:{url:'/register',method:'POST'},
    login:{url:'/login',method:'POST'},
    addProduct:{url:'/products/addProduct',method:'POST'},
    addImage:{url:'/products/addImage/',method:'POST'},
    addOffert:{url:'/offerts/addOffert',method:'POST'},
    addOffertImage:{url:'/offerts/add-image/',method:'POST'},
    getOffertImages:{url:'/offerts/getOffert',method:'GET'},
    getProducts:{url:'/products/getProducts/',method:'GET'},
    editProduct:{url:'/products/editProduct/',method:'POST'},
    findProduct:{url:'/products/findProduct',method:'POST'},
    removeProduct:{url:'/products/removeProduct',method:'POST'},
    createComment:{url:'/comments/',method:'POST'},
    getComments:{url:'/comments/getComments', method:'GET'},
    createApplication:{url:'/application/create',method:'POST'},
    getApplications:{url:'/application/allApplications',method:'GET'},
    getSingleApplication:{url:'/application/singleApplication/',method:'GET'},


}
export default endpoints;