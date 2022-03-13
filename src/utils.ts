export const getImageNumber = (page: number, index: number) => {
    let res = (page - 1) * 10 + index + 1
    //API missing 1 picture on 17th position (404), so have to fix it by hack below.
    if(res > 17) res += 1 
    return res
}