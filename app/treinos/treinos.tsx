export interface Exercicio {
    nome: string;
    descricao: string;
    series: number;
    repeticoes: string;
    img: string;
  }
  
  export interface Treino {
    id: number;
    nome: string;
    grupo: string;
    exercicios: Exercicio[];
  }
  
  export const treinos: Treino[] = [
    {
      id: 1,
      nome: "Treino de Peito",
      grupo: "Peito",
      exercicios: [
        {
          nome: "Supino Reto",
          descricao: "Fortalece peitoral, ombros e tríceps.",
          series: 4,
          repeticoes: "8-12",
          img: "/imagens/treino-peito.jpg",
        },
        {
          nome: "Supino Inclinado",
          descricao: "Foca na parte superior do peitoral.",
          series: 3,
          repeticoes: "8-10",
          img: "/imagens/treino-peito2.jpg",
        },
        {
          nome: "Crucifixo",
          descricao: "Isola o peitoral e alonga os músculos.",
          series: 3,
          repeticoes: "12-15",
          img: "/imagens/treino-peito3.jpg",
        },
      ],
    },
    {
      id: 2,
      nome: "Treino de Pernas",
      grupo: "Pernas",
      exercicios: [
        {
          nome: "Agachamento Livre",
          descricao: "Trabalha quadríceps, glúteos e posteriores.",
          series: 4,
          repeticoes: "10-15",
          img: "/imagens/treino-pernas.jpg",
        },
        {
          nome: "Leg Press",
          descricao: "Foca no quadríceps e glúteos.",
          series: 3,
          repeticoes: "12-15",
          img: "/imagens/treino-pernas2.jpg",
        },
      ],
    },
    {
      id: 3,
      nome: "Treino de Costas",
      grupo: "Costas",
      exercicios: [
        {
          nome: "Remada Curvada",
          descricao: "Trabalha dorsais, lombar e bíceps.",
          series: 3,
          repeticoes: "8-12",
          img: "/imagens/treino-costas.jpg",
        },
        {
          nome: "Puxada na Barra",
          descricao: "Foca nos dorsais e bíceps.",
          series: 3,
          repeticoes: "8-12",
          img: "/imagens/treino-costas2.jpg",
        },
      ],
    },
  ];
  