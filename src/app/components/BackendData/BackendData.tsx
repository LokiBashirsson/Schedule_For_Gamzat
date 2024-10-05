"use client";
import { useEffect, useState } from "react";
import styles from "./BackendData.module.scss";
import TeachersDepartmentData from "@/app/TeachersDepartmentData/TeachersDepartmentData";

export default function BackendData(props: any) {
  const { data } = props;
  const [departmentIsActive, setDepartmentIsActive] = useState<boolean>(true);
  const [departmentName, setDepartmentName] = useState<any>({
    id: 1000,
    dataName: "Выбрать кафедру",
  });
  const [teacherDepartment, setTeacherDepartment] = useState<any>({
    data: { teachers: [] },
  });
  const [scheduleIsActive, setScheduleIsActive] = useState<boolean>(true);
  let departments = data.data.departments;
  let teachers = teacherDepartment.data.teachers;
  debugger;

  useEffect(() => {
    const func = async () =>
      setTeacherDepartment(await TeachersDepartmentData(departmentName.id));
    func();
  }, [departmentName.dataName]);

  return (
    <div>
      <div
        className={styles.scheduleForm}
        onClick={() => {
          setDepartmentIsActive(!departmentIsActive);
          teachers.splice(0, teachers.length + 1);
        }}
      >
        {departmentName.dataName ? departmentName.dataName : "Выбрать кафедру"}
      </div>
      <div
        className={`${styles.scheduleActive} ${
          departmentIsActive && styles.close
        }`}
      >
        <div>
          {departments.map((e: any) => {
            return (
              <div
                key={e.id}
                className={styles.department_name}
                onClick={() => {
                  setDepartmentName({ id: e.id, dataName: e.department_name });
                  setDepartmentIsActive(!departmentIsActive);
                }}
              >
                {e.department_name}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.scheduleForm} ${
          !departmentName.id && styles.close
        }`}
        onClick={() => setScheduleIsActive(!scheduleIsActive)}
      >
        {teacherDepartment?.dataName
          ? teacherDepartment?.dataName
          : "Выбрать преподавателя"}
      </div>
      <div
        className={`${styles.scheduleActive} ${
          !teachers.length && styles.close
        }`}
      >
        {teachers &&
          teachers.map((e: any) => {
            return (
              <div>
                <div>{e.first_name}</div>
                <div>{e.last_name}</div>
                <div>{e.second_name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
