import React from 'react'

import { Payment, columns } from "./columns"
import { DataTable } from './data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
 
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 400,
      status: "pending",
      email: "john.doe@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      amount: 200,
      status: "pending",
      email: "asdfg@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 400,
      status: "pending",
      email: "john.doe@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      amount: 200,
      status: "pending",
      email: "asdfg@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 400,
      status: "pending",
      email: "john.doe@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      amount: 200,
      status: "pending",
      email: "asdfg@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      amount: 400,
      status: "pending",
      email: "john.doe@example.com",
    },
    {
      id: "728ed52f",
      photo: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      amount: 200,
      status: "pending",
      email: "asdfg@example.com",
    },
  ]
}

export default async function TeacherListPage() {
  const data = await getData()
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>Teacher List</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
      </CardContent>
    </Card>
  )
}

