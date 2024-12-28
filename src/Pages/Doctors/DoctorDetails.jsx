import AppointmentButton from "@/components/cta/appointmentBtn";
import { LuMail, LuUserRound, LuLightbulb } from "react-icons/lu";
import doc from "../../../imgs/dr.jpeg";
import FetchDocDetails from "@/apis/Doctors/useFetchDoctorDetails";
import load from "../../../imgs/load.gif";

export default function DoctorDetails() {
  const { data, isLoading, isError } = FetchDocDetails();
  const doctorDetails = data?.data;
  if (isError) {
    return <div className="w-5/6 text-red-500">Error fetching data</div>;
  }
  if (isLoading) {
    return <div className="flex justify-center items-center">{load}</div>;
  }
  return (
    <>
      <section className="w-full md:w-5/6 lg:5/6 grid grid-cols md:grid-cols-2 lg:grid-cols-2 md:mx-auto lg:mx-auto md:gap-2 lg:gap-2">
        <div>
          <h1 className="font-bold text-2xl p-4">Doctor Details</h1>
          <img
            className="w-full md:h-4/5 object-left object-contain mx-auto"
            src={doc}
            alt="doctor_image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex gap-2 items-center m-4">
            <LuUserRound size="35" />
            <h2 className="text-2xl font-bold">{doctorDetails.user.name}</h2>
          </div>
          <p className="mx-4 pb-2 text-xl">GH¢84/session</p>
          <div className="flex">
            <div className="grid grid-cols border-2 w-fit p-2 mx-4 rounded-full">
              Thu <span>25</span>
            </div>
            <div className="grid grid-cols border-2 w-fit p-2 mx-4 rounded-full">
              Thu <span>25</span>
            </div>
            <div className="grid grid-cols border-2 w-fit p-2 mx-4 rounded-full">
              Thu <span>25</span>
            </div>
            <div className="grid grid-cols border-2 w-fit p-2 mx-4 rounded-full">
              Thu <span>25</span>
            </div>
            <div className="grid grid-cols border-2 w-fit p-2 mx-4 rounded-full">
              Thu <span>25</span>
            </div>
          </div>

          <h2 className="mx-4 pt-2">Available Hours</h2>
          <div className="grid gap-2 grid-cols-3 md:grid-cols-6">
            <div className="mx-4 border-2 w-fit p-2 px-4 rounded-full">
              12:00PM
            </div>
            <div className="mx-4 border-2 w-fit p-2 px-4 rounded-full">
              12:00PM
            </div>
            <div className="mx-4 border-2 w-fit p-2 px-4 rounded-full">
              12:00PM
            </div>
            <div className="mx-4 border-2 w-fit p-2 px-4 rounded-full">
              12:00PM
            </div>
          </div>
          <div className="w-ful px-4">
            <AppointmentButton />
          </div>
        </div>
      </section>
    </>
  );
}