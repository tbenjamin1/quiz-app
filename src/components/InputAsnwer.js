import React from 'react'

function InputAsnwer(props) {
    return (
        <div>
            <div>
                <input
                  type="radio"
                  name="q1"
                  value="answer"
                  class="bg-gray-200 m-4 checked:bg-blue-600 checked:border-transparent ..."
                />
                <label> {props.answer}</label>
              </div>
        </div>
    )
}

export default InputAsnwer
