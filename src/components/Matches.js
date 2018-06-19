import  React  from  'react'
import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'
import './Matches.css'

export default class Carousel extends React.Component {
  state = {
    prevIndex: 0
  }

  renderMatches = (match, index) => {
    return <div key={index} className="pane">test:{`${match.name}, ${match.age}`}</div>
  }

  render() {
    return (
      <div className="swipe-wrap">
        <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false, auto: 3000, callback: this.props.getSwipeDirection}}>
          {this.props.matches.map(this.renderMatches)}
        </ReactSwipe>
        <button onClick={() => {this.reactSwipe.next()}}>Click</button>
      </div>
    );
  }
}
