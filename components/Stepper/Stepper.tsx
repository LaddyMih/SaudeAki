// ------------------ IMPORTAÇÕES PRINCIPAIS ------------------
import React, {
  useState, // Gerencia estados dentro do componente
  Children, // Permite manipular os elementos filhos do Stepper
  useRef, // Cria referência a elementos do DOM
  useLayoutEffect, // Executa efeitos após o layout ser calculado
  HTMLAttributes,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation"; // Hook do Next.js para navegação entre páginas

import { motion, AnimatePresence, Variants } from "motion/react"; // Animações do Framer Motion

// ------------------ DEFINIÇÃO DAS PROPS DO STEPPER ------------------
interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // Cada passo é um filho do Stepper
  initialStep?: number; // Passo inicial do Stepper
  onStepChange?: (step: number) => void; // Callback chamado ao mudar de passo
  onFinalStepCompleted?: () => void; // Callback chamado quando todos os passos são completados
  stepCircleContainerClassName?: string; // Classe CSS do container dos círculos
  stepContainerClassName?: string; // Classe CSS do container de steps
  contentClassName?: string; // Classe CSS do conteúdo de cada step
  footerClassName?: string; // Classe CSS do rodapé (botões)
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>; // Props adicionais do botão "Back"
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>; // Props adicionais do botão "Next"
  backButtonText?: string; // Texto do botão "Back"
  nextButtonText?: string; // Texto do botão "Next"
  disableStepIndicators?: boolean; // Desativa clique nos indicadores
  renderStepIndicator?: (props: {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
  }) => ReactNode; // Renderização customizada dos indicadores
}

// ------------------ COMPONENTE PRINCIPAL ------------------
export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}: StepperProps) {
  const router = useRouter(); // Instância do roteamento

  const [currentStep, setCurrentStep] = useState<number>(initialStep); // Estado do passo atual
  const [direction, setDirection] = useState<number>(0); // Direção da animação (-1 = voltar, 1 = avançar)

  const stepsArray = Children.toArray(children); // Converte os filhos em array
  const totalSteps = stepsArray.length; // Quantidade total de passos
  const isCompleted = currentStep > totalSteps; // Indica se todos os passos foram completados
  const isLastStep = currentStep === totalSteps; // Indica se o passo atual é o último

  // ------------------ FUNÇÃO PARA ATUALIZAR O PASSO ------------------
  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted(); // Chama callback de finalização
      router.push("/"); // Redireciona para a página inicial após terminar
    } else {
      onStepChange(newStep); // Chama callback de mudança de passo
    }
  };

  // ------------------ FUNÇÃO PARA VOLTAR UM PASSO ------------------
  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(1); // Define direção da animação para voltar
      updateStep(currentStep - 1);
    }
  };

  // ------------------ FUNÇÃO PARA AVANÇAR UM PASSO ------------------
  const handleNext = () => {
    if (!isLastStep) {
      setDirection(-1); // Define direção da animação para frente
      updateStep(currentStep + 1);
    }
  };

  // ------------------ FUNÇÃO PARA COMPLETAR TODOS OS PASSOS ------------------
  const handleComplete = () => {
    setDirection(1); // Direção da animação
    updateStep(totalSteps + 1); // Atualiza para além do último passo, disparando redirecionamento
  };

  return (
    <div
      className="flex min-h-full flex-1 flex-col items-center justify-center p-4 sm:aspect-[4/3] md:aspect-[2/1]"
      {...rest}
    >
      {/* Container principal do Stepper */}
      <div
        className={`mx-auto w-full max-w-md rounded-4xl shadow-xl ${stepCircleContainerClassName}`}
        style={{ border: "1px solid #009cb4ff" }}
      >
        {/* Cabeçalho com indicadores dos passos */}
        <div className={`${stepContainerClassName} flex w-full items-center p-8`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;

            return (
              <React.Fragment key={stepNumber}>
                {/* Indicador de passo (padrão ou custom) */}
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1); // Define direção
                      updateStep(clicked); // Atualiza passo
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}

                {/* Linha de conexão entre os passos */}
                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Conteúdo do passo atual */}
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`space-y-2 px-8 ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {/* Rodapé com botões */}
        {!isCompleted && (
          <div className={`px-8 pb-8 ${footerClassName}`}>
            <div className={`mt-10 flex ${currentStep !== 1 ? "justify-between" : "justify-end"}`}>
              {/* Botão voltar */}
              {currentStep !== 1 && (
                <button
                  onClick={handleBack}
                  className={`duration-350 rounded px-2 py-1 transition ${
                    currentStep === 1
                      ? "pointer-events-none opacity-50 text-neutral-400"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}

              {/* Botão próximo ou finalizar */}
              <button
                onClick={isLastStep ? handleComplete : handleNext}
                className="duration-350 flex items-center justify-center rounded-full bg-green-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-green-600 active:bg-green-700"
                {...nextButtonProps}
              >
                {isLastStep ? "Complete" : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ------------------ COMPONENTE StepContentWrapper ------------------
// Responsável por animar o conteúdo do passo
interface StepContentWrapperProps {
  isCompleted: boolean; // Indica se o Stepper foi completado
  currentStep: number;
  direction: number; // Direção da animação
  children: ReactNode;
  className?: string;
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,
  className = "",
}: StepContentWrapperProps) {
  const [parentHeight, setParentHeight] = useState<number>(0); // Altura do container para animação

  return (
    <motion.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }} // Anima altura
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            direction={direction}
            onHeightReady={(h) => setParentHeight(h)}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ------------------ COMPONENTE SlideTransition ------------------
