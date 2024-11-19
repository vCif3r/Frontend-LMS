import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CourseCard from "../../components/CourseCard";


const courses = [
  {
    id: 1,
    title: "Matemáticas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxI0jvYGEqlqUcJLjMIuydJwQ0q2Y_JP5O5Q&s",
    docente: {
      apellido: "Castañeda",
      nombre: "Luis",
      avatar: "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
    }
  },
  {
    id: 2,
    title: "Ciencia y Ambiente",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://img.freepik.com/free-vector/retro-science-education-background_23-2148488850.jpg",
    docente: {
      apellido: "Rodriguez",
      nombre: "Luis",
      avatar: "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
    }
  },
  {
    id: 3,
    title: "Diseño UX UI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://niaxus.com/wp-content/uploads/2024/08/ac2d9-64664e9cd07202af8bcdc5e4_5757453-1.jpg?w=1024",
    docente: {
      apellido: "Castañeda",
      nombre: "Luis",
      avatar: "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
    }
  },
  {
    id: 4,
    title: "Ingles 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://wallpapers.com/images/hd/english-1600-x-900-wallpaper-vyobpv9xwkwbzvg6.jpg",
    docente: {
      apellido: "Castañeda",
      nombre: "Luis",
      avatar: "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
    }
  },
]

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 space-y-3">
        <h1 className="text-2xl font-semibold">Cursos</h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-3">
          {courses.map((course)=> (
            <CourseCard key={course.id} docente={course.docente} image={course.image} title={course.title} />
          ))}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3"></div>
    </div>
  );
};

export default StudentPage;
