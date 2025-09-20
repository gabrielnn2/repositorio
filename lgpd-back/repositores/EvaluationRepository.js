import Evaluation from '../models/Evaluation.js';

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save();
};

const getAllEvaluations = async (evaluationModel) => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
};

const deleteEvaluationById = async (id) => {
    return await Evaluation.destriy({where: {id: id}});
};

const updateEvaluationById = async (id, EvaluationModel) => {
    try {
        const result = await Evaluation.update(EvaluationModel, {where: {id: id}});
        if (result[0] === 1) {
            return { message: 'Evaluation updated successfully' };
        } else {
            return { message: 'Evaluation not found or no changes made ${id}', status: 404 };
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;