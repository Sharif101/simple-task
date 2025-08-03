export const accordionData = [
  {
    id: 1,
    title: "Frontend Development",
    content: "Learn about modern frontend technologies and frameworks.",
    children: [
      {
        id: 2,
        title: "React",
        content: "A JavaScript library for building user interfaces.",
        children: [
          {
            id: 3,
            title: "Hooks",
            content:
              "useState, useEffect, and custom hooks for state management.",
            children: [],
          },
          {
            id: 4,
            title: "Components",
            content: "Functional and class components, props, and composition.",
            children: [],
          },
        ],
      },
      {
        id: 5,
        title: "Vue.js",
        content: "The progressive JavaScript framework.",
        children: [],
      },
    ],
  },
  {
    id: 6,
    title: "Backend Development",
    content: "Server-side programming and databases.",
    children: [
      {
        id: 7,
        title: "Node.js",
        content: "JavaScript runtime for server-side development.",
        children: [],
      },
    ],
  },
];

export const initialFormFields = [
  {
    id: 1,
    type: "text",
    label: "Full Name",
    required: true,
    children: [],
  },
  {
    id: 2,
    type: "email",
    label: "Email Address",
    required: true,
    children: [],
  },
  {
    id: 3,
    type: "select",
    label: "Account Type",
    options: ["Personal", "Business"],
    children: [
      {
        id: 4,
        type: "text",
        label: "Company Name",
        condition: "Business",
        children: [
          {
            id: 5,
            type: "number",
            label: "Number of Employees",
            children: [],
          },
        ],
      },
    ],
  },
];

export const initialListV2 = [
  { id: 1, text: "Learn React", status: "todo" },
  { id: 2, text: "Practice CSS", status: "inProgress" },
  { id: 3, text: "Build a project", status: "done" },
];
