import React from 'react'
import { Parent, columns } from "./columns"
import { DataTable } from './data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

async function getData(): Promise<Parent[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: 'Martin Mcfly',
            children: ['Alex', 'John'],
            status: "pending",
            email: "martin@example.com",
        },
        {
            id: "728ed52f",
            name: 'Laura MC',
            children: ['Axel', 'Carl'],
            status: "pending",
            email: "laura.mc@example.com",
        },
    ]
}

export default async function ParentListPage() {
    const data = await getData()
    return (
        <Card>
            <CardHeader>
                <CardTitle>Parent List</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="container mx-auto">
                    <DataTable columns={columns} data={data} />
                </div>
            </CardContent>
        </Card>
    )
}