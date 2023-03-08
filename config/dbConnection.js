const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect  = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('DB Connected', connect.connection.host, connect.connection.name)
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb



// env file
// PORT = 5001
// CONNECTION_STRING = mongodb+srv://iyashraj:cVBiOtkxcMoe2U6G@yashcluster.fvmvgcr.mongodb.net/mycontacts-backend?retryWrites=true&w=majority