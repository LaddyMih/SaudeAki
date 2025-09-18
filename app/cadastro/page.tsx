import RegisterPage from "@/components/auth/register";
import Navbar from "@/components/navbar";
import StepperForm from "@/components/Stepper/StepperForm"; 



export default function CadastroPage() {
  return (
    <div>
      <div className="p-8">
        <RegisterPage />
      </div>
    </div>
  );
}
