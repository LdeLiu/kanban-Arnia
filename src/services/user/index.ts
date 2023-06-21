type UserTypes = {
    email: string
    password: string
    name?: string
  }

  type ResponseType = {
    statusCode: number
    responseObject: {
      token: string
      name: string 
      message: string 
    }
  }
  
export async function ApiLogin({email, password}:UserTypes):Promise<ResponseType>{
    const response = await fetch('https://arnia-kanban.vercel.app/api/user/login', {
        method: 'POST',
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('AUTH_TOKEN') || ''
        },
        body: JSON.stringify({
          email,
          password
        })
      })
    const statusCode = response.status
    const responseObject = await response.json()

    const teste = {
      statusCode,
      responseObject
    }

    return(teste)
}

export async function ApiRegister({email, password,name}:UserTypes):Promise<ResponseType>{
  const response = await fetch('https://arnia-kanban.vercel.app/api/user', {
      method: 'POST',
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    })

    const statusCode = response.status
    const responseObject = await response.json()

    const teste = {
      statusCode,
      responseObject
    }

    return(teste)
}