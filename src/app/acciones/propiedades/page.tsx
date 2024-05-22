"use client";
import AdminProperties from "@/components/adminProperties/AdminProperties";
import CreateProperty from "@/components/createProperty/CreateProperty";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Properties() {
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem("user");
    if (isLogged) {
      const localUser = JSON.parse(isLogged);
      if (localUser.rol === "admin") {
        return;
      } else {
        router.push("/");
      }
    } else {
      router.push("/ingreso");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center">
      <AdminProperties />
      <CreateProperty />
    </div>
  );
}
