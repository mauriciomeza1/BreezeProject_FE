  import { useContext, useState } from "react"
  import DiaryContext from './../../context/Diary/DiaryContext'

    export default function DiaryCreate() {

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


<form onSubmit={ (e) => { handleSubmit(e) } }>
<div class="center">
<h2>How are you feeling today?</h2>
<div class="diarycontainer">
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

<div className="yourpostscontainer">
  <h2 className="yourposts">Your Posts</h2>
</div>

<div className="container2">

        {
            diaries.length === 0 ? <p>There's not any entry yet!</p>
            :
            diaries.map((elt, index) => {
                return (
                  <div className="markdowns">
                    <div key = {elt._key}>
                        <h3 className="eltmarkdown">{elt.markdown} </h3>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                  </div>  
              )  
            })
        }  
</div>  

        
</>
)
  }
  
