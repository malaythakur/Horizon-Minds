import Pranjal from "./assets/team-images/pranjal.jpg";
import Ananya from "./assets/team-images/ananya.jpg";
import Arjun from "./assets/team-images/arjun.jpg";
import Divyansh from "./assets/team-images/divyansh.jpg";
import Malay from "./assets/team-images/malay.jpg";

const people = [
    {
        name: "Pranjal Pandey",
        role: "Software Engineer",
        imageUrl: Pranjal,
    },

    {
        name: "Ananya Srivastava",
        role: "Terraform Expert",
        imageUrl: Ananya,
    },

    {
        name: "Divyansh Srivastava",
        role: "ML Expert",
        imageUrl: Divyansh,
    },

    {
        name: "Arjun Tiwari",
        role: "Full-Stack Developer",
        imageUrl: Arjun,
    },

    {
        name: "Malay Thakur",
        role: "AWS Certified Solution Architect",
        imageUrl: Malay,
    },

];

export default function Team() {
    return (
        <div className="pt-36">
            <div className="mx-auto container text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                    Our Amazing Experts
                </h2>

                <p className="mt-6 text-gray-300">
                    HorizonMinds has a team of passionate individuals who are dedicated to helping you learn new skills and advance you carrer.
                </p>
            </div>
            <div className="mx-auto flex justify-center items-center mt-12 max-w-6xl gap-x-8 gap-y-20 px-6 lg:px-8">
                <ul 
                    role="list"
                    className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-2"
                >
                    {people.map((person)=>(
                        <li key={person.name}>
                            <div className="flex flex-col items-center gap-x-6 sm:flex-row bg-[#001313] shadow-sm shadow-green-300 md:px-8 rounded-2xl md:py-8 hover:shadow-green-300 transform transition-transform duration-300 hover:scale-105 p-4">
                                <img 
                                alt={person.name}
                                src={person.imageUrl}
                                className="h-24 w-24 rounded-full"
                                
                                />
                                <div className="text-center sm:text-left">
                                    <h3 className="mt-4 text-base font-semiold leading-7 tracking-tight text-green-300 sm:mt-0">
                                        {person.name}
                                    </h3>

                                    <p className="text-sm font-semibold leading-6 text-gray-300">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}