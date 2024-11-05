import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <Card>
          <CardHeader>
            <CardTitle>Cursos</CardTitle>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3">

      </div>
    </div>
  )
}

export default StudentPage;