import DiaryContext from './../../context/Diary/DiaryContext'
import { useState, useContext } from 'react'

import { nanoid } from 'nanoid';


export default function NewDiary() {
 

  const [newComment, setNewComment] = useState({
    markdown: ''
  }) 
 

 const [list,setList] = useState([])

 const [id, setId] = useState("")
 const [editionMode, setEditionMode] = useState(false)

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
       
        setNewDiary({
            ...newDiary,
            id: nanoid(),
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (event) => {
      event.preventDefault()
          
          setList([
              ...list,
              newDiary
          ])
          setNewComment({
              markdown: ""
          })

      createDiary(newDiary)

    }



  const handleSubmitEdit = (event) => {

		event.preventDefault()
		const filteredArray = list.map((item) => {
			return item.id === id ? {
				id: id,
				subject: newDiary.markdown,
			} : item
		})


		setList(filteredArray)

		setNewComment({
			markdown: "",
		})
  }

  


 const current = new Date();
 const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



  return (
    <>
    <img className='homeinfo' src={require('./../../images/vector/header.png')} />
    <div className='quotecontainer'>
    <h2 className='quotediary'>One small positive thought can change your whole day. <br/>-Zig Ziglar</h2>
    </div>
    <div className=" diario flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form
        onSubmit={
          editionMode ? 
              (evt) => { handleSubmitEdit(evt) } 
              : 
              (evt) => { handleSubmit(evt) } 
          }>
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
             name="markdown"
             type="text"
             value={setNewDiary.markdown}
             onChange={(e) => { handleChange(e) }}
              rows={3}
              id="comment"
              className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
              placeholder="Add your comment..."
              defaultValue={''}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
              </div>
              <div className="flex items-center">
   
              </div>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() =>{ getDiaries() }}
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post
              </button>
            </div>
          </div>

   
                    <button type="submit">Create Entry</button>
            

        </form>
      </div>

      <div className='allthecomments'>
      {
            diaries.length === 0 ? <p>There's not any entry yet!</p>
            :
            diaries.map((item, index) => {
                return (
                  <div className="markdowns">
                    <div key = {item._key}>
                        <h3 className="eltmarkdown">{item.markdown}
                        </h3>
                        <p className='eltdate'>{date}</p>
                        {/* <button onClick={ () => { editComment(item) }}>Editar</button>
                        <button onClick={ () => { deleteComment(item.id) }}>Borrar</button> */}
                    </div>
                  </div>  
              )  
            })
        }  
      </div>
    </div>
    </>
  )
}