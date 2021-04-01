const inputDataOne = [
  {
    node: {
      name: "Elliot Alderson",
      age: "26",
      qualification: "Btech",
      jobTitle: "UI Developer",
      collegeEducation: {
        edges: [
          {
            node: {
              course: "Btech",
              collegeName: "MITS",
              year: "2017",
            },
          },
        ],
      },
      schoolEducation: {
        edges: [
          {
            node: {
              course: "High School",
              schoolName: "STPS",
              year: "2013",
            },
          },
        ],
      },
    },
  },
  {
    node: {
      name: "Darlene Alderson",
      age: "32",
      qualification: "MBA",
      jobTitle: "HR Manager",
      collegeEducation: {
        edges: [
          {
            node: {
              course: "MBA",
              collegeName: "IIM",
              year: "2018",
            },
          },
        ],
      },
      schoolEducation: {
        edges: [
          {
            node: {
              course: "High School",
              schoolName: "Nirmala High School",
              year: "2010",
            },
          },
        ],
      },
    },
  },
];

const dataModelOne = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Qualification",
    key: "qualification",
  },
  {
    title: "Job Title",
    key: "jobTitle",
  },
  {
    title: "College Education",
    key: "collegeEducation",
    children: [
      {
        title: "College",
        key: "education",
        children: [
          {
            title: "Course",
            key: "collegeEducation",
            dataKey: "course",
          },
          {
            title: "College Name",
            key: "collegeEducation",
            dataKey: "collegeName",
          },
          {
            title: " Year",
            key: "collegeEducation",
            dataKey: "year",
          },
        ],
      },
    ],
  },
  {
    title: "School Education",
    key: "schoolEducation",
    children: [
      {
        title: "College",
        key: "education",
        children: [
          {
            title: "Course",
            key: "schoolEducation",
            dataKey: "course",
          },
          {
            title: "School Name",
            key: "schoolEducation",
            dataKey: "schoolName",
          },
          {
            title: "Year",
            key: "schoolEducation",
            dataKey: "year",
          },
        ],
      },
    ],
  },
];

const outputToGet = [
  {
    title: "Name",
    data0: "Elliot Alderson",
    data1: "Darlene Alderson",
  },
  {
    title: "Age",
    data0: "26",
    data1: "32",
  },
  {
    title: "Qualification",
    data0: "Btech",
    data1: "MBA",
  },
  {
    title: "Job Title",
    data0: "UI Developer",
    data1: "HR Manager",
  },
  {
    title: "College Education",
    children: [
      {
        title: "Course",
        data0: "Btech",
        data1: "MBA",
      },
      {
        title: "College Name",
        data0: "MITS",
        data1: "IIM",
      },
      {
        title: "Year",
        data0: "2017",
        data1: "2018",
      },
    ],
  },
  {
    title: "School Education",
    children: [
      {
        title: "Course",
        data0: "High School",
        data1: "High School",
      },
      {
        title: "School Name",
        data0: "STPS",
        data1: "Nirmala High School",
      },
      {
        title: "Year",
        data0: "2013",
        data1: "2010",
      },
    ],
  },
];

module.exports = { inputDataOne, dataModelOne };
