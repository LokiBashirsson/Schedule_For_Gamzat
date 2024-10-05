import { api } from "../services/api";

const TeachersDepartmentData = async (id: number | string = 1000) => {
    const data = await api.teacherDepartmentData(id);
    return data;
}
export default TeachersDepartmentData;