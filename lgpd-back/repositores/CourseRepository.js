import Course from '../models/Course.js';

const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel);
    return save();
};

const getAllCourses = async (courseModel) => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};

const getCourseById = async (id) => {
    return await Course.findByPk(id);
};

const deleteCourseById = async (id) => {
    return await Course.destriy({where: {id: id}});
};

const updateCourseById = async (id, CourseModel) => {
    try {
        const result = await Course.update(CourseModel, {where: {id: id}});
        if (result[0] === 1) {
            return { message: 'Course updated successfully' };
        } else {
            return { message: 'Course not found or no changes made ${id}', status: 404 };
        }
    } catch (error) {
        console.error();
    }
};

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory;