const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost/urlshortmicroservicedb';

mongoose.connect(URI , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err));


