 interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imgUrl: string;
  content: string;
  category: string;
}

interface BlogContentItem {
  type: "paragraph" | "image" | "heading" | "code";
  content?: string;
  src?: string;
  alt?: string;
  level?: 1 | 2 | 3;
}

export const blogPosts: BlogPost[] = [
  // Development Category
  {
    id: 1,
    title: "The Future of Web Development",

    description:
      "Explore the latest trends and tools shaping the future of web development.",
    author: "John Doe",
    date: "October 4, 2024",
    imgUrl:
      "https://img.freepik.com/premium-photo/cyberpunk-boy-from-future-fantasy-city-with-city-lights_989520-2583.jpg?w=740",
    content:
      "In this article, we dive deep into the innovations and frameworks that will define web development in the coming years...",
    category: "Development",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    description:
      "A beginner-friendly guide to mastering closures in JavaScript.",
    author: "Jane Smith",
    date: "September 28, 2024",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*a3BHGbuAMpOaZj6HkTrNqA.png",
    content:
      "Closures are a fundamental concept in JavaScript, allowing you to create encapsulated logic. In this guide, we explore how closures work and provide examples...",
    category: "Development",
  },
  // Lifestyle Category
  {
    id: 3,
    title: "How to Achieve a Work-Life Balance as a Remote Worker",
    description:
      "Practical tips on balancing work and personal life while working remotely.",
    author: "Emily Davis",
    date: "October 10, 2024",
    imgUrl:
      "https://img.freepik.com/free-photo/full-shot-man-waving-phone_23-2149177985.jpg?t=st=1728139139~exp=1728142739~hmac=e785a0a1893f4c75e85560766935a9b0f9ebe208dbdeda83ac481cae801231b5&w=900",
    content:
      "This post covers ways to manage work hours, set boundaries, and prioritize personal time.",
    category: "Lifestyle",
  },
  // Tech Trends Category
  {
    id: 4,
    title: "AI and the Future of Work",
    description: "How artificial intelligence is transforming the workplace.",
    author: "Alex Johnson",
    date: "October 8, 2024",
    imgUrl:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?t=st=1728139304~exp=1728142904~hmac=edf886b8c823e391cab47beaa29b33dcdbfd98d3343c092f77bf7370ed8ab9d4&w=826",
    content:
      "This article explores AI's role in automation, job displacement, and new job opportunities.",
    category: "Tech Trends",
  },
  {
    id: 5,
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "Exploring the non-financial applications of blockchain technology.",
    author: "Sophia Lee",
    date: "October 3, 2024",
    imgUrl:
      "https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?t=st=1728139245~exp=1728142845~hmac=199defa4f12b1b23519947d84dee2b809d96c7327da6dd5e58bb34017960f6f1&w=826",
    content:
      "Blockchain is making waves in supply chain management, healthcare, and more.",
    category: "Tech Trends",
  },
  // Health & Wellness Category
  {
    id: 6,
    title: "Mental Health in the Tech Industry",
    description:
      "Addressing the rise of burnout in tech careers and how to maintain mental well-being.",
    author: "Laura Greene",
    date: "September 25, 2024",
    imgUrl:
      "https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148531011.jpg?t=st=1728139531~exp=1728143131~hmac=dd3534272583bbd2707577fed89e6f689a3b140d1b7947e656ccc0564d36d3e5&w=740",
    content:
      "This article provides tips on managing stress and maintaining mental health in the fast-paced tech world.",
    category: "Health & Wellness",
  },
  {
    id: 7,
    title: "5 Daily Habits for a Healthier Lifestyle",
    description:
      "Simple daily habits to improve your physical and mental health.",
    author: "James Lee",
    date: "September 29, 2024",
    imgUrl:
      "https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125013.jpg?t=st=1728148007~exp=1728151607~hmac=87f7bbfee6653d1c26919811cd7990ee8b7b1112891dd7fd23c0c3887feaa724&w=900",
    content:
      "This post covers small changes in your daily routine that can make a big difference to your overall well-being.",
    category: "Health & Wellness",
  },
  {
    id: 8,
    title: "Mastering Time Management: 5 Strategies for Success",
    description:
      "Learn how to optimize your time and become more productive with these proven techniques.",
    author: "David Clark",
    date: "September 30, 2024",
    imgUrl:
      "https://www.cleanlink.com/resources/editorial/2023/29797-clock-sstock-533640004.jpg",
    content:
      "Time management is one of the most critical skills for success in both personal and professional life. In this post, we explore five key strategies to help you stay organized, avoid procrastination, and achieve your goals...",
    category: "Habits",
  },
  {
    id: 9,
    title: "Effective Study Habits for College Students",
    description:
      "Tips and techniques to help students stay organized and improve their academic performance.",
    author: "Linda Garcia",
    date: "September 25, 2024",
    imgUrl:
      "https://world-schools.com/wp-content/uploads/2019/12/187-Feat-img-VIDEO-Top-5-tips-establishing-good-study-habits-for-life-1024x382.jpg.optimal.jpg",
    category: "habits",
    content:
      "College life can be overwhelming, but developing effective study habits is crucial for academic success. In this post, we explore strategies such as time management, goal setting, and active learning techniques that will help students make the most of their study time...",
  },
];

