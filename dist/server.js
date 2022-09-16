"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const Api_1 = __importDefault(require("./app/routes/Api"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(__dirname + "/public"));
app.use("/api", Api_1.default);
mongoose_1.default.connect("mongodb://localhost:27017/tutorial", (err) => {
    if (err) {
        console.log("Not connected to the Database : " + err);
    }
    else {
        console.log("Successfully connected to MongoDB");
    }
});
// app.get('/' , (req,res)=>{
//     res.send("hello world");
// })
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname + "/public/app/views/index.html"));
});
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server running on port " + port);
});
//# sourceMappingURL=server.js.map