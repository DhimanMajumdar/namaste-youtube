import React from "react";
import commentsData from "../utils/constants";
import { CgProfile } from "react-icons/cg";

const CommentsContainer = ()=>{
    return(
        <CommentsList commentsData={commentsData}/>
    )
}



const CommentsCard=({data})=>{
    const {name,cmnt} = data;
    return(
        <div className="flex items-center mb-4  gap-3">
            <div><CgProfile size={28} /></div>
            <div>
                <p className="font-bold">{name}</p>
                <p className="font-light">{cmnt}</p>
            </div>
        </div>
    )
}
const CommentsList = ({commentsData}) => {
  return(
  <div className="mt-4">
    {
        commentsData.map((data,idx)=>(
            <div className="mx-6 px-5 bg-gradient-to-r from-gray-800 to-gray-600 shadow-slate-300 shadow-lg rounded-3xl text-white" key={idx}>
                <CommentsCard data={data}/>
                {data.replies.length>0 &&
                    <div className="ml-8 border-white border-l-2">
                    <CommentsList commentsData={data.replies}/>
                </div>
                }
            </div>
        ))
    }
  </div>
  )
};



export default CommentsContainer;