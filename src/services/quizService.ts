const hostUrl = process.env.REACT_APP_HOST_URL + "/api/v1";
export const createQuiz = () => {
    return requestGet("/quiz/new");
}

const requestGet = async (endPoint: string) => {
    try{
        const res = await fetch(hostUrl + endPoint);
        if(res.ok)
            return await res.json();
        else
            throw Error("An error occured")
    }catch(e: any){
        throw Error(e)
    }
}