const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://omaddiyorumarov:FvXBrCwOHOS1NTyh@cluster0.spwuzp4.mongodb.net/";
mongodb.connect(connectionString, {
useNewUrlParser: true, 
useUnifiedTopology: true,
}, (err, client) => {
if(err) console.log("Error: MongoDB connection");
else{
    console.log("MongoDB connection is successful");
    console.log(client);
    const app = require("./app");
    const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`The server is running on the port ${PORT}, https://localhost${PORT}`);
});
}
});

