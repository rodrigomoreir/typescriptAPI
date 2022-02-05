import { ICategoriesRepository } from "../repositories/ICategoriesRepository"

interface IRequest {
  name: string;
  description: string
}

// Service é camada de Alto Nível, que está mais proximo ao Dominio
// Rotas é camada de Baixo Nível, mais próximo ao usuário
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    // Para acessar uma variável de dentro do Constructor, precisa usar o 'this.'
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      // Forma de retorar o erro no service
      throw new Error("Category already exists!")
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
