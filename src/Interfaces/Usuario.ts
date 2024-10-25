export interface Usuario {
    name: string,
    email: string,
    senha: string,
    foto: string,
    tipoPerfil: {
      tipo: string,
      nivelAcesso: string
    },
    lstAddresses: [
      {
        street: string,
        number: string,
        complement: string,
        district: string,
        neighborhood: string,
        city: string,
        state: string,
        country: string,
        zipCode: string
      }
    ],
    unidade: string
  }