
type dataType = {
  _id?: string
  title: string
  content: string
  column?: string
  userId?: string
  __v?: number
}

let token:string | null = localStorage.getItem('AUTH_TOKEN')

export async function CreateCard(data:dataType){
  const ApiResponse = await fetch(`https://arnia-kanban.vercel.app/api/card/`, {
        method: 'POST',
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': token ? token : ''
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
        })
      })
}

export async function GetCard(){

    const ApiResponse = await fetch("https://arnia-kanban.vercel.app/api/card", {
        method: 'GET',
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': token ? token : ''
        }
      })
    const response = await ApiResponse.json()
    return(response)
}

export async function ChengeColumn(data:dataType,column:string){
  const ApiResponse = await fetch(`https://arnia-kanban.vercel.app/api/card/${data._id}`, {
        method: 'PUT',
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': token ? token : ''
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          column: column
        })
      })
}

export async function DeleteCard(data:dataType){
  const ApiResponse = await fetch(`https://arnia-kanban.vercel.app/api/card/${data._id}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': token ? token : ''
        }
  })
}

export async function EditCard(obj:dataType){
  const ApiResponse = await fetch(`https://arnia-kanban.vercel.app/api/card/${obj._id}`, {
        method: 'PUT',
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': token ? token : ''
        },
        body: JSON.stringify({
          title: obj.title,
          content: obj.content,
          column: obj.column
        })
      })
}