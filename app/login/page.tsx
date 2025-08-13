import Navbar from "@/components/navbar";
import StepperForm from "@/components/Stepper/StepperForm"; 



export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <StepperForm/>
      </div>
    </div>
  );
}
