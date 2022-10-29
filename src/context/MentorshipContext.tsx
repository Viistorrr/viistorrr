import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "config/firebase";
import {
  query,
  orderBy,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";

const MentorshipContext = createContext({});

export const useMentorshipContext = () => useContext<any>(MentorshipContext);

export const MentorshipContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const queryMentoring = collection(db, "mentorship");
  const [mentoring, setMentoring] = useState<any>([]);
  const [totalMembers, setTotalMembers] = useState<number>(0);

  const modulesRef = collection(db, "modules");
  const queryModules = query(modulesRef, orderBy("order", "asc"));
  const [modules, setModules] = useState<any>([]);
  const [totalModules, setTotalModules] = useState<number>(0);

  useEffect(() => {
    getMentoring();
    getModules();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const getMentoring = async () => {
    const querySnapshot = await getDocs(queryMentoring);
    const result: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      result.push(doc); //set the data to the context
    });

    setMentoring(result);
    setTotalMembers(result.length);
  };

  const getModules = async () => {
    const querySnapshot = await getDocs(queryModules);
    const result: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      result.push(doc); //set the data to the context
    });
    setModules(result);
    setTotalModules(result.length);
  };

  return (
    <MentorshipContext.Provider
      value={{
        mentoring,
        totalMembers,
        loading,
        router,
        modules,
        totalModules,
      }}
    >
      {loading ? null : children}
    </MentorshipContext.Provider>
  );
};