export const blogContents: { [key: number]: BlogContentItem[] } = {
  1: [
    {
      type: "paragraph",
      content:
        "The age of digitalization has ushered in groundbreaking advancements in web technologies. From the early days of basic HTML sites to dynamic, AI-driven platforms we see today, web development has come a long way. Now, with the proliferation of mobile devices and an ever-demanding user base, web development is poised to undergo even more transformative changes.",
    },
    { type: "heading", content: "Current State of Web Development", level: 1 },
    {
      type: "paragraph",
      content:
        "In 2024, web development is more advanced than ever. There are several popular tools and technologies that web developers use to create modern, interactive websites.",
    },
    {
      type: "heading",
      content: "Most popular web tools and technologies in 2024",
      level: 2,
    },
    {
      type: "paragraph",
      content:
        "React: The brainchild of Facebook, React remains a heavyweight in the realm of web development.",
    },
    {
      type: "paragraph",
      content:
        "Vue.js: Vue.js, though younger than its counterparts, has carved a niche for itself, especially among startups and SMEs:",
    },
    {
      type: "paragraph",
      content:
        "Node.js: Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write server-side code, develop APIs, and access the database:",
    },
    {
      type: "paragraph",
      content:
        "Flutter for Web: Initially conceived as a framework for mobile applications, Flutter has successfully branched out into the domain of web development.",
    },
    {
      type: "heading",
      content: "The role of AI and ML in web development",
      level: 2,
    },
    {
      type: "paragraph",
      content:
        "Artificial Intelligence (AI) and Machine Learning (ML) are shifting from being mere buzzwords to integral components of web development.",
    },
    {
      type: "paragraph",
      content:
        "Chatbots and customer support: With advancements in natural language processing, chatbots have become more sophisticated. They now offer real-time, human-like interactions, ensuring users get answers instantaneously. By 2023, it was projected that over 85% of customer interactions would be handled without human intervention.",
    },
    {
      type: "paragraph",
      content:
        "Personalization: AI-driven algorithms analyze user behaviors and preferences, leading to hyper-personalized content delivery. Websites of the future will adapt in real-time, showcasing content tailored to individual user profiles, enhancing user engagement and conversion rates.",
    },
    { type: "heading", content: "conclusion", level: 2 },
    {
      type: "paragraph",
      content:
        "As we delve deeper into 2024 and look towards the future, the digital landscape continues its rapid evolution. At What the Flutter we have been at the forefront of this change, harnessing the power of Flutter to redefine web experiences. While trends like AI, PWAs, and IoT mark the dawn of a new era in web development, our commitment remains anchored in delivering innovative, future-ready solutions for our clients.",
    },
  ],
  2: [
    {
      type: "paragraph",
      content:
        "In this post, you will discover what JavaScript Closure is and how to use it in your programming code. You will also learn more than one way to perform closure in JavaScript. Finally, you will see code examples of how to complete your closure to support everything you have learned.Let s get started.",
    },
    { type: "heading", content: "What is closure in JavaScript?", level: 1 },
    // { type: "image", src: "/path/to/second-blog-image.jpg", alt: "Image in second post" },
    {
      type: "paragraph",
      content:
        "Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function. Lexical scoping is the process used to define the scope of a variable by its position in the source code.",
    },
    {
      type: "paragraph",
      content:
        "When you define a function, you can only access its variables from within the function. Attempting to access variables from outside the function will result in a scope error; this is where closure comes in handy.",
    },
    {
      type: "paragraph",
      content:
        "Let s look at scope with a code example showcasing variables declared in the global and local scopes.",
    },

    {
      type: "code",
      content: `let message = "Hello";
        function buildGreeting() {
          let audience = "World";
          console.log(message + " " + audience);
        }`,
    },
    {
      type: "paragraph",
      content: `In the above example, there are two scopes; the first is the global scope, where the variable "message" is declared. The second is the function's local scope, where the variable "audience" is declared. In this code, the function can access the variable "message"; however, "audience" is only accessible to the function. If you try to access the function's local variable, the code will throw an error in response.`,
    },
    { type: "heading", content: `"JavaScript Closure"`, level: 1 },
    {
      type: "paragraph",
      content: `As a result of this local scoping, it also means that the greetUser() function is not available from the global scope. However, it's interesting to note that we can access the greetUser() function through the buildGreeting() function.`,
    },
    {
      type: "paragraph",
      content: `To make the greetUser() function accessible from the global scope, you return the greetUser() function from within the buildGreeting() function. Then you assign the buildGreeting() function to a variable and call that variable like a function`,
    },
    {
      type: "code",
      content: `function buildGreeting() {
          let message = "Hello";
          function greetUser() {
            console.log(message);
          }
          return greetUser;
        }
        let hello = buildGreeting();
        hello();
        `,
    },
    { type: "heading", content: "Concluding Remarks" },
    {
      type: "paragraph",
      content:
        "Closures are one of those subtle concepts in JavaScript that are difficult to grasp at first. But once you understand them, you realize that things could not have been any other way. ",
    },
    {
      type: "paragraph",
      content:
        "Hopefully these step-by-step explanations helped you really understand the concept of closures in JavaScript!",
    },
  ],
  3: [
    {
      type: "paragraph",
      content:"With the rise of remote work, achieving a healthy work-life balance has become more challenging yet more crucial than ever. Remote work offers flexibility and freedom, but without proper boundaries, it can easily blur the lines between personal and professional life. In this blog, we’ll explore some practical tips on how remote workers can maintain a healthy balance, ensuring productivity while also prioritizing personal time.",
      level: 1,
    },
    { type: "heading", content: `Set Clear Working Hours`, level: 1 },
    {type: "paragraph",
      content: `One of the most effective ways to establish a work-life balance is by setting defined working hours. This creates a routine, helping remote workers stay focused and productive. By designating start and end times, you can prevent work from spilling over into personal time. It's important to communicate these boundaries with both your employer and family members to avoid interruptions or late-night work requests.`,
    },
    { type: "heading", content: ` Create a Dedicated Workspace`, level : 1 },
    { type: 'paragraph', content: "Having a dedicated workspace not only helps you stay organized but also signals your brain that it's time to focus on work. A separate office or workspace sets physical boundaries between your work and personal life, making it easier to “clock out” at the end of the day. Additionally, ensure your workspace is ergonomic, promoting both comfort and productivity." },
    {
      type: "heading",
      content: 'Prioritize Breaks and Time Off',
      level : 1
    },{
      type: "paragraph",
      content: `Incorporating regular breaks throughout your workday is essential to prevent burnout. Use tools like the Pomodoro technique, where you work in focused intervals and take short breaks in between. Additionally, don't shy away from taking days off or enjoying vacations, even as a remote worker. Time away from the computer is essential for mental and emotional well-being.`
    },
    {
      type: "heading",
      content: 'Conclusion: Stay Mindful and Flexible',
      level : 1
    },
    {
      type: "paragraph",
      content: `Achieving a perfect work-life balance requires ongoing effort and mindfulness. Be open to adjusting your strategies as needed, and remember that flexibility is one of the greatest advantages of remote work. By setting boundaries, creating a dedicated workspace, and prioritizing self-care, you can enjoy the benefits of remote work while still maintaining a healthy balance between your career and personal life.`
    },
  ],
  4: [
    { type: "heading", content: `The Rise of Automation: What AI Means for Routine Tasks`, level: 1 },
    {type: "paragraph",
      content:"Artificial intelligence (AI) is transforming industries by automating repetitive and routine tasks that once required human labor. From data processing to customer service chatbots, AI systems can perform tasks faster and with more accuracy than humans. This shift to automation is streamlining operations across sectors like manufacturing, finance, and healthcare, allowing businesses to cut costs and increase efficiency. However, as more roles are automated, questions arise about what this means for the workforce and how humans will adapt to this rapidly changing landscape.",
      level: 1,
    },

    { type: "heading", content: `Job Displacement: The Concern of a Changing Workforce`, level : 1 },
    {
      type: "paragraph",
      content: `While automation can lead to increased productivity, it also raises concerns about job displacement. A 2019 report from the World Economic Forum predicted that by 2025, AI could displace as many as 85 million jobs globally. Jobs that involve repetitive, routine, or data-driven tasks, like assembly line work, clerical jobs, and basic customer service roles, are most vulnerable to automation. Workers in these roles face the risk of losing their jobs as machines take over these functions.`,
    },
    { type: 'paragraph', content: "However, job displacement doesn’t necessarily mean mass unemployment. Historically, technological advancements have shifted the nature of work rather than completely eliminating it. While some jobs may become obsolete, new roles emerge in their place, requiring different skill sets." },
    {
      type: "heading",
      content: 'The Creation of New Opportunities: AI-Driven Jobs',
      level : 1
    },
     
    {
      type: "paragraph",
      content: `Despite concerns over job displacement, AI is also creating new opportunities, especially in roles that require human creativity, emotional intelligence, and technical expertise. Jobs in AI development, machine learning, and data analysis are rapidly growing. Additionally, AI's ability to handle routine tasks frees up human workers to focus on higher-level functions such as strategy, creativity, and innovation.`
    },
    {
      type: "paragraph",
      content: `Moreover, sectors like healthcare, education, and entertainment are leveraging AI to enhance human roles rather than replace them. For instance, AI can assist doctors in diagnosing diseases more accurately, leaving them more time for patient care. Similarly, AI is being used in education to create personalized learning experiences, while teachers can focus on fostering critical thinking and interpersonal skills.`
    },
    {
      type: "heading",
      content: 'Conclusion',
      level : 1
    },
     
    {
      type: "paragraph",
      content: `AI is undeniably reshaping the future of work. While there are challenges, particularly in terms of job displacement, there are also vast opportunities for those willing to evolve. As AI continues to develop, a collaborative approach between humans and machines can lead to a more efficient, innovative, and sustainable economy.`},
  ],
  5: [
    {type : 'heading', content : "Revolutionizing Industries" , level : 1},
    {type : 'paragraph', content : "Blockchain, once synonymous with cryptocurrency, is now transforming industries such as supply chain management, healthcare, and beyond. Its decentralized and secure technology enhances transparency, security, and efficiency in ways previously unimaginable."},
    {type : 'heading', content : "Supply Chain Management:" , level : 1},
    {type : 'paragraph', content : "Blockchain provides real-time transparency, allowing businesses to trace products from origin to destination. This is critical in industries like food safety, where quick, accurate tracking is essential. Companies like Walmart and IBM use blockchain to ensure product authenticity and prevent fraud."},
    {type : 'heading', content : "Healthcare:" , level : 1},
    {type : 'paragraph', content : "Blockchain helps secure patient records and improves data sharing across hospitals and providers, offering both privacy and access. Patients can control their data and ensure accuracy in their medical history, which can improve diagnosis and treatment."},
    {type : 'heading', content : "Financial Services:" , level : 1},
    {type : 'paragraph', content : "Beyond cryptocurrency, blockchain is revolutionizing financial services through smart contracts and cross-border payments, offering faster, more efficient transactions. It also eliminates intermediaries, reducing costs."},
    {type : 'heading', content : "Intellectual Property:" , level : 1},
    {type : 'paragraph', content : "Artists and creators benefit from blockchain's ability to protect digital rights and ensure fair compensation through secure tracking and automated contracts."},
    {type : 'paragraph', content : "Blockchain is proving to be a versatile tool, and its applications in various industries are just beginning to unfold."},
    
  ],
  6: [
    {type : 'heading', content : "Tips for Managing Stress" , level : 1},
    {type : 'paragraph', content : "The tech industry is known for its fast pace, high demands, and pressure to innovate, all of which can contribute to significant stress and mental health challenges. With long hours, constant deadlines, and the ever-evolving nature of technology, it’s crucial for tech professionals to prioritize their mental well-being. Here are some tips for maintaining mental health in the tech world:"},
    {type : 'heading', content : "Set Clear Boundaries" , level : 1},
    {type : 'paragraph', content : "One of the most effective ways to manage stress is to establish boundaries between work and personal life. In the tech industry, where remote work and flexible hours are common, it's easy to let work hours extend into personal time. Setting a strict start and end time to your workday and resisting the temptation to check emails or work-related tasks after hours can help prevent burnout."},
    {type : 'heading', content : "Practice Mindfulness and Breaks" , level : 1},
    {type : 'paragraph', content : "Mindfulness techniques, such as meditation or deep breathing exercises, can help you stay grounded amidst a busy schedule. Taking regular breaks is also essential for mental rejuvenation. The Pomodoro Technique—working for 25-minute intervals followed by a 5-minute break—is particularly effective in maintaining focus and reducing stress."},
    {type : 'heading', content : "Maintain a Support Network" , level : 1},
    {type : 'paragraph', content : "Tech professionals often work in isolation, especially when remote. To combat loneliness, it's important to maintain social connections, both inside and outside of work. Engaging with colleagues, friends, or family helps you vent frustrations, seek advice, and gain support. Joining tech communities, either online or locally, can also foster a sense of belonging and shared experience."},
    {type : 'heading', content : "Seek Professional Help When Needed" , level : 1},
    {type : 'paragraph', content : "It is important to recognize when stress becomes overwhelming. If you find yourself struggling with anxiety, depression, or burnout, don't hesitate to seek professional help. Therapy, counseling, or support groups can provide strategies for managing stress and maintaining a healthier work-life balance."},
    {type : 'paragraph', content : "By implementing these strategies, tech professionals can better manage the pressures of the industry and maintain their mental health. It's crucial to remember that your well-being should always be a top priority, even in a fast-paced, demanding environment like tech."},
    
  ],
  7 : [
    {type : 'heading', content : "5 Daily Habits for a Healthier Lifestyle" , level : 1},
    {type : 'paragraph', content : "Making small changes in your daily routine can have a significant impact on your overall well-being. Here are five daily habits you can incorporate into your life to improve both your physical and mental health:"},
    {type : 'heading', content : "1. Start Your Day with Hydration" , level : 1},
    {type : 'paragraph', content : "Drinking a glass of water first thing in the morning helps jump-start your metabolism, aids digestion, and promotes healthy skin. Staying hydrated throughout the day is essential for keeping your energy levels up and maintaining proper bodily functions."},
    {type : 'heading', content : "2. Move Your Body Regularly" , level : 1},
    {type : 'paragraph', content : "You don’t need to hit the gym for hours. Simple activities like a 20-minute walk, light stretching, or even desk exercises can boost your mood and improve cardiovascular health. Incorporating small moments of movement into your day keeps your body active and reduces the risks of a sedentary lifestyle."},
    {type : 'heading', content : "3. Prioritize Sleep" , level : 1},
    {type : 'paragraph', content : "Quality sleep is fundamental for overall health. Try to establish a regular sleep schedule by going to bed and waking up at the same time each day. Reducing screen time before bed and creating a calming nighttime routine can improve sleep quality, leading to better focus and energy during the day."},
    {type : 'heading', content : "4. Practice Mindful Eating" , level : 1},
    {type : 'paragraph', content : "Instead of rushing through meals, practice mindful eating. Pay attention to your food, chew slowly, and enjoy the flavors. This helps with digestion and ensures you're truly listening to your body’s hunger cues, preventing overeating and promoting a healthier relationship with food."},
    {type : 'heading', content : "5. Take Time for Mental Wellness" , level : 1},
    {type : 'paragraph', content : "Whether it's through meditation, journaling, or a brief moment of gratitude, taking time for mental health daily can reduce stress and improve emotional balance. Even five minutes of mindfulness can increase your resilience against daily pressures."},
    {type : 'paragraph', content : "Incorporating these small habits into your routine can make a big difference in your overall well-being, leading to a healthier, more balanced life over time."},
    
  ],
  8: [
    {type : 'paragraph', content : "Time management is a crucial skill for both personal and professional success. Here are five strategies to help you become more efficient and make the most of your time:"},
    {type : 'heading', content : "1. Set Clear Goals" , level : 1},
    {type : 'paragraph', content : "Break your larger objectives into smaller, more manageable tasks. This helps you focus on specific actions and reduces the feeling of being overwhelmed. Writing down your goals daily also helps reinforce what’s important."},
    {type : 'heading', content : "2. Prioritize Your Tasks" , level : 1},
    {type : 'paragraph', content : "Not every task is equally important. Use prioritization methods, like the Pareto Principle, which suggests that 80% of your outcomes come from 20% of your efforts. Identify those high-priority tasks that will lead to the most significant results."},
    {type : 'heading', content : "3. Use a Task Management Tool" , level : 1},
    {type : 'paragraph', content : "There are numerous tools available that help organize your daily to-do lists and reminders. Tools like Trello, Asana, or even a simple notebook allow you to track progress, stay organized, and avoid missing deadlines."},
    {type : 'heading', content : "4. Plan Breaks and Downtime" , level : 1},
    {type : 'paragraph', content : "Taking regular breaks is essential to maintaining productivity. Techniques like the Pomodoro Technique (25 minutes of focused work followed by a 5-minute break) can help improve focus while avoiding burnout."},
    {type : 'heading', content : "5. Review and Adjust Regularly" , level : 1},
    {type : 'paragraph', content : "Time management is a dynamic process. Set aside time at the end of the day to review your progress and adjust your plan for the next day. Regular reflection helps identify time-wasting activities and areas where you can improve."},
    {type : 'paragraph', content : "By integrating these techniques into your daily routine, you can increase your productivity, reduce stress, and achieve your goals more efficiently."},
    
  ],
  9: [
    { type: 'heading', content: "Effective Study Habits for College Students", level: 1 },
    
    { type: 'paragraph', content: "College can be overwhelming, but with the right habits, you can stay on top of your studies. These tips will help you study more effectively, manage your time, and boost academic success." },
    
    { type: 'heading', content: "1. Create a Study Schedule", level: 2 },
    { type: 'paragraph', content: "Consistency is key. Set a study schedule and stick to it. Whether it's early morning or late at night, find what works best for you and allocate dedicated study time daily." },
    
    { type: 'heading', content: "2. Active Learning Techniques", level: 2 },
    { type: 'paragraph', content: "Engage with the material actively by summarizing notes, teaching concepts to a friend, or creating mind maps. Passive reading won’t help you retain information as effectively as hands-on learning will." },
    
    { type: 'heading', content: "3. Eliminate Distractions", level: 2 },
    { type: 'paragraph', content: "In the digital age, distractions are everywhere. Turn off unnecessary notifications, find a quiet study space, and set specific time limits for social media use during study sessions." },
    
    { type: 'heading', content: "4. Stay Organized", level: 2 },
    { type: 'paragraph', content: "Keep all your study materials, notes, and resources organized. Use tools like planners or apps to track deadlines and exams. Knowing where everything is can reduce stress and improve focus." },
    
    { type: 'heading', content: "5. Take Care of Yourself", level: 2 },
    { type: 'paragraph', content: "Physical and mental well-being plays a huge role in academic success. Ensure you get enough sleep, eat nutritious meals, and take regular breaks to keep your mind fresh and avoid burnout." },
    
    { type: 'paragraph', content: "Incorporating these effective study habits into your routine will help you stay on track, manage stress, and excel in your academic pursuits." }
]

};
