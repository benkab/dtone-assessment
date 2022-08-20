export interface IProduct {
  availability_zones: string[]
  benefits: string[]
  description: string
  destination: {
    amount: number
    unit: string
    unit_type: string
  }
  id: number
  name: string
  operator: {
    country: {
      iso_code: string
      name: string
      regions: string[] | null
    }
    id: number
    name: string
    regions: string[] | null
  }
  prices: {
    retail: {
      amount: number
      fee: number
      unit: string
      unit_type: string
    }
    wholesale: {
      amount: number
      fee: number
      unit: string
      unit_type: string
    }
  }
  promotions: string[] | null
  rates: {
    base: number
    retail: number
    wholesale: number
  }
  regions: string[] | null
  required_credit_party_identifier_fields: string[]
  required_debit_party_identifier_fields: string[] | null
  required_sender_fields: string[] | null
  required_statement_identifier_fields: string[] | null
  service: {
    id: number
    name: string
  }
  source: {
    amount: number
    unit: string
    unit_type: string
  }
  tags: string[] | null
  type: string
  validity: {
    quantity: number
    unit: string
  }
}
