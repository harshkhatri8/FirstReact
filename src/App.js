import Wrapper from "./components/Wrapper";
import "./App.css";
import { useState } from "react";
function App() {

 

  const details= [
    {
      id:0,
      img:"https://cdn.thecodehelp.in/Agra.jpeg",
      price:15000,
      name : "Agra",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
    {
      id:1,
      img: 'https://cdn.thecodehelp.in/Jaipur.jpeg',
      price:50000,
      name : "Mumbai",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
    {
      id:2,
      img: 'https://cdn.thecodehelp.in/Goa.jpeg',
      price:15000,
      name : "gurgaon",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
    {
      id:3,
      img: 'https://cdn.thecodehelp.in/Kochi.jpeg',
      price:20000,
      name : "delhi",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
    {
      id:4,
      img: 'https://cdn.thecodehelp.in/Varanasi.jpeg',
      price:100,
      name : "Navlakha",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
    {
      id:5,
      img: 'https://cdn.thecodehelp.in/Darjeeling.jpeg',
      price:5000,
      name : "chennai",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
    {
      id:6,
      img: 'https://cdn.thecodehelp.in/Jaisalmer.jpeg',
      price:100000,
      name :" indore",
      description: "lorem ipsemdfhds hdfjg adfhj jkfds hgjfak gfdj adfjga dfa ds hfhsdjfka  jdsfga jdsf  asdfjg cyra fdshf e iaew tsdf lad gadfeu a fbf kj leareiu fa dfjdsbhdfgjdf  adfjdsafkj fds jh hj fjsd jdkfhgtrehg    hdfhsd eru  j nfsdfnsdk  jfsdkjfa l h ffd jktrja  dfjsd ; ggjra;e; sdfja j dfjasflkjsdfea  ieringi  ioaerfadkj  sdflk anfmdsoiuear h iofaerkasd; ",
    },
  ]


  const [tours,setTours] = useState(details);
  
  if(tours.length ===0){
    return(
      <div className="refresh">
        <h2>no more tour left</h2>
        <button onClick={()=>setTours(details)}>Refresh</button>

      </div>
    
    )
  }
  function removeTour(id){
    console.log("removed");
    const newtours = tours.filter(tour => tour.id !== id);
    setTours(newtours);
  }


  return (
    <div className="gg">
         
        <Wrapper tours={tours} removeTour={removeTour}></Wrapper>
       
    </div>
  );
}

export default App;
