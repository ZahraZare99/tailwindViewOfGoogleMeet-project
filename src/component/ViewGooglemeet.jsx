import React from "react";
import { FaMicrophone } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';
import { FaVideoSlash } from 'react-icons/fa';
import { FaMicrophoneSlash } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
// import { FaEllipsisV } from 'react-icons/fa';


class ViewGooglemeet extends React.Component {
    state = { 
        profileView :[
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/4.png",
                name:"ehsan",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/5.png",
                name:"morteza",
            },
            {
                onMicrophoneClass:"border border-green-600",
                microphoneIcon:<FaMicrophone/>,
                picture:"./images/5.png",
                name:"navid",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/1.png",
                name:"fateme",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/6.png",
                name:"You",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/2.png",
                name:"ahmad",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/3.png",
                name:"noshin",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/2.png",
                name:"reza",
            },
            {
                microphoneIcon:<FaMicrophoneSlash/>,
                picture:"./images/4.png",
                name:"mohammad",
            },
        ]
     } 
    render() { 
        return (
            <div className="bg-slate-900 flex flex-col justify-center">
            <div className="grid grid-cols-2 p-3 w-1/2 h-auto bg-slate-700 w-full">
            {this.state.profileView.map((card,index)=> {
                return(
                    <div className={`p-2  ${card.onMicrophoneClass}`} key={index}>
                        <div className="w-full ">
                        <span className="px-1 flex justify-end pb-1">
                           <span className="bg-gray-400 p-1 rounded-full">{card.microphoneIcon}</span> 
                            </span>
                        <span className="flex justify-center">
                            <img src={card.picture} alt="NL"
                            style={{width:"65px",heigth:"65px"}}
                            ></img>
                        </span>
                        <span className="px-1  flex justify-between p-0 m-0">
                            <span className="text-lg text-gray-100 font-medium">{card.name}</span>
                            <span className="p-0 m-0 text-gray-100 flex items-center"
                            >
                                <FaEllipsisV />
                            </span>
                        </span>
                        
                        </div>
                        
                    </div>
                );
            })}
            
        </div>
        <div className="flex w-1/2 justify-center bg-slate-700 p-3 w-full">
                <span className="p-2 bg-red-800 text-white mx-1 rounded-full text-xl"><FaPhoneAlt/></span>
                <span className="p-2 bg-slate-400 mx-1 rounded-full text-xl"><FaVideoSlash/></span>
                <span className="p-2 bg-slate-400 mx-1 rounded-full text-xl"><FaMicrophoneSlash/></span>
                <span className="p-2 bg-slate-400 mx-1 rounded-full text-xl"><FaEllipsisV/></span>
            </div>
    </div>
        );
    }
}
 
export default ViewGooglemeet;