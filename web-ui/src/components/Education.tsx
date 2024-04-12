export default function Education() {
  const freshmanCard = (
    <EducationCard
      title="Freshman"
      years="2018 - 2019"
      categories={[
        {
          title: "Degree-Specific",
          courses: [
            "Intro to Programming II",
            "Programming at the HW/SW Interface",
            "Essential Math for EE",
            "ECE 1.0",
          ],
        },
        {
          title: "STEM-Focused",
          courses: [
            "Engineering Analysis & Problem Solving",
            "Calculus Plus w/ Technology I",
            "Calculus with Technology II",
            "Physics by Inquiry I",
            "University Physics I - Mechanics",
          ],
        },
        {
          title: "Humanities",
          courses: ["Global Issues", "Introduction to Sociology"],
        },
      ]}
    />
  );

  const sophomoreCard = (
    <EducationCard
      title="Sophomore"
      years="2019 - 2020"
      categories={[
        {
          title: "Degree-Specific",
          courses: [
            "Electric Circuits I",
            "Electric Circuits II and Lab",
            "Digital Logic and Lab",
            "Discrete Structures",
            "Data Structures",
          ],
        },
        {
          title: "STEM-Focused",
          courses: [
            "Elementary Linear Algebra",
            "Elementary Differential Equations",
            "Physics by Inquiry II",
            "University Physics II - Electricity & Magnetism",
          ],
        },
        {
          title: "Humanities",
          courses: ["Beginning Acting", "Introduction to Literature"],
        },
      ]}
    />
  );

  const juniorCard = (
    <EducationCard
      title="Junior"
      years="2020 - 2021"
      categories={[
        {
          title: "Enterprise",
          courses: ["Blue Marble Security"],
        },
        {
          title: "Degree-Specific",
          courses: [
            "Computer Organization",
            "Introduction to Algorithms",
            "Electronics",
            "Signals and Systems",
            "Systems Programming",
            "HW/SW System Integration",
          ],
        },
        {
          title: "STEM-Focused",
          courses: [
            "Engineering Statistics",
            "Design Fundamentals",
            "Statistical Programming and Analysis",
          ],
        },
        {
          title: "Humanities",
          courses: ["Technical and Professional Communication", "Mythology"],
        },
      ]}
    />
  );

  const seniorCard = (
    <EducationCard
      title="Senior"
      years="2021 - 2022"
      categories={[
        {
          title: "Enterprise",
          courses: ["Blue Marble Security", "Communication Contexts"],
        },
        {
          title: "Degree-Specific",
          courses: [
            "Formal Models of Computation",
            "Computer Systems Engineering & Performance",
            "Computer Networks",
            "Embedded System Interfacing",
          ],
        },
        {
          title: "STEM-Focus",
          courses: [
            "Understanding the Earth",
            "Introduction to Archaeology",
            "Electric Energy Systems",
          ],
        },
      ]}
    />
  );

  return (
    <div className="grid xl:grid-cols-2 px-10 md:px-20 gap-16 w-full text-left">
      {seniorCard}
      {juniorCard}
      {sophomoreCard}
      {freshmanCard}
    </div>
  );
}

interface educationCategory {
  title: string;
  courses: string[];
}

interface educationCardProps {
  title: string;
  years: string;
  categories: educationCategory[];
}

function EducationCard(props: educationCardProps) {
  const { title, years, categories } = props;

  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="w-full md:w-1/4">
        <h1 className="text-2xl font-serif underline">{title}</h1>
        <h2 className="italic">{years}</h2>
      </div>
      <div className="grid outline rounded-xl p-6 gap-6 w-full md:w-3/4 bg-teal-900">
        {categories.map((category) => {
          console.log(category);
          return (
            <div className="flex flex-col">
              <h2 className="font-bold">{category.title}</h2>
              <ul className="list-disc list-inside">
                {category.courses.map((course, index) => (
                  <li>{course}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
