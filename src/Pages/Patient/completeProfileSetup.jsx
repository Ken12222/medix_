import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useVerifyPatient from "@/apis/Patients/useVerifyPatients.jsx";
import useloggedInUser from "@/store/useLogin";
import axiosInstance from "@/apis/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function CompleteProfileSetup() {
  const [patientProfileData, setPatientProfileData] = useState({
    contact: "",
    insurance_card: "",
    insurance_card_id: "",
    current_medication: "",
    emergency_contact: "",
  });
  const {
    data,
    mutate: handleVerifyProfile,
    isSuccess,
    isError,
  } = useVerifyPatient();
  const redirect = useNavigate();
  const setUser = useloggedInUser((state) => state.setUser);
  const user = useloggedInUser((state) => state.user);

  function handleCompletePatientProfile(e) {
    e.preventDefault();

    handleVerifyProfile(patientProfileData);
  }

  useEffect(() => {
    if (isSuccess) {
      alert("Profile completed successfully");
      setUser((user.patient = data.user));
      setPatientProfileData({
        contact: "",
        insurance_card: "",
        insurance_card_id: "",
        current_medication: "",
        emergency_contact: "",
      });

      redirect("/patient");
    }
    if (isError) {
      alert("failed to complete profile. Try again later");
    }
  }, [isSuccess, isError, redirect]);
  return (
    <main className="w-5/6 mx-auto my-28">
      <h2 className="my-2 text-xl font-bold">Complete Your Profile Setup</h2>
      <form onSubmit={handleCompletePatientProfile}>
        <div className="my-2">
          <Label className="text-base">Contact</Label>
          <Input
            name="contact"
            type="tel"
            value={patientProfileData.contact}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
                contact: e.target.value,
              })
            }
            placeholder="Enter Phone. (+23312 345 6789)"
          />
        </div>

        <div className="my-2">
          <Label className="text-base">Insurance ID</Label>
          <Input
            type="text"
            name="insurance_card"
            value={patientProfileData.insurance_card}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
                insurance_card: e.target.value,
              })
            }
            placeholder="NHIS"
          />
        </div>
        <div className="my-2">
          <Label className="text-base">Insurance ID No.</Label>
          <Input
            type="text"
            name="insurance_card_id"
            value={patientProfileData.insurance_card_id}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
                insurance_card_id: e.target.value,
              })
            }
            placeholder="Enter ID No.(123456789)"
          />
        </div>
        <div className="my-2">
          <Label className="text-base">Medication</Label>
          <Input
            type="text"
            name="current_medication"
            value={patientProfileData.current_medication}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
                current_medication: e.target.value,
              })
            }
            placeholder="Enter medication. (paracetamol)"
          />
        </div>
        <div className="my-2">
          <Label className="text-base">Emergency Contact</Label>
          <Input
            name="emergency_contact"
            type="tel"
            value={patientProfileData.emergency_contact}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
                emergency_contact: e.target.value,
              })
            }
            placeholder="Enter Emergency Contact. (+23312 345 6789)"
          />
        </div>
        <Button className="w-full my-2">Submit</Button>
      </form>
    </main>
  );
}
