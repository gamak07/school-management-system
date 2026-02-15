"use client";

import { AddStudentModal } from "@/modals/add_student_modal/AddStudentModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AddStudentModal />
      {/* Add <TeacherModal /> here later */}
      {/* Add <EventModal /> here later */}
    </>
  );
};