"use client";

import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/test");
  };

  return (
    <div>
      <button
        style={{marginTop: 20, padding: "8px 16px", cursor: "pointer"}}
        onClick={handleRedirect}
      >
        GO TO CHECK
      </button>
    </div>
  );
}
