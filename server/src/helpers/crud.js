import { successResponse, errorResponse } from "./index";

export const getAll = (model) => async (req, res) => {
    try {
        const docs = await model.findAll({include : {all : true}});
        return successResponse(req, res, { result: docs })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

export const getMany = (model) => async (req, res) => {
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const page = req.query.page ? Number(req.query.page) : 1;
    try  {
        
        const docs = await model.findAndCountAll({
            offset: (page - 1) * limit,
            limit
        });
        const {count} = docs;
        return successResponse(req, res, {
            result:docs.rows, pagination: {
                page, count: docs.rows.length, total:count
            }
        })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

export const getOne = (model) => async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) throw new Error("id not found!")
        const doc = await model.findOne({
            where: {
                id
            }
        });
        if (!doc) {
            return errorResponse(req, res, "not found!", 404);
        }
        return successResponse(req, res, { result : doc  })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

export const createOne = (model) => async (req, res) => {
    try {
        const doc = await model.create({
            ...req.body
        });
        return successResponse(req, res, { doc })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

export const updateOne = (model) => async (req, res) => {
    const { id } = req.body;
    try {
        const affectedRows = await model.update({
            ...req.body
        }, {
            where: {
                id
            },
        });
        if (affectedRows == 0) {
            return errorResponse(req, res, "nothing changed", 404)
        }
        return successResponse(req, res, { affectedRows })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}
export const removeOne = model => async (req, res) => {
    const { id } = req.body;
    try {
        const affectedRows = await model.destroy({
            where: {
                id
            },
        });
        if (affectedRows == 0) {
            return errorResponse(req, res, "nothing changed", 404)
        }
        return successResponse(req, res, { affectedRows })
    }
    catch (e) {
        return errorResponse(req, res, e.message)
    }
}

export default (model) => ({
    getAll: getAll(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
    updateOne: updateOne(model),
    removeOne: removeOne(model)
})
