"use client";
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from 'react-icons/io';


export function Heading({
  title,
  onAdd,
}: {
  title: string;
  onAdd: () => void;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 ">
      <h1 className="text-3xl text-[#FF1452] font-bold">{title}</h1>
      <Button icon={IoIosAddCircleOutline} text='Add Goal' size="md" onClick={onAdd} />
    </div>
  );
}
