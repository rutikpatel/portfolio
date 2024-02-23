// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ffc3a0 ,#4484ce, #1ad7c0, #ff9b11, #9b59b6, #6dd5ed, #a8e063",
  firstName: "Rutik",
  middleName: "",
  lastName: "Patel",
  message: " Passionate Programmer who has a dream to do his best in the field of computers. currently, an honest and hard-working employee at Walmart Canada. .",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rutikpatel",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/rutikpatel",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/rutikk.patel/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rutik-patel/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/MyProfile.png"),
  imageSize: 390,
  message:
    "My Name is Rutik; I am a graduate of George Brown College in Computer Programming and Analysis Program in 2022. I am very passionate about starting my career in the field of web development. In my leisure time, I used to spend time creating open-source projects as below.",
  resume: "https://drive.google.com/file/d/1F7LnZsQHipnnhEtkXufrn89MVleaBTn-/view?usp=drive_link",
  cover_letter: "https://drive.google.com/file/d/1B_-QFlPu8Vu_kyaYuqqwPkJ4rCaS_D2b/view?usp=sharing" ,
  academic_credentials: "https://drive.google.com/file/d/1JgZFB2oqrrT-gQHGp26Y5iFGxDnB2yeH/view?usp=sharing",
  capstone_project: "https://drive.google.com/file/d/1Fxai5ZvOlXgYXisDyu1lxTPo8kABFaBu/view?usp=sharing"
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rutikpatel", 
  reposLength: 2,
  specificRepos: ['capstone-project', 'Chat-App', 'Employee_management_app ','Weather_App'],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering.Also available for freelancing. If you have any questions, please feel free to email me at",
  email: "rutikpatel3660@gmail.com",
};

const day = new Date().getMonth()
  const experiences ={
    show: true,
    heading: "Experiences",
    data: [
      {
        role: 'Cap-1 Department Mananger',
        companylogo: require('../assets/img/walmart.jpeg'),
        name: 'Walmart - Canada',
        date: 'April-2022 – Present',
      },{
        role: 'Associate',
        companylogo: require('../assets/img/walmart.jpeg'),
        name: 'Walmart - Canada',
        date: 'Nov 2020 – April-2022',
      },
      {
        role: 'Tutor',
        companylogo: require('../assets/img/gbc.png'),
        name: `Tutoring and Learning center - George Brown College`,
        date: 'Sep 2021 – April 2022',
      },
      {
        role: 'Web Developer Intern',
        companylogo: require('../assets/img/logo-blue.png'),
        name: 'Mantic Labs web solutions ',
        date: 'June 2018 – Jan 2019',
      },

    ]
  }
  
  // const experiences = {
  //   show: true,
  //   heading: "Experiences",
  //   data: [
  //     {
  //       role: 'Associate',
  //       companylogo: require('../assets/img/walmart.jpeg'),
  //       name: 'Walmart - Canada',
  //       date: 'Nov 2020 – Present',
  //     },
  //     {
  //       role: 'Tutor',
  //       companylogo: require('../assets/img/gbc.png'),
  //       name: `Tutoring and Learning center - George Brown College`,
  //       date: 'Sep 2021 – April 2022',
  //     },
  //     {
  //       role: 'Web Developer Intern',
  //       companylogo: require('../assets/img/logo-blue.png'),
  //       name: 'Mantic Labs web solutions ',
  //       date: 'June 2018 – Jan 2019',
  //     },

  //   ]
  // }





export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