interface SlideTransitionProps {
  children: ReactNode;
  direction: number; // Direção da animação
  onHeightReady: (height: number) => void; // Callback para altura
}

function SlideTransition({ children, direction, onHeightReady }: SlideTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Atualiza a altura do container sempre que o conteúdo muda
  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants} // Variantes de animação
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

// ------------------ VARIANTES DE ANIMAÇÃO ------------------
const stepVariants: Variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? "50%" : "-50%", opacity: 0 }),
};

// ------------------ COMPONENTE STEP ------------------
interface StepProps { children: ReactNode; }
export function Step({ children }: StepProps) { return <div className="px-8">{children}</div>; }

// ------------------ INDICADOR DE CADA PASSO ------------------
interface StepIndicatorProps {
  step: number;
  currentStep: number;
  onClickStep: (clicked: number) => void;
  disableStepIndicators?: boolean;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators = false }: StepIndicatorProps) {
  const status = currentStep === step ? "active" : currentStep < step ? "inactive" : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div onClick={handleClick} className="relative cursor-pointer outline-none focus:outline-none" animate={status} initial={false}>
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: "#222", color: "#efededff" },
          active: { scale: 1, backgroundColor: "#079eb5ff", color: "#5227FF" },
          complete: { scale: 1, backgroundColor: "#07c1ddff", color: "#0882a0ff" },
        }}
        transition={{ duration: 0.3 }}
        className="flex h-8 w-8 items-center justify-center rounded-full font-semibold"
      >
        {status === "complete" ? (
          <CheckIcon className="h-4 w-4 text-black" />
        ) : status === "active" ? (
          <div className="h-3 w-3 rounded-full bg-[#060010]" />
        ) : (
          <span className="text-sm">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

// ------------------ LINHA CONECTORA ENTRE PASSOS ------------------
interface StepConnectorProps { isComplete: boolean; }

function StepConnector({ isComplete }: StepConnectorProps) {
  const lineVariants: Variants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#8f93d1ff" },
  };

  return (
    <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600">
      <motion.div
        className="absolute left-0 top-0 h-full"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

// ------------------ ÍCONE DE CHECK ------------------
interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}

function CheckIcon(props: CheckIconProps) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: "tween", ease: "easeOut", duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
