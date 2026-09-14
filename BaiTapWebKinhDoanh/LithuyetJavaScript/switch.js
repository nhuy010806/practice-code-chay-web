function Xulipheptoan(a,b, pt){
    kq=""
    switch(pt){
        case "+": 
          kq=(a+b)
          break
        case "-": 
          kq=(a-b)
          break
        case "*": 
          kq=a*b
          break
        case "/": 
          kq=a/b
          break
        default: 
          kq="Looix"
          break

    }
    return kq
}