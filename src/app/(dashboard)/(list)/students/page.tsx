import React from 'react'

import { Student, columns } from "./columns"
import { DataTable } from './data-table' 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
 
async function getData(): Promise<Student[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'John Smith',
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Mike Smith',
      status: "pending",
      email: "john.doe@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      name: 'Louis Doe',
      status: "pending",
      email: "asdfg@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Louis Doe',
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Louis Doe',
      status: "pending",
      email: "john.doe@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      name: 'Louis Doe',
      status: "pending",
      email: "asdfg@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Louis Doe',
      status: "pending",
      email: "m@example.com",
    },
  ]
}

export default async function StudentListPage() {
  const data = await getData()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student List</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}
