import React from 'react'
import { Course, columns } from "./columns"
import { DataTable } from './data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

async function getData(): Promise<Course[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: 'Historia 1',
            teacher: 'Alex John',
            status: "pending",
            grade_level: "1er - Secundaria",
        },
        {
            id: "728ed52f",
            name: 'Matemática 2',
            teacher: 'Louis John',
            status: "pending",
            grade_level: "2do - Secundaria",
        },
    ]
}

export default async function CourseListPage() {
    const data = await getData()
    return (
        <Card>
            <CardHeader>
                <CardTitle>All Courses</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="container mx-auto">
                    <DataTable columns={columns} data={data} />
                </div>
            </CardContent>
        </Card>
    )
}