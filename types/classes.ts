export interface Teacher {
  name: string;
  avatar: string;
}

export interface ClassStudentsInfo {
  enrolled: number;
  capacity: number;
}

export interface ClassItem {
  id: string;
  name: string;
  level: string;
  status: string;
  teacher: Teacher;
  students: ClassStudentsInfo;
  gpa: string;
  attendance: string;
  subjects: number;
  progressColor: string;
}
