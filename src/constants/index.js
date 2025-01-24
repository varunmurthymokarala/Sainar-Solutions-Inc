import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets/assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#home",
    },
    {
      id: "1",
      title: "About US",
      url: "#about",
    },
    {
      id: "2",
      title: "Services",
      url: "#services",
    },
    {
      id: "3",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "4",
      title: "Careers",
      url: "#careers",
    },
    {
      id: "5",
      title: "Contact US",
      url: "#contact",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Enterprise Applications",
    "BigData Solutions",
    "Machine Learning Operations",
    "Artificial Intelligence"
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Secure Voice Biometrics",
      text: "Secure voice biometrics analyzes unique voice patterns to verify a person's identity, ensuring accurate and convenient authentication. It enhances security by using physiological and behavioral voice traits to prevent unauthorized access.",
      date: "May 2024",
      status: "In progress",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Cloud Access Security Broker",
      text: "A Cloud Access Security Broker (CASB) acts as a cybersecurity layer between users and cloud services, ensuring secure access, data protection, and compliance. It provides visibility, threat detection, and control over sensitive data in cloud environments",
      date: "September 2023",
      status: "In progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Customer Service Chatbots",
      text: "A customer service chatbot powered by LLMs (Large Language Models) uses advanced ML (Machine Learning) to understand and respond to customer queries in natural language, providing accurate and efficient support. It automates interactions, improving response times and user satisfaction.",
      date: "December 2024",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Predictive Analysis with Regression ",
      text: "A predictive analysis API leveraging regression models to forecast trends and outcomes from historical data. It enables seamless integration, offering accurate predictions for decision-making in business and analytics.",
      date: "March 2024",
      status: "In progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Our Mission",
      description: null,
      price: "0",
      features: [
        "Uniting professionals to achieve success through lasting personal relationships.",
        
      ],
    },
    {
      id: "1",
      title: "Our Vision",
      description: null,
      price: "9.99",
      features: [
        "To have a meaningful impact on all the lives we serve.",
       
      ],
    },
    {
      id: "2",
      title: "Brand Promise",
      description: null,
      price: null,
      features: [
        "Great results through strategic partnership and knowledge sharing.",
        
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      
      
    },
    {
      id: "1",
      title: "Connect everywhere ",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
      
    },
    {
      id: "2",
      title: "Customer Obsession ",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
      
    },
    {
      id: "3",
      title: "Fast responding",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
     
    },
    {
      id: "4",
      title: "Improve everyday",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      
    },
    {
      id: "5",
      title: "Deliver Results",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      
    },
  ];

  export const careers = [
    {
      id: "0",
      title: "Software Developer",
      text: "Location: Frisco, Texas",
      backgroundUrl: "assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      
      
    },
    {
      id: "1",
      title: "Senior Software Developer ",
      text: "Location: Remote, USA",
      backgroundUrl: "assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
      
    },
    {
      id: "2",
      title: "Data Scientist",
      text: "Location: Remote, India",
      backgroundUrl: "assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
      
    },
    {
      id: "3",
      title: "Data Engineer",
      text: "Location: Frisco, Texas",
      backgroundUrl: "assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
     
    },
    {
      id: "4",
      title: "DevOps Engineer/ Site Reliability Engineer",
      text: "Location: Frisco, Texas",
      backgroundUrl: "assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      
    },
    {
      id: "5",
      title: "ML Engineer(MLOps)",
      text: "Location: Remote, India",
      backgroundUrl: "assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      
    },
   
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://www.linkedin.com/company/sainar-solutions-inc/",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/sainarsolutions/",
    },
    {
      id: "3",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/sainarsolutions/",
    },
  ];