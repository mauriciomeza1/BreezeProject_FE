// import { useState, useContext} from 'react'
// import ProfileContext from '../../context/Profile/ProfileContext'



// export default function Profile() {

//   const ctxProfile = useContext(ProfileContext)

//   const {
//     profiles,
//     getProfile,
//     createProfile
//   } = ctxProfile

  
// return(
//     <>
//     <img className='homeinfo' src={require('./../../images/vector/header.png')} />
//     <div className="somecontainer">
//         <h2 className="youprofile">Your Profile</h2>
//         {
//             profiles.map((elt, index) => {
//                 return (
//                     <div key = {elt._key}>
//                         <h3>{elt.age} </h3>
//                         <h3>{elt.pronouns} </h3>                       
//                         <h3>{elt.about} </h3>                       
//                         <h3>{elt.needs} </h3>                        
//                         <h3>{elt.goals} </h3> 
//                     </div>
//               )  
//             })
//         }  
// </div> 
//     </>
//     )

// }





import { useContext, useEffect } from "react";
import ProfileContext from './../../context/Profile/ProfileContext';
 
export default function Profile() {
 
  const ctxProfile = useContext(ProfileContext)

  const {getProfile, profiles} = ctxProfile

  useEffect(() => {
    getProfile()
  }, [])

  
  return (
    <>
<img className='homeinfo' src={require('./../../images/vector/header.png')} />


          <div className="profilecardcontainer">
          <div className="profilecard">
            <div className="profiletext">
                <img src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt=""/>
                <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
            </ div>
            </div>







            <div className="profilecardcontainer2">
            <div className="profiletext2 card01">
                <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
            <div className="profiletext2 card02">
                <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
            <div className="profiletext2 card03">
              <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
            <div className="profiletext2 card04">
            <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
            
            </div>


        <p>{ctxProfile.age}</p>
    </>
    )
}
