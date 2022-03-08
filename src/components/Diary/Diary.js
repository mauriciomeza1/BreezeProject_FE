  import { useContext, useState } from "react"
  import DiaryContext from './../../context/Diary/DiaryContext'

    export default function DiaryCreate() {

     /* const [newDiary, setNewDiary] = useState ({
        markdown: ""
      })

      const [list, setList] = useState([])
 
      const [error, setError] = useState("")
   
      const handleChange = (event) => {
          console.log(event.target.value)
         
          setNewDiary({
              ...newDiary,
              [event.target.name]: event.target.value
          })
      }
   
     
      }*/

     const ctxDiary = useContext(DiaryContext)

      const {
        diaries,
        getDiaries,
        createDiary
      } = ctxDiary

      const [newDiary, setNewDiary] = useState ({
        markdown: ""
      })


      const handleChange = (event) => {
        console.log(event.target.value)
       
        setNewDiary({
            ...newDiary,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (event) => {
      event.preventDefault()

      createDiary(newDiary)

    }


    return (
      <>
<img className='homeinfo' src={require('./../../images/vector/header.png')} />


<button >Obtener diarios</button>

<form onSubmit={ (e) => { handleSubmit(e) } }>
<div class="center">
<h2>How are you feeling today?</h2>
<div class="container">
    <textarea 
    name="markdown"
    type="text"
    value={setNewDiary.markdown}
    onChange={(e) => { handleChange(e) }}
    required id="text-area" 
    placeholder="message..."></textarea>
    <div class="emoji">
        <span>🙂</span>
        <div id="emoji-picker">
            <div class="emoji-arrow"></div>
        </div>
    </div>
<button className="diarysubmit" type="submit" onClick={() =>{ getDiaries() }}>SUBMIT</button>
</div>
       
</div>
</form>

<div className="container2">
<h2 className="yourposts">Your Posts</h2>
        {
            diaries.length === 0 ? <p>There's not any entry yet!</p>
            :
            diaries.map((elt, index) => {
                return (
                    <div key = {elt._key}>
                        <h3>{elt.markdown} </h3>
                    </div>
              )  
            })
        }  
</div> 

        
</>
)
  }
  
