import React from 'react';

const Projects: React.FC = () => (
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li>
                <h3>gitflame Repository Storage Service</h3>
                <p>Role: Go Developer<br />
                    Responsibilities: Developing the main service API using Go, REST API, gRPC, Docker.</p>
            </li>
            <li>
                <h3>Student Startup Co-living Project</h3>
                <p>Role: Lead Backend Developer<br />
                    Responsibilities: Developing high-load scalable applications with Java and Spring, managing the team, maintaining documentation (Swagger).</p>
            </li>
            <li>
                <h3>Client-Server Architecture Support System</h3>
                <p>Role: PM, Lead of Backend, Full-Stack Developer<br />
                    Technologies: Python, Flask, TypeScript, Vite.js, React<br />
                    Responsibilities: Managing the project, backend and full-stack development, DevOps.</p>
            </li>
        </ul>
    </section>
);

export default Projects;
