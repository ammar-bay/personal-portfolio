import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const resume = () => {
  const handleDownload = () => {
    // Logic to handle the file download goes here
    const fileUrl = `http://localhost:3000/resume.pdf`; // Replace with the actual file URL
    window.open(fileUrl, "_blank");
  };
  return (
    <>
      <Head>
        <title>Ammar | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">M. Ammar Ibrahim</h2>
          <div className="flex">
            <a href="#" onClick={handleDownload}>
              <FaDownload size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/m-ammar-ibrahim/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/ammar-bay"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>
        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Front-End</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind CSS
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>MUI
          </p>
          <p className="py-2">
            <span className="font-bold">Back-End</span>
            <span className="px-2">|</span>RESTAPI
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Express JS
            <span className="px-2">|</span>Socket.io
            <span className="px-2">|</span>JWT
            <span className="px-2">|</span>Stripe
            {/* <span className="px-2">|</span>OAuth
            <span className="px-2">|</span>Passport JS
            <span className="px-2">|</span>GraphQL
            <span className="px-2">|</span>Paypal
            <span className="px-2">|</span>SendGrid */}
            <span className="px-2">|</span>Mongoose
            <span className="px-2">|</span>Sequelize
          </p>
          <p className="py-2">
            <span className="font-bold">Database</span>
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>MySQL
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>Firebase
            <span className="px-2">|</span>AWS RDS
          </p>
        </div>
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Upwork</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Full Stack Developer & Ml Engineer (July-2022 - Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a Health Management System for ICE Clinic (Horizon
              Hospital).
            </li>
            <li>
              Developed an anonymous socializing Mobile Application (iOS and
              Android) on Flutter with features of messaging and groups.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Al-NAFI</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Full Stack Developer (Sep-2022 - March 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Managed data through AWS Data Lake and provided analytics for
              better monitoring and decision making.
            </li>
            <li>
              Developed and maintained a unified social media marketing web app.
            </li>
            <li>Developed different purpose Web3 Apps</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Smodin</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">ML Intern (Nov-2022 - Feb 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built data pipelines to get labeled data for testing model
              accuracy and performance.
            </li>
            <li>
              Fined-tuned curie model of OpenAI to classify questions and got an
              accuracy of 98%.
            </li>
            <li>
              Scrapped different websites and preprocessed data to train and
              validate models.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Teaching Assistant</span>
            <span className="px-2">|</span>Lahore, PK
          </p>
          <p className="py-1 italic">
            TA - Dr Junaid Haroon Siddiqui (June-2021 - July-2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Tutored Computational and Problem Solving to 150+ students along
              with Dr. Junaid Haroon
            </li>
            <li>
              Collaborated with the teacher to devise and implement appropriate
              lab assignments aligning with the course outline.
            </li>
          </ul>
        </div>

        {/* <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">CITY OF SHERMAN, TX</span>
            <span className="px-2">|</span>Sherman, TX
          </p>
          <p className="py-1 italic">Paramedic / Firefighter (2010 – 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;
