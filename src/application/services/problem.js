
let problemApp = {};
import problemModel from '../models/problem.js';

problemApp.insert = async (model) => {
    problemModel.insert(model);
};

export default problemApp;

// userApp.getById = async (_id) => {
//     var result;
//     await userModel.findById(_id, function (err, user) {
//         if (err) throw err;
//         result = user
//     });
//     return result;
// };

// userApp.getAll = async () => {
//     var result;
//     await userModel.find((err, users) => {
//         if (err) throw err;
//         result = users;
//     });
//     return result;
// };

// userApp.update = async (model) => {
//     await userModel.findByIdAndUpdate(model.id, (err, user) => {
//         if (err) throw err;
//     });
//     return model;
// };

// userApp.insert = async (model) => {
//     var result;
//     await userModel.add(model, (err, user) => {
//         result = user;
//     });
//     return result;
// }