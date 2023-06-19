type UserTypes = {
    email: string
    password: string
    name?: string
  }
  
type LoginResponse = {
    token: string
  }


export async function ApiLogin({email, password}:UserTypes):Promise<LoginResponse>{
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
    
    const data = await response.json()
    console.log(data)
    return(data)
}

export async function ApiRegister({email, password,name}:UserTypes):Promise<Response>{
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

  const data = await response.json()
  return(data)
}