import { NextPage } from "next";
import { db } from "config/firebase";
import { useMentorshipContext } from "@context/MentorshipContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Layout from "../../../components/Layout";
import Timeline from "../../../components/progress/Timeline";
import Modules from "@components/progress/Modules";
import HeadInfo from "@components/progress/HeadInfo";

/**
 TODO: Fix getServersideProps to get Mentoring data from firestore
 TODO: Search by Email to get User data
 TODO: Add Sessions component
 */

const Progress: NextPage = () => {
  const { router } = useMentorshipContext();
  const [mentoring, setMentoring] = useState<any>([]);
  const { document } = router.query;

  /* const q = query(
    collection(db, "mentorship"),
    where("email", "==", "cristiandavid.corrales@gmail.com")
  );

  console.log("q", q.firestore); */

  const getMentoring = async () => {
    const docRef = doc(db, "mentorship", document);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setMentoring(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getMentoring();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout pageTitle="Tu progreso">
        <div className="flex flex-col">
          {mentoring && <HeadInfo mentoring={mentoring} />}
          {mentoring && <Timeline mentoring={mentoring} />}
          {/* <Modules /> */}
        </div>
      </Layout>
    </>
  );
};

export default Progress;
