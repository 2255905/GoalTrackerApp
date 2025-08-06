"use client";
import useSWR from "swr";
import { Heading } from "../components/Heading";
import { GoalsTable } from "../components/GoalsTable";
import { GoalModal } from "../components/GoalModal";
import { useState } from "react";
import toast from "react-hot-toast";
import type { Goal } from "@/lib/types";
import HeroSection from "@/components/HeroSection";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: goals, mutate } = useSWR<Goal[]>(
    "http://localhost:8080/api/goals",
    fetcher
  );
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(goals, "data");

  const openModal = (goal?: Goal) => {
    setEditingGoal(goal || null);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const saveGoal = async (goal: Partial<Goal> & { id?: number }) => {
    try {
      const method = goal.id ? "PUT" : "POST";
      const url = goal.id
        ? `http://localhost:8080/api/goals/${goal.id}`
        : "http://localhost:8080/api/goals";
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(goal),
      });
      toast.success(`Goal ${goal.id ? "updated" : "created"} successfully`);
      mutate();
      closeModal();
    } catch {
      toast.error("Error saving goal");
    }
  };

  const deleteGoal = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/api/goals/${id}`, {
        method: "DELETE",
      });
      toast.success("Goal completed ");
      mutate();
    } catch {
      toast.error("Error deleting goal");
    }
  };

  return (
    <div>
      <HeroSection />
      <div className="p-4 lg:p-16 bg-gray-100 h-full min-h-screen">
        <div className="w-full max-w-[95%] lg:max-w-[90%] mx-auto bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
            <img src="/goal.png" alt="" className="size-20"/>
          </div>
          <Heading title="Learning Goals Tracker" onAdd={() => openModal()} />
          <GoalsTable goals={goals?.data || []} onEdit={openModal} onComplete={deleteGoal}/>
        </div>
      </div>
      {modalOpen && (
        <GoalModal goal={editingGoal} onClose={closeModal} onSave={saveGoal} />
      )}
    </div>
  );
}
