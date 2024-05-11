const courseModel = 
  [
    {
      "id": 1,
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7M19LbmhfO8v8rGvk-reMerPYOL0VxOK0sj4eysvqrhZBd14eDJCd1KXXwW_d4N_K-OQ&usqp=CAU",
      "name": "Introduction to JavaScript",
      "rating":5,
      "instructor": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "description": "A beginner-friendly course to learn the fundamentals of JavaScript programming.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "6 weeks",
      "schedule": [
        {
          "day": "Tuesday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Thursday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Basic JavaScript knowledge"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to JavaScript",
          "content": "Overview of JavaScript and its importance in web development."
        },
        {
          "week": 2,
          "topic": "Variables and Data Types",
          "content": "Understanding variables, data types, and variable scope."
        },
        {
          "week": 3,
          "topic": "Control Flow",
          "content": "Learning about conditional statements and loops."
        },
        {
          "week": 4,
          "topic": "Functions",
          "content": "Exploring functions and their role in JavaScript."
        },
        {
          "week": 5,
          "topic": "Arrays and Objects",
          "content": "Working with arrays, objects, and data structures."
        },
        {
          "week": 6,
          "topic": "DOM Manipulation",
          "content": "Introduction to manipulating the Document Object Model (DOM)."
        }
      ]
    },
    // Add more courses here...
    {
      "id": 2,
      "name": "React.js Masterclass",
      "img":"https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
    {
      "id": 3,
      "name": "Node js Masterclass",
      "img":"https://externlabs.com/blogs/wp-content/uploads/2021/12/2400%D1%851260-rw-blog-node-js.png",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
    {
      "id": 4,
      "name": "Mongo DB Masterclass",
      "img":"https://i.ibb.co/kX3JpCQ/1-b0-Tt-GI6g-WFLlt-L1-Qk-Rx-Vdg.png",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
    {
      "id": 5,
      "name": "Python Programming",
      "img":"https://miro.medium.com/v2/resize:fit:828/format:webp/1*3IcLSFuT8PQg4cUBaRXH1A.png",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
    {
      "id": 6,
      "name": "Python Programming",
      "img":"https://imageio.forbes.com/specials-images/imageserve/5e7cdb76281468000685c675/0x0.jpg?format=jpg&crop=640,360,x0,y60,safe&height=900&width=1600&fit=bounds",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
    {
      "id": 7,
      "name": "Python Programming",
      "img":"https://kinsta.com/wp-content/uploads/2023/10/PHP_Feature-Image.jpg",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
    {
      "id": 8,
      "name": "Python Programming",
      "img":"https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg",
      "instructor": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "description": "A comprehensive course to master React.js and build scalable web applications.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": [
        {
          "day": "Monday",
          "time": "6:00 PM - 8:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "6:00 PM - 8:00 PM"
        }
      ],
      "location": "Online",
      "prerequisites": [
        "Intermediate JavaScript knowledge",
        "Familiarity with HTML and CSS"
      ],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to React.js",
          "content": "Overview of React.js and its ecosystem."
        },
        {
          "week": 2,
          "topic": "Components and Props",
          "content": "Understanding components, props, and component composition."
        },
        {
          "week": 3,
          "topic": "State and Lifecycle",
          "content": "Managing component state and lifecycle methods."
        },
        {
          "week": 4,
          "topic": "Forms and Events",
          "content": "Handling forms and events in React applications."
        },
        {
          "week": 5,
          "topic": "React Router",
          "content": "Navigation and routing using React Router."
        },
        {
          "week": 6,
          "topic": "Redux",
          "content": "State management with Redux."
        },
        {
          "week": 7,
          "topic": "API Integration",
          "content": "Fetching data from APIs and integrating with React applications."
        },
        {
          "week": 8,
          "topic": "Final Project",
          "content": "Building a final project to apply knowledge gained throughout the course."
        }
      ]
    },
  ]
 


export default courseModel;
