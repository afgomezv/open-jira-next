interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Estudiar Typescrit",
      status: "pending",
      createAt: Date.now(),
    },
    {
      description: "En Progreso: Estudiar Next.js",
      status: "in-progress",
      createAt: Date.now() - 1000000,
    },
    {
      description: "Terminada: Estudiar PostgreSQL",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};
