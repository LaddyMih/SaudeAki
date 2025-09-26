export interface Exercicio {
  nome: string;
  descricao: string;
  series: number;
  repeticoes: string;
  // img: string;
}

export interface Treino {
  id: number;
  nome: string;
  grupo: string;
  recomendacao: string;
  img: string;
  exercicios: Exercicio[];
}

export const treinos: Treino[] = [
  {
    id: 1,
    nome: "Treino de Costas",
    grupo: "Costas",
    recomendacao: "Treinar com Bíceps", // Costas e bíceps funcionam juntos, pois bíceps atuam como músculo auxiliar nos puxamentos
    img: "/imagens/costa.png",
    exercicios: [
      {
        nome: "Puxada na Barra",
        descricao: "Foca nos dorsais e bíceps.",
        series: 3,
        repeticoes: "8-12",
      },
      {
        nome: "Remada Curvada",
        descricao: "Trabalha dorsais, lombar e bíceps.",
        series: 3,
        repeticoes: "8-12",
      },
      {
        nome: "Remada Unilateral",
        descricao: "Ativa dorsais e bíceps individualmente.",
        series: 3,
        repeticoes: "10 cada lado",
      },
    ],
  },
  {
    id: 2,
    nome: "Treino de Bíceps",
    grupo: "Bíceps",
    recomendacao: "Treinar com Costas", // Bíceps são secundários nos exercícios de costas, por isso combinam
    img: "/imagens/biceps.png",
    exercicios: [
      {
        nome: "Rosca Direta",
        descricao: "Fortalece os bíceps.",
        series: 3,
        repeticoes: "12",
      },
      {
        nome: "Rosca Alternada",
        descricao: "Trabalha bíceps de forma isolada.",
        series: 3,
        repeticoes: "12 cada braço",
      },
      {
        nome: "Rosca Martelo",
        descricao: "Fortalece bíceps e antebraço.",
        series: 3,
        repeticoes: "12",
      },
    ],
  },
  {
    id: 3,
    nome: "Treino de Peito",
    grupo: "Peito",
    recomendacao: "Treinar com Tríceps", // Tríceps auxiliam nos movimentos de empurrar (supino)
    img: "/imagens/peito.png",
    exercicios: [
      {
        nome: "Supino Reto",
        descricao: "Fortalece peitoral, ombros e tríceps.",
        series: 4,
        repeticoes: "8-12",
      },
      {
        nome: "Supino Inclinado",
        descricao: "Foca na parte superior do peitoral.",
        series: 3,
        repeticoes: "8-10",
      },
      {
        nome: "Crucifixo",
        descricao: "Isola o peitoral e alonga os músculos.",
        series: 3,
        repeticoes: "12-15",
      },
    ],
  },
  {
    id: 4,
    nome: "Treino de Tríceps",
    grupo: "Tríceps",
    recomendacao: "Treinar com Peito", // Tríceps são secundários nos exercícios de peito
    img: "/imagens/triceps.png",
    exercicios: [
      {
        nome: "Tríceps na Polia",
        descricao: "Fortalece tríceps e estabiliza ombros.",
        series: 3,
        repeticoes: "12",
      },
      {
        nome: "Tríceps Testa",
        descricao: "Foca na parte longa do tríceps.",
        series: 3,
        repeticoes: "12",
      },
      {
        nome: "Mergulho entre Bancos",
        descricao: "Trabalha tríceps e peitoral.",
        series: 3,
        repeticoes: "10",
      },
    ],
  },
  {
    id: 5,
    nome: "Treino de Quadríceps",
    grupo: "Quadríceps",
    recomendacao: "Treinar com Abdômen", // Quadríceps são grandes músculos das pernas, combinar com abdômen ajuda no equilíbrio do core
    img: "/imagens/quadriceps.png",
    exercicios: [
      {
        nome: "Agachamento Livre",
        descricao: "Trabalha quadríceps, glúteos e posteriores.",
        series: 4,
        repeticoes: "10-15",
      },
      {
        nome: "Leg Press",
        descricao: "Foca no quadríceps e glúteos.",
        series: 3,
        repeticoes: "12-15",
      },
      {
        nome: "Avanço",
        descricao: "Fortalece quadríceps e glúteos individualmente.",
        series: 3,
        repeticoes: "10 cada perna",
      },
    ],
  },
  {
    id: 6,
    nome: "Treino de Abdômen",
    grupo: "Abdômen",
    recomendacao: "Treinar com Quadríceps", // Abdômen ajuda na estabilização durante exercícios de pernas
    img: "/imagens/abdomen.png",
    exercicios: [
      {
        nome: "Prancha",
        descricao: "Fortalece abdômen e core.",
        series: 3,
        repeticoes: "30-45s",
      },
      {
        nome: "Elevação de Pernas",
        descricao: "Ativa a região inferior do abdômen.",
        series: 3,
        repeticoes: "15",
      },
      {
        nome: "Abdominal Crunch",
        descricao: "Foca na região superior do abdômen.",
        series: 3,
        repeticoes: "20",
      },
    ],
  },
  {
    id: 7,
    nome: "Treino de Glúteos",
    grupo: "Glúteos",
    recomendacao: "Treinar com Posteriores", // Glúteos e posteriores trabalham juntos em exercícios de quadríceps posterior
    img: "/imagens/posterior.png",
    exercicios: [
      {
        nome: "Hip Thrust",
        descricao: "Isola glúteos e fortalece quadríceps.",
        series: 3,
        repeticoes: "12",
      },
      {
        nome: "Stiff",
        descricao: "Fortalece glúteos e posteriores.",
        series: 3,
        repeticoes: "12",
      },
    ],
  },
  {
    id: 8,
    nome: "Treino de Posteriores",
    grupo: "Posteriores",
    recomendacao: "Treinar com Glúteos", // Posteriores e glúteos atuam juntos para exercícios de empurrar e levantar
    img: "/imagens/perna.png",
    exercicios: [
      {
        nome: "Mesa Flexora",
        descricao: "Foca nos posteriores de coxa.",
        series: 3,
        repeticoes: "12",
      },
      {
        nome: "Stiff",
        descricao: "Fortalece glúteos e posteriores.",
        series: 3,
        repeticoes: "12",
      },
    ],
  },
  {
    id: 9,
    nome: "Treino de Panturrilha",
    grupo: "Panturrilha",
    recomendacao: "Treinar com Glúteos e Posteriores", // Panturrilhas atuam nos exercícios de perna, ideal treinar junto com glúteos/posteriores
    img: "/imagens/perna.png",
    exercicios: [
      {
        nome: "Elevação de Panturrilha em Pé",
        descricao: "Fortalece panturrilhas.",
        series: 3,
        repeticoes: "20",
      },
      {
        nome: "Elevação de Panturrilha Sentado",
        descricao: "Isola panturrilhas para maior definição.",
        series: 3,
        repeticoes: "20",
      },
      
    ],
    
  },
];

