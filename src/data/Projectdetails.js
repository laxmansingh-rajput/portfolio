const ProjectDetails = {
    project1: {
        name: 'NewsVault',
        url: "https://www.youtube.com/embed/o8mNCVAwiXg?si=vdG1yIZWtzNf77u8",
        discription: `
            <p>
                Developed a full-stack</b> <span><b>newspaper subscription platform</b></span> using the MERN stack. Implemented <span><b>Google OAuth</b></span> for authentication and <span><b>Razorpay</b></span> for subscription payments. <span><b>Newspapers</b></span> are securely stored in <span><b>AWS S3</b></span> and delivered via <span><b>CloudFront</b></span> for HTTP caching and faster content delivery. Built an <span><b>admin-controlled content management system</b></span> with <span><b>role-based access</b></span> to ensure only subscribed users can access paid content.
            </p>
        `,
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'CloudFront', 'OAuth'],
        gihub: 'https://github.com/laxmansingh-rajput/newsVault',
        link: 'https://newsVault.laxmansinghrajput.site',
        dockerHub: 'https://hub.docker.com/repositories/laxmansinghrajput'
    },
    project2: {
        name: 'QuizB',
        url: "https://www.youtube.com/embed/o8mNCVAwiXg?si=vdG1yIZWtzNf77u8",
        discription: `
            <p>
            In progress: Building a <b>quiz generation platform</b> where users can create and share quizzes in real time. 
            Includes a <b>practice mode</b> that generates quizzes from user-provided text and an <b>AI-powered quiz generator</b> using LLM APIs.
            </p>
        `
        ,
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OAuth'],
        gihub: 'https://github.com/laxmansingh-rajput/QuizB',
        link: '',
        dockerHub: 'https://hub.docker.com/repositories/laxmansinghrajput'
    }
};

export default ProjectDetails;
