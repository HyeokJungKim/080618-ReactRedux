import React from 'react'
import {connect} from 'react-redux'

function ContestantCard(props) {
  const { contestant } = props
  const swapImage = () => {
    if (contestant.votes > 4) {
      return "https://data.whicdn.com/images/173918733/large.jpg"
    } else if (contestant.votes < -4) {
      return "https://media2.giphy.com/media/sw7KSBKL3yme4/480w_s.jpg"
        } else {
      return contestant.image
    }
  }

  return (
    <div className="card">
      <h2>Queen {contestant.name}</h2>
      <p>Votes: {contestant.votes}</p>
      <img alt={contestant.name} src={swapImage()} />
      <br />
      <button onClick={() => {
        props.pleaseIncreaseVote(contestant.id)
      }}>
        Vote
      </button>
      <button onClick={() => props.pleaseDecreaseVote(contestant.id) }>
        Unvote
      </button>

    </div>
  )
}
















const mapDispatchToProps = (dispatch) => {
  return {
    pleaseIncreaseVote: (id) => dispatch({ type: "INCREASE_VOTE", payload: id }),
    pleaseDecreaseVote:  (id) => dispatch({ type: "DECREASE_VOTE", payload: id })
  }
}


export default connect(null, mapDispatchToProps)(ContestantCard)
