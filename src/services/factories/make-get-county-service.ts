import { GetCountyService } from '../get-county'

export function MakeGetCountyService() {
  const makeGetCountyService = new GetCountyService()

  return makeGetCountyService
}