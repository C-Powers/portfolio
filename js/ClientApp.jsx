const React = require('react')
const ReactDOM = require('react-dom')

var projects = [
  {
    'name': 'Top Campers',
    'url':'https://camper-leaderboard.herokuapp.com/',
    'path': 'http://i.imgur.com/m5SZNC7.png',
    'description': 'A React.js app utilizing ajax to call in FreeCodeCamp\'s leaderboard.'
  },
  {
    'name': 'QueerReviews',
    'url': 'https://queerr.herokuapp.com/',
    'path': 'http://i.imgur.com/O4GlliS.png',
    'description': 'An app made for Grindr\'s Hack4Equality hackathon. My partner and I presented a glassdoor-esque app where LGBTQ people could rate and review companies they\'ve worked for.'
  },
  {'name': 'Veggie Recipes',
    'localpath': 'images/webScraper.jpg',
    'url': 'https://veggierecipes.herokuapp.com/',
    'path': 'http://i.imgur.com/BsztKQz.jpg',
    'description': 'A web scraper made with Django, utilizing an endpoint, that scrapes the top posts of a subreddit to grab and return a tasty veggie recipe!'
  },
  {'name': 'Twich Streamers',
      'localpath': 'images/twitchStreamers.jpg',
      'url': 'http://twitchsteamers.pythonanywhere.com/',
      'path': 'http://i.imgur.com/NzLVi3b.jpg',
      'description': 'A responsive JS app, utilizing HTML injection, that returns a list of Twitch streamers. '
      },
  {'name': 'JS Calculator',
    'localpath': 'images/jscalculator.jpg',
    'url': 'https://codepen.io/cpowers/full/QNYoXx/',
    'path': 'http://i.imgur.com/aFrRDpX.jpg',
    'description': 'A simple calculator created with JavaScript'
    },
  {'name': 'Random Quote Machine',
    'localpath': 'images/randomQuote.jpg',
    'url': 'https://codepen.io/cpowers/full/mPMvow/',
    'path': 'http://i.imgur.com/0xykqgu.jpg',
    'description': 'An app that returns a random Lord of the Rings Quote. Potatoes, eh?'
    },
  {'name': 'TicTacToe',
    'localpath': 'images/tictactoe.jpg',
    'url': 'https://codepen.io/cpowers/full/wGbzVj/',
    'path': 'http://i.imgur.com/kKkJlmy.jpg',
    'description': 'A two player tic tac toe game, made with JS'
  },
  {
    'name': 'San Diego Randonneurs',
    'url': 'http://sdrandos.pythonanywhere.com/',
    'path': 'http://i.imgur.com/8cRmvvl.png',
    'description': 'A site made for a local long distance cycling group. Built with Django, it utilizes a web scraping endpoint to get data from the nationwide rando webpage, and display local-only results.'
  }
]

const Header = React.createClass({
  render () {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Hello, (hiring) world!</h1>
        <p className="lead">My name is <strong> Chris Powers </strong>, and I'm a web developer living in San Diego, California.</p>
        <hr className="m-y-2" />
        <p> I've recently graduated with a degree in Physics from UC Santa Cruz, and I'm looking to apply my expertise in Javascript (React, Node) and Python (Flask, Django, scripting). </p>
        <p className="lead">
          Check out some web projects I've created below!
        </p>
      </div>
     )
  }
})

const ListItem = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    isSelected: React.PropTypes.bool
  },
  getDefaultProps: function () {
    return {
      isSelected: false
    }
  },
  getInitialState: function () {
    return {
      hover_flag: false
    }
  },
  hoverEvent: function () {
    this.setState({hover_flag: !this.state.hover_flag})
  },
  render () {
    let liStyle = {
      background: 'white',
      color: 'black'
    }
    let deStyle = {
      display: 'none',
      zIndex: 1
    }
    if (this.props.isSelected || this.state.hover_flag) {
      //liStyle['background'] = '#880000'
      //liStyle['color'] = 'white'
      //liStyle['background'] = 'rgba(255,255,255,0.6)'
      deStyle['display'] = 'block'
    }
    return (
      <li
        onClick={this.props.onClick}
        onMouseEnter={this.hoverEvent}
        onMouseLeave={this.hoverEvent}
        style={liStyle}
        className="item"
        >
        <a href={this.props.url} target="_blank">
        <img src={this.props.path} alt='loading...' className='img-rounded'/>
        </a>
        <p style={deStyle} className="desc">
          <strong> {this.props.name} </strong>
          {this.props.description}
        </p>
      </li>
    )
  }
})

const Parent = React.createClass({
  getInitialState: function () {
    return {
      selectedItem: null
    }
  },
  clickHandler: function (idx) {
    this.setState({selectedItem: idx})
  },
  render () {
    //  console.log(this.props.data)
    let ulStyle = {
      padding: '0px',
      margin: '20px'
    }
    let items = this.props.data.map(function (item, idx) {
      let is_selected = this.state.selectedItem === idx
      return (
        <ListItem
          key={item.name}
          name={item.name}
          url={item.url}
          path={item.path}
          description={item.description}
          onClick={this.clickHandler.bind(this, idx)}
          isSelected={is_selected}
        />
             )
    }.bind(this))
    console.log(items)
    return (
      <ul style={ulStyle} className="items list-unstyled text-center">
        {items}
      </ul>
    )
  }
})

const Footer = React.createClass({
  render () {
    return (
      <footer className='text-center'>
        <h1>Find Me on the Web</h1>
        <p>You can contact or follow me via any of these services:</p>
        <ul className="social list-inline">
          <li> <a href="https://github.com/C-Powers"> <i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
          <li> <a href="https://twitter.com/see_cpowers"> <i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
          <li> <a href="https://www.linkedin.com/in/christopher-powers-a1010553"> <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
          <li> <a href="https://plus.google.com/u/0/115863216480353372116/posts"> <i className="fa fa-google-plus" aria-hidden="true"></i>Google Plus</a></li>
        </ul>
      </footer>
    )
  }
})

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='container-fluid main-content'>
          <Parent data={projects} />
        </div>
        <hr />
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
