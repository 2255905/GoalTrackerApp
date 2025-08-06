"use client";
import { CheckIcon, PencilIcon } from "lucide-react";
import { FaCheck, FaEdit  } from "react-icons/fa";
import type { Goal } from "@/lib/types";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function GoalsTable({
  goals,
  onEdit,
  onComplete,
}: {
  goals?: Goal[];
  onEdit: (g: Goal) => void;
  onComplete: (id: number) => void;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Target Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {goals?.map((goal) => (
          <TableRow key={goal.id} className="hover:bg-gray-100">
            <TableCell className="font-medium">{goal.title}</TableCell>
            <TableCell>{goal.description}</TableCell>
            <TableCell>{goal.targetDate}</TableCell>
            <TableCell className="flex space-x-4">
              <button onClick={() => onEdit(goal)}>
                <FaEdit className="size-5 text-blue-500" />
              </button>
              <button onClick={() => onComplete(goal.id!)}>
                <FaCheck className="size-5 text-green-500" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
