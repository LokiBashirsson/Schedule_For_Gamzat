const apiUrl = process.env.NEXT_PUBLIC_DEV_SERVER_URL;

class Api {
    async departmentData() {
        const response = await fetch(`${apiUrl}department/list`, {
            method: 'GET',
            next: { revalidate: 60 }
        });

        return response.json();
    }

    async teacherDepartmentData(id: number | string) {
        const response = await fetch(`${apiUrl}teacher/list/?department_id=${id}`, {
            method: 'GET'
        });
        return response.json()
    }
}

export const api = new Api();