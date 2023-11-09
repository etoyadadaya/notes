"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NoteCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export const NoteCard = ({ title, description, onClick }: NoteCardProps) => {
  return (
    <Card onClick={onClick} className="w-[400px] flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
