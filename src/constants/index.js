import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
    web, railsJwt, turfly, wildtribute,
  } from "../assets";

  const profiles = [
    {
      link: "https://github.com/AdNeyazi",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
    },
    {
      link: "https://in.linkedin.com/in/adnan-neyazi-a314551b1",
      icon: "https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835-1536x1536.png",
    },
  ];

  const achievements = [
    {
      title: "Table Tennis winner at BNY : Secured first position for Singles, Women doubles and Mixed doubles (2024).",
    },
    {
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "SPPU Pune university state level Table-Tennis winner (2021 and 2022).",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship in AIT Pune (2019 - 2023).",
    },
    {
      title: "Branch Head of Information Technology Departmentin in AIT Pune (2021 - 2022).",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students (2021).",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship for securing 90+ % (2015 - 2023).",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015).",
    },
  ]
  
  const technologies = [
    { name: "Ruby on Rails 7", icon: "https://img.icons8.com/color/480/000000/ruby-programming-language.png" },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Bootstrap", icon: "https://img.icons8.com/color/480/000000/bootstrap.png" },
    { name: "Tailwind", icon: tailwind },
    { name: "Postgres", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPYTtRyFEh1VFKJHr4N6mAqQe1hBs3ICbJg&s" },
    { name: "MySql", icon: "https://img.icons8.com/color/480/000000/mysql-logo.png" },
    { name: "Heroku", icon: "https://img.icons8.com/color/480/000000/heroku.png" },
    { name: "AWS EC2", icon: "https://img.icons8.com/color/480/000000/amazon-web-services.png" },
    { name: "RESTful APIs", icon: "https://img.icons8.com/fluency/480/api.png" },
    { name: "Third Party Integration", icon: "https://img.icons8.com/color/480/000000/puzzle.png" },
    { name: "OOPS", icon: "https://img.icons8.com/color/480/000000/code.png" },
    { name: "MVC", icon: "https://img.icons8.com/color/480/000000/flow-chart.png" },
    { name: "ORM", icon: "https://img.icons8.com/color/480/000000/data-configuration.png" },
    { name: "Redis", icon: "https://img.icons8.com/color/480/000000/redis.png" },
    { name: "Micro-services", icon: "https://img.icons8.com/color/480/000000/services.png" },
    { name: "Elasticsearch", icon: "https://img.icons8.com/color/480/000000/elasticsearch.png" },
  ];

  const list = [
    {
      id: "web",
      title: "Projects",
    },
  ];

  export const javaProject = [
    {
      name: "Cryptography",
      description:
        "The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.",
      tags: [
        {
          name: "cryptography",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://github.com/shinchancode/Cryptography",
      source_code_link: "https://github.com/shinchancode/Cryptography",
    },
    {
      name: "Snake Yaml",
      description:
        "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
      tags: [
        {
          name: "yaml",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
      source_code_link: "https://github.com/shinchancode/Snake-Yaml-Project",
    },
    {
      name: "CRUD operations",
      description:
        "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/shinchancode/CRUD-Operation",
      source_code_link: "https://github.com/shinchancode/CRUD-Operation",
    },
    {
      name: "Byte-Array-to-File",
      description:
        "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "byteArray",
          color: "green-text-gradient",
        },
        {
          name: "file",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/shinchancode/byte-array-to-file",
      source_code_link: "https://github.com/shinchancode/byte-array-to-file",
    },
    {
      name: "Spring Boot One To Many",
      description:
        "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
      tags: [
        {
          name: "onetomany",
          color: "blue-text-gradient",
        },
        {
          name: "springbott",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://github.com/shinchancode/oneTomany-springboot",
      source_code_link: "https://github.com/shinchancode/oneTomany-springboot",
    },
    {
      name: "OOP Lab",
      description:
        "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
      source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/shinchancode/Trie-Data-structure",
      source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/shinchancode/Computer-Graphics",
      source_code_link: "https://github.com/shinchancode/Computer-Graphics",
    },
    
  ];
  
  export const webProject = [
    {
      name: "Shadbox Backend API",
      description:
        "Designed secure, versioned RESTful APIs with Devise-JWT auth; built endpoints for blogs, services, Hire Us, nested comments, and contact forms; used ActiveModel Serializers, robust error handling, CORS; validated key flows via RSpec integration tests.",
      tags: [
        { name: "Ruby", color: "blue-text-gradient" },
        { name: "Rails", color: "green-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
      ],
      image: railsJwt,
      source_link: "https://app.shadbox.com",
      source_code_link: "https://app.shadbox.com",
    },
    {
      name: "Turfly",
      description:
        "Platform to list/manage turf-rental businesses with multi‑role support (owners, admins, end‑users); turf listings, availability calendars, booking workflows, admin dashboards; manage listings, bookings, transactions, and promotions.",
      tags: [
        { name: "Ruby", color: "blue-text-gradient" },
        { name: "Rails", color: "green-text-gradient" },
        { name: "Bookings", color: "pink-text-gradient" },
      ],
      image: turfly,
      source_link: "https://turfly.co",
      source_code_link: "https://turfly.co",
    },
    {
      name: "WildTribute",
      description:
        "Enhanced production app: new features, bug fixes, and deployment maintenance; led 2 juniors with sprint planning and requirements; integrated Segment analytics, SendGrid emails, and Stripe payments.",
      tags: [
        { name: "Ruby", color: "blue-text-gradient" },
        { name: "Rails", color: "green-text-gradient" },
        { name: "Stripe", color: "pink-text-gradient" },
      ],
      image: wildtribute,
      source_link: "https://wildtribute.herokuapp.com/",
      source_code_link: "https://wildtribute.herokuapp.com/",
    },
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
      source_code_link: "https://github.com/shinchancode/Final-Year-Project",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
      source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
      source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
      source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    },
    
  ];
  
  const experiences = [
    {
      title: "Jr Software Developer",
      company_name: "Shadbox Infosystem Pvt Ltd",
      icon: bny,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      link: "",
      points: [
        "Architected and deployed Rails-based backend services powering Shadbox’s ecommerce platform.",
        "Built an ActiveAdmin interface to manage product catalogs (T-shirts, hats, accessories).",
        "Integrated Sentry for real-time error tracking and AWS S3 for secure file uploads.",
        "Documented and maintained API specs via Swagger; wrote custom Rake tasks for reporting.",
        "Ensured code quality through comprehensive RSpec suites and CI/CD checks."
      ],
      link: "https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP",
    },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Computer Science & Technology",
      name: "Anjuman College of Engineering and Technology Sadar, Nagpur",
      year: "(2019 - 2023)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science/Maths",
      name: "M.M Rabbani High School & JR College Kamptee, Nagpur",
      year: "2018-2019",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      name: "M.M Rabbani High School & JR College Kamptee, Nagpur",
      year: "2016-2017",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
