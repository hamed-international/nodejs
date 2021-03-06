
import context from '../../domain/_app/mssql-context.js';
import account from "../../domain/entities/account.js";

let signin = async (model) => {
    var query = `select * from dbo.[account] where username = '${model.username}'`;
    var result = await context.query(query);
    return result != null && result != undefined ? result.recordset[0] : null;
}

let getById = async (id) => {
    //var props[];
    //props[0] = new sqlmodel('in', 'Id', context.mssql.Int, id);
    //var query = `select top(1) * from dbo.[user] where id = ${id}`;
    //var result = await context.query(query, props);
    var result = await context.query(`select top(1) * from dbo.[account] where id = ${id}`);
    //var result = await context.query(`select * from user where id = ${id} limit 1`);
    return result != null && result != undefined ? result.recordset[0] : null;
};

let getAll = async () => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from dbo.[account]`);
    context.pool.close();
    return result.recordset;
};

let update = async (model) => {
    await userModel.findByIdAndUpdate(model.id, (err, user) => {
        if (err) throw err;
    });
    return model;
};

let insert = async (model) => {
    var result;
    await userModel.add(model, (err, user) => {
        result = user;
    });
    return result;
};

export default { getById, getAll, update, insert };