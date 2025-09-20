import User from '../models/User.js';

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save();
};

const getAllUsers = async (userModel) => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const deleteUserById = async (id) => {
    return await User.destriy({where: {id: id}});
};

const updateUserById = async (id, UserModel) => {
    try {
        const result = await User.update(UserModel, {where: {id: id}});
        if (result[0] === 1) {
            return { message: 'User updated successfully' };
        } else {
            return { message: 'User not found or no changes made ${id}', status: 404 };
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory;