type dataType = {
    password: string
    confPassword: string
    email: string
}

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

export function passworldVerify({password,confPassword}:dataType):boolean{
    console.log("testando senha")
    console.log(password === confPassword)
    return(password === confPassword)
}

export function emailVerify({email}:dataType):boolean{
    console.log("testando email")
    console.log(emailRegex.test(email))
    return(emailRegex.test(email))
}