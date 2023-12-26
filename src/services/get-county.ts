import { api } from "@/lib/api"
import { ResourceNotFoundError } from "./errors/resource-not-found"

interface GetCountyServiceRequest {
  name: string
}

interface ApiResponse {
  id: number,
  nome: string
}

export class GetCountyService {
  constructor() { }

  async execute({
    name
  }: GetCountyServiceRequest) {

    const { data } = await api.get<ApiResponse[]>('/municipios', {
      params: {
        nome: name,
      }
    })

    const county = data.find(county => {
      const countyName = county.nome.trim().toLowerCase()
      return countyName === name.trim().toLowerCase()
    })

    if (!county) {
      throw new ResourceNotFoundError()
    }

    return county
  }
}