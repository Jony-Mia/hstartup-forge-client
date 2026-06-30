import { GetRoute } from "@/api/actionRoutes";
import Tabler from "@/componet/Table";

const page = async () => {
    // const data = await GetRoute();
    const data = [
  {
    "role_title": "Frontend Developer",
    "required_skills": ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-07-10"
  },
  {
    "role_title": "Backend Developer",
    "required_skills": ["Node.js", "Express.js", "MongoDB", "REST API"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-07-12"
  },
  {
    "role_title": "UI/UX Designer",
    "required_skills": ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    "work_type": "Hybrid",
    "commitment_level": "Part-time",
    "deadline": "2026-07-08"
  },
  {
    "role_title": "Mobile App Developer",
    "required_skills": ["Flutter", "Dart", "Firebase"],
    "work_type": "Remote",
    "commitment_level": "Contract",
    "deadline": "2026-07-20"
  },
  {
    "role_title": "DevOps Engineer",
    "required_skills": ["Docker", "AWS", "CI/CD", "Linux"],
    "work_type": "On-site",
    "commitment_level": "Full-time",
    "deadline": "2026-07-18"
  },
  {
    "role_title": "AI Engineer",
    "required_skills": ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-07-25"
  },
  {
    "role_title": "Data Scientist",
    "required_skills": ["Python", "Pandas", "SQL", "Statistics"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-07-15"
  },
  {
    "role_title": "Product Manager",
    "required_skills": ["Agile", "Scrum", "Roadmapping", "Communication"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-07-22"
  },
  {
    "role_title": "QA Engineer",
    "required_skills": ["Manual Testing", "Cypress", "Jest", "Bug Tracking"],
    "work_type": "Remote",
    "commitment_level": "Part-time",
    "deadline": "2026-07-16"
  },
  {
    "role_title": "Cybersecurity Specialist",
    "required_skills": ["Network Security", "Penetration Testing", "OWASP"],
    "work_type": "Remote",
    "commitment_level": "Contract",
    "deadline": "2026-07-30"
  },
  {
    "role_title": "Marketing Manager",
    "required_skills": ["SEO", "Google Ads", "Content Marketing", "Analytics"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-07-14"
  },
  {
    "role_title": "Content Writer",
    "required_skills": ["Copywriting", "SEO", "Research"],
    "work_type": "Remote",
    "commitment_level": "Freelance",
    "deadline": "2026-07-05"
  },
  {
    "role_title": "Graphic Designer",
    "required_skills": ["Adobe Photoshop", "Illustrator", "Branding"],
    "work_type": "Hybrid",
    "commitment_level": "Part-time",
    "deadline": "2026-07-09"
  },
  {
    "role_title": "Sales Executive",
    "required_skills": ["CRM", "Negotiation", "Lead Generation"],
    "work_type": "On-site",
    "commitment_level": "Full-time",
    "deadline": "2026-07-13"
  },
  {
    "role_title": "Business Analyst",
    "required_skills": ["SQL", "Excel", "Data Analysis", "Documentation"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-07-19"
  },
  {
    "role_title": "Blockchain Developer",
    "required_skills": ["Solidity", "Ethereum", "Web3.js"],
    "work_type": "Remote",
    "commitment_level": "Contract",
    "deadline": "2026-08-01"
  },
  {
    "role_title": "Cloud Engineer",
    "required_skills": ["Azure", "AWS", "Terraform"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-07-21"
  },
  {
    "role_title": "Customer Success Manager",
    "required_skills": ["Communication", "CRM", "Problem Solving"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-07-17"
  },
  {
    "role_title": "Technical Writer",
    "required_skills": ["Documentation", "Markdown", "API Writing"],
    "work_type": "Remote",
    "commitment_level": "Freelance",
    "deadline": "2026-07-11"
  },
  {
    "role_title": "Social Media Manager",
    "required_skills": ["Instagram", "LinkedIn", "Content Planning"],
    "work_type": "Remote",
    "commitment_level": "Part-time",
    "deadline": "2026-07-07"
  },
  {
    "role_title": "Full Stack Developer",
    "required_skills": ["React", "Node.js", "MongoDB", "Next.js"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-07-23"
  },
  {
    "role_title": "React Native Developer",
    "required_skills": ["React Native", "JavaScript", "Redux"],
    "work_type": "Remote",
    "commitment_level": "Contract",
    "deadline": "2026-07-24"
  },
  {
    "role_title": "Machine Learning Engineer",
    "required_skills": ["Python", "Scikit-learn", "Deep Learning"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-08-03"
  },
  {
    "role_title": "Video Editor",
    "required_skills": ["Premiere Pro", "After Effects", "Motion Graphics"],
    "work_type": "Remote",
    "commitment_level": "Freelance",
    "deadline": "2026-07-28"
  },
  {
    "role_title": "HR Manager",
    "required_skills": ["Recruitment", "Employee Relations", "HRIS"],
    "work_type": "On-site",
    "commitment_level": "Full-time",
    "deadline": "2026-07-26"
  },
  {
    "role_title": "Operations Manager",
    "required_skills": ["Operations", "Leadership", "Project Management"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-07-29"
  },
  {
    "role_title": "iOS Developer",
    "required_skills": ["Swift", "SwiftUI", "Xcode"],
    "work_type": "Remote",
    "commitment_level": "Contract",
    "deadline": "2026-08-05"
  },
  {
    "role_title": "Android Developer",
    "required_skills": ["Kotlin", "Jetpack Compose", "Firebase"],
    "work_type": "Remote",
    "commitment_level": "Full-time",
    "deadline": "2026-08-02"
  },
  {
    "role_title": "SEO Specialist",
    "required_skills": ["SEO", "Google Search Console", "Ahrefs"],
    "work_type": "Remote",
    "commitment_level": "Part-time",
    "deadline": "2026-07-31"
  },
  {
    "role_title": "Project Coordinator",
    "required_skills": ["Jira", "Communication", "Time Management"],
    "work_type": "Hybrid",
    "commitment_level": "Full-time",
    "deadline": "2026-07-27"
  }
]


    // if (!data || data.length === 0) {
    //     return (
    //         <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4 px-4">
    //             <div className="p-6 bg-content2 rounded-full text-default-400">
    //                 <Check className="w-12 h-12" />
    //             </div>
    //             <h2 className="text-2xl font-semibold text-default-700">No Opportunities Found</h2>
    //             <p className="text-default-400 text-sm max-w-sm text-center">
    //                 There are currently no active opportunities available. Please check back later or create a new entry.
    //             </p>
    //         </div>
    //     );
    // }

    // const getWorkTypeColor = (type) => {
    //     switch (type?.toLowerCase()) {
    //         case "remote": return "success";
    //         case "hybrid": return "warning";
    //         case "onsite": return "primary";
    //         default: return "default";
    //     }
    // };

    return (
        <div className=" mx-auto flex flex-col justify-center items-center">

            <div className="flex text-center  flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl text-center font-bold tracking-tight text-default-900">Available Opportunities</h1>
                    <p className="text-default-500 text-center text-sm mt-1">Manage and monitor active roles, skills criteria, and application timelines.</p>
                </div>
            </div>


            {/* <Card className="border-none bg-background shadow-medium rounded-xl overflow-hidden"> */}
            <Tabler data={data} />
            {/* </Card> */}
        </div>
    );
};

export default page;