import CardComponent from './components/CardItem'
import './App.css'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="main-container">
    <div className="content-max-width">
      <h1 className="main-heading">Learn 4.0 Technologies</h1>
      <p className="main-paragraph-style">
        Get trained by alumni of IITs and top companies lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce pharetra lobortis risus, in
        molestie dolor. Proin vitae posuere nulla. Ut sed neque tempus lectus
        condimentum consectetur. Fusce vel pulvinar est. Proin quam sapien,
        vestibulum ornare maximus quis, vestibulum non nisl. Mauris sed nulla
        vitae libero luctus pulvinar vel eu mi. Integer rhoncus lectus neque, et
        bibendum dolor condimentum a. Nulla a sapien ligula. In nec porttitor
        diam.
      </p>
      <ul className="app-card-container">
        {cardsList.map(eachCard => (
          <CardComponent cardDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
