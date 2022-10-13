import { NextPage } from "next";
import { db } from "config/firebase";
import { useMentorshipContext } from "@context/MentorshipContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import Layout from "../../../components/Layout";
import Timeline from "../../../components/people/Timeline";

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
  }, []);

  return (
    <>
      <Layout>
        {mentoring && <Timeline mentoring={mentoring} />}
        {/* <Modules /> */}
      </Layout>
    </>
  );
};

export default Progress;
