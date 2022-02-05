import { v4 as uuidV4 } from 'uuid'

// Models são Entidades, descrições de tipo
class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Specification }
