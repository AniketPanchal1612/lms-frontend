import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">E-Learning Project?</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] mx-auto">
        <h2 className="text-3xl font-semibold">Tech Stack:</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>
            <strong>Frontend:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Next.js</li>
              <li>Redux (for state management)</li>
              <li>WebSockets (for real-time communication)</li>
            </ul>
          </li>
          <li className="mt-8">
            <strong>Backend:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB (for database management)</li>
              <li>WebSockets (for real-time communication)</li>
            </ul>
          </li>
          <li className="mt-8">
            <strong>Payment Integration:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>Stripe</li>
            </ul>
          </li>
        </ul>
        <br />

        <h2 className="text-3xl font-semibold mt-8">Features:</h2>
        <ul className="list-disc ml-6 mt-4">
        <li className="mb-4">
            <strong>Signup/Login:</strong>
            <ul className="list-disc ml-6 mt-2">
                <li className="mb-2">Activation code-based signup process with email verification.</li>
                <li className="mb-2">Social authentication options for user convenience.</li>
            </ul>
        </li>
        <li className="mb-8">
            <strong>Course Management:</strong>
            <ul className="list-disc ml-6 mt-2">
                <li className="mb-2">Intuitive course filtering and searching capabilities.</li>
                <li className="mb-2">Seamless course purchasing integrated with Stripe, notified  by email notifications.</li>
                <li className="mb-2">Interactive features allowing users to engage with course content through questions and reviews.</li>
                <li className="mb-2">If admin answers a question related to a particular video, the user will receive an email notification.</li>
            </ul>
        </li>
        <li className="mb-8">
            <strong>Admin Dashboard:</strong>
            <ul className="list-disc ml-6 mt-2">
                <li className="mb-2">Powerful CMS for detailed analysis of courses, users, and orders.</li>
                <li className="mb-2">Complete course management functionality, including create course and live course management.</li>
                <li className="mb-2">Flexible content management for hero components, FAQs, and categories such that edit dynamically via the Admin Panel.</li>
            </ul>
        </li>
        <li className="mb-8">
            <strong>Invoicing and Team Management:</strong>
            <ul className="list-disc ml-6 mt-2">
                <li className="mb-2">Management of course invoices from Admin Panel.</li>
                <li className="mb-2">Efficient tools for managing teams and user access.</li>
            </ul>
        </li>
        <li className="mb-16">
            <strong>Real-time Notifications:</strong>
            <ul className="list-disc ml-6 mt-2">
            <li className="mb-2">Instant notifications ensuring timely communication between users and administrators, including notifications for course purchases, questions, and reviews.</li>
            </ul>
        </li>
    </ul>
      </div>
    </div>
  );
};

export default About;
