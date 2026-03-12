export const classStats = [
  {
    title: "Total Classes",
    value: "12",
    icon: "School",
    color: "teal",
  },
  {
    title: "Active Classes",
    value: "12",
    icon: "CheckCircle",
    color: "green",
  },
  {
    title: "Total Students",
    value: "427",
    icon: "Users",
    color: "orange",
  },
  {
    title: "Avg Attendance",
    value: "95.5%",
    icon: "CalendarCheck",
    color: "indigo",
  },
];

export const mockClasses = [
  {
    id: "1",
    name: "JSS 1 Gold",
    level: "Gold",
    status: "Active",
    teacher: {
      name: "Mrs. Sarah Johnson",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20female%20teacher%20with%20warm%20smile%20wearing%20elegant%20business%20attire%20in%20modern%20classroom%20setting%20with%20natural%20lighting%20and%20educational%20materials%20in%20background&width=120&height=120&seq=teacher-sarah-johnson&orientation=squarish",
    },
    students: {
      enrolled: 38,
      capacity: 40,
    },
    gpa: "3.45",
    attendance: "94.5%",
    subjects: 6,
    progressColor: "bg-red-500",
  },
  {
    id: "2",
    name: "JSS 1 Blue",
    level: "Blue",
    status: "Active",
    teacher: {
      name: "Mr. David Chen",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20teacher%20with%20friendly%20demeanor%20wearing%20formal%20attire%20in%20modern%20classroom%20with%20educational%20technology%20and%20bright%20lighting&width=120&height=120&seq=teacher-david-chen&orientation=squarish",
    },
    students: {
      enrolled: 35,
      capacity: 40,
    },
    gpa: "3.32",
    attendance: "92.8%",
    subjects: 6,
    progressColor: "bg-amber-500", // HTML had bg-orange-500, but tailwind uses orange, let's use tailwind orange
  },
  {
    id: "3",
    name: "JSS 2 Gold",
    level: "Gold",
    status: "Active",
    teacher: {
      name: "Dr. Amara Okafor",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20female%20science%20teacher%20with%20confident%20demeanor%20wearing%20lab%20coat%20in%20modern%20science%20laboratory%20with%20equipment%20and%20educational%20materials&width=120&height=120&seq=teacher-amara-okafor&orientation=squarish",
    },
    students: {
      enrolled: 40,
      capacity: 40,
    },
    gpa: "3.58",
    attendance: "95.2%",
    subjects: 6,
    progressColor: "bg-red-500", // Wait, html used red-500. Let's stick with what they had, actually probably meant to be dynamic. We will use the exact classes.
  },
  {
    id: "4",
    name: "JSS 2 Blue",
    level: "Blue",
    status: "Active",
    teacher: {
      name: "Mrs. Fatima Hassan",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20female%20teacher%20with%20elegant%20hijab%20wearing%20professional%20attire%20in%20modern%20classroom%20with%20educational%20technology%20and%20bright%20atmosphere&width=120&height=120&seq=teacher-fatima-hassan&orientation=squarish",
    },
    students: {
      enrolled: 37,
      capacity: 40,
    },
    gpa: "3.41",
    attendance: "93.6%",
    subjects: 6,
    progressColor: "bg-red-500",
  },
  {
    id: "5",
    name: "JSS 3 Gold",
    level: "Gold",
    status: "Active",
    teacher: {
      name: "Mr. James Wilson",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Caucasian%20male%20technology%20teacher%20with%20friendly%20smile%20wearing%20casual%20business%20attire%20in%20computer%20lab%20with%20modern%20technology%20equipment&width=120&height=120&seq=teacher-james-wilson&orientation=squarish",
    },
    students: {
      enrolled: 36,
      capacity: 40,
    },
    gpa: "3.62",
    attendance: "96.1%",
    subjects: 6,
    progressColor: "bg-red-500",
  },
  {
    id: "6",
    name: "JSS 3 Blue",
    level: "Blue",
    status: "Active",
    teacher: {
      name: "Mr. Robert Taylor",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Caucasian%20male%20mathematics%20teacher%20with%20glasses%20wearing%20formal%20shirt%20in%20classroom%20with%20mathematical%20equations%20and%20educational%20materials&width=120&height=120&seq=teacher-robert-taylor&orientation=squarish",
    },
    students: {
      enrolled: 34,
      capacity: 40,
    },
    gpa: "3.48",
    attendance: "94.3%",
    subjects: 6,
    progressColor: "bg-orange-500",
  },
  {
    id: "7",
    name: "SSS 1 Gold",
    level: "Gold",
    status: "Active",
    teacher: {
      name: "Mrs. Jennifer Lee",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20English%20teacher%20with%20warm%20smile%20wearing%20elegant%20blouse%20in%20modern%20classroom%20with%20literature%20books%20and%20educational%20materials&width=120&height=120&seq=teacher-jennifer-lee&orientation=squarish",
    },
    students: {
      enrolled: 39,
      capacity: 40,
    },
    gpa: "3.71",
    attendance: "97.2%",
    subjects: 6,
    progressColor: "bg-red-500",
  },
  {
    id: "8",
    name: "SSS 1 Blue",
    level: "Blue",
    status: "Active",
    teacher: {
      name: "Dr. Olumide Taiwo",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20male%20physics%20teacher%20with%20confident%20demeanor%20wearing%20lab%20coat%20in%20science%20laboratory%20with%20physics%20equipment%20and%20educational%20materials&width=120&height=120&seq=teacher-olumide-taiwo&orientation=squarish",
    },
    students: {
      enrolled: 38,
      capacity: 40,
    },
    gpa: "3.55",
    attendance: "95.8%",
    subjects: 6,
    progressColor: "bg-red-500",
  },
  {
    id: "9",
    name: "SSS 2 Gold",
    level: "Gold",
    status: "Active",
    teacher: {
      name: "Dr. Hauwa Bello",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20female%20chemistry%20teacher%20with%20elegant%20hijab%20wearing%20lab%20coat%20in%20chemistry%20laboratory%20with%20scientific%20equipment%20and%20educational%20materials&width=120&height=120&seq=teacher-hauwa-bello&orientation=squarish",
    },
    students: {
      enrolled: 35,
      capacity: 40,
    },
    gpa: "3.68",
    attendance: "96.5%",
    subjects: 6,
    progressColor: "bg-orange-500",
  },
  {
    id: "10",
    name: "SSS 2 Blue",
    level: "Blue",
    status: "Active",
    teacher: {
      name: "Mr. Babatunde Adewale",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20male%20economics%20teacher%20with%20confident%20smile%20wearing%20business%20suit%20in%20modern%20classroom%20with%20economic%20charts%20and%20educational%20materials&width=120&height=120&seq=teacher-babatunde-adewale&orientation=squarish",
    },
    students: {
      enrolled: 33,
      capacity: 40,
    },
    gpa: "3.52",
    attendance: "94.7%",
    subjects: 6,
    progressColor: "bg-orange-500",
  },
  {
    id: "11",
    name: "SSS 3 Gold",
    level: "Gold",
    status: "Active",
    teacher: {
      name: "Dr. Tunde Bakare",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20male%20senior%20physics%20teacher%20with%20distinguished%20appearance%20wearing%20formal%20attire%20in%20advanced%20science%20laboratory%20with%20modern%20equipment&width=120&height=120&seq=teacher-tunde-bakare&orientation=squarish",
    },
    students: {
      enrolled: 32,
      capacity: 40,
    },
    gpa: "3.82",
    attendance: "98.1%",
    subjects: 6,
    progressColor: "bg-orange-500",
  },
  {
    id: "12",
    name: "SSS 3 Blue",
    level: "Blue",
    status: "Active",
    teacher: {
      name: "Dr. Chinwe Okeke",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20African%20female%20senior%20biology%20teacher%20with%20warm%20smile%20wearing%20lab%20coat%20in%20advanced%20biology%20laboratory%20with%20microscopes%20and%20educational%20materials&width=120&height=120&seq=teacher-chinwe-okeke&orientation=squarish",
    },
    students: {
      enrolled: 30,
      capacity: 40,
    },
    gpa: "3.75",
    attendance: "97.8%",
    subjects: 6,
    progressColor: "bg-orange-500",
  },
];
