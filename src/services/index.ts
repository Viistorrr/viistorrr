import { addDoc, collection, Timestamp } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

export const sendContactForm = async ({
  name,
  profession,
  email,
  phone,
  comment,
}) => {
  try {
    const ref = collection(firestore, "mentorship");
    await addDoc(ref, {
      name,
      profession,
      email,
      phone,
      comment,
      sentAt: Timestamp.now().toDate(),
    });

    const res = await fetch("api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: name,
        subject: "Estoy interesado en tu mentoría",
        message: comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log("error", error);
      return;
    }

    return 0;
  } catch (err) {
    console.log("err", err);
    return -1;
  }
};
