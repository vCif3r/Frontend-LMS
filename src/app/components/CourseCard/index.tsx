import Link from "next/link";

type Props = {
    title: string;
    image: string;
    docente: {
        nombre: string;
        apellido: string;
        avatar: string;
    }
}

const CourseCard = (props: Props) => {
  return (
    <div className='border rounded-lg bg-white dark:bg-transparent'>
        {/* image */}
        <div className="p-2">
            <img src={props.image} alt={props.title} className='w-full h-[130px] rounded-md bg-cover object-cover'/>
        </div>
        {/* content */}
        <div className='px-4'>
            <h1 className='font-semibold'>{props.title}</h1>
            {/* instructor */}
            <div className="flex items-center gap-1 py-2">
                <img src={props.docente.avatar} alt={props.docente.apellido} className='rounded-full' height={20} width={20}/>
                <div className='text-sm text-gray-600'>
                    {props.docente.apellido} {props.docente.nombre}
                </div>
            </div>
        </div>
        <div className="p-3 flex justify-end border-t">
            <Link href={'courses/1'} 
                className="w-full text-center p-1 border border-blue-300 text-blue-500 rounded-md">
                Continuar
            </Link>
        </div>
    </div>
  )
}

export default CourseCard