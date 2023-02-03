const express = require('express');
const path = require('path');
const app = express();

//'view engine','name_of_the_engine'
app.set('view engine', 'ejs')

//'view','folder_name'
app.set('views', 'views')

//admin Route
const adminRoutes = require('./routes/admin')
//shop Route
const shopRoutes = require('./routes/shop')
//error Route
const errorController = require('./controllers/error')

app.use(express.urlencoded({ extended: false }));

//public files
app.use(express.static(path.join(__dirname, 'public')))

//admin middleware with filter '/admin'
app.use('/admin', adminRoutes.routes)
//shop middleware
app.use(shopRoutes)
//error middleware
app.use(errorController.get404);

//server listen
app.listen(3000, () => {
    console.log('listening on http://localhost:3000')
})

