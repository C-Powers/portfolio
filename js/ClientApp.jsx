const React = require('react')
const ReactDOM = require('react-dom')

var projects = [
  {
    'name': 'Web Theremin',
    'url': 'https://webtheremin.herokuapp.com/',
    'path': '',
    'description': 'A vanilla js app utilizing web audio principles.'
  },
  {
    'name': 'Top Campers',
    'url': 'https://camper-leaderboard.herokuapp.com/',
    'path': 'https://i.imgur.com/m5SZNC7.png',
    'description': 'A React.js app utilizing ajax to call in FreeCodeCamp\'s leaderboard.'
  },
  {
    'name': 'QueerReviews',
    'url': 'https://queerr.herokuapp.com/',
    'path': 'https://i.imgur.com/O4GlliS.png',
    'description': 'An app made for Grindr\'s Hack4Equality hackathon. My partner and I presented a glassdoor-esque app where LGBTQ people could rate and review companies they\'ve worked for.'
  },
  {'name': 'Veggie Recipes',
    'localpath': 'images/webScraper.jpg',
    'url': 'https://veggierecipes.herokuapp.com/',
    'path': 'https://i.imgur.com/BsztKQz.jpg',
    'description': 'A web scraper made with Django, utilizing an endpoint, that scrapes the top posts of a subreddit to grab and return a tasty veggie recipe!'
  },
  {'name': 'Twich Streamers',
      'localpath': 'images/twitchStreamers.jpg',
      'url': 'http://twitchsteamers.pythonanywhere.com/',
      'path': 'https://i.imgur.com/NzLVi3b.jpg',
      'description': 'A responsive JS app, utilizing HTML injection, that returns a list of Twitch streamers. '
      },
  {'name': 'JS Calculator',
    'localpath': 'images/jscalculator.jpg',
    'url': 'https://codepen.io/cpowers/full/QNYoXx/',
    'path': 'https://i.imgur.com/aFrRDpX.jpg',
    'description': 'A simple calculator created with JavaScript'
    },
  {'name': 'Random Quote Machine',
    'localpath': 'images/randomQuote.jpg',
    'url': 'https://codepen.io/cpowers/full/mPMvow/',
    'path': 'https://i.imgur.com/0xykqgu.jpg',
    'description': 'An app that returns a random Lord of the Rings Quote. Potatoes, eh?'
    },
  {'name': 'TicTacToe',
    'localpath': 'images/tictactoe.jpg',
    'url': 'https://codepen.io/cpowers/full/wGbzVj/',
    'path': 'https://i.imgur.com/kKkJlmy.jpg',
    'description': 'A two player tic tac toe game, made with JS'
  },
  {
    'name': 'San Diego Randonneurs',
    'url': 'http://sdrandos.pythonanywhere.com/',
    'path': 'https://i.imgur.com/8cRmvvl.png',
    'description': 'A site made for a local long distance cycling group. Built with Django, it utilizes a web scraping endpoint to get data from the nationwide rando webpage, and display local-only results.'
  }
]

const Header = React.createClass({
  /*  I've recently graduated with a degree in Physics from UC Santa Cruz,
    and I'm looking to apply my expertise in <strong>Javascript</strong> (React, Node)
    and <strong>Python</strong> (Flask, Django, scripting).
  */
  render () {
    return (
      <div className="jumbotron">
        <div className="top-intro">
          <h1 className="display-3">I'm <strong> Chris Powers </strong> </h1>
          <p className="lead">A <strong>full stack developer</strong> who likes to write code and ride bikes.</p>
        </div>
        <hr className="m-y-2" />
        {/* <div className="text">
          I'm a full stack developer
        </div> */}
        <div className="text">
          Some of my skills are:
          <ul>
            <li className="language"> <strong>Javascript</strong> [ React, Vanilla, Node, jQuery, StructureJS ]</li>
            <li className="language"> <strong>Python</strong> [ Flask, Django, Scripting + Analysis ]</li>
            <li className="language"> <strong> C# </strong> [ .NET, Entity, performace based/OOP ]</li>
            <li className="language"> <strong>DataBase</strong> [ AmazonAWS/cloud architecture, PostgreSQL, Mongo ]</li>
            <li className="language"> <strong>Anything</strong> [ I can learn it ]</li>
          </ul>
        </div>
        <div className="text">
          Check out some web projects I've created below!
        </div>
      </div>
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
          <li> <a href="https://github.com/C-Powers" target="_blank"> <i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
          <li> <a href="https://www.linkedin.com/in/chris-powers-a1010553" target="_blank"> <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
          <li> <a href="https://twitter.com/see_cpowers" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
          <li> <a href="https://www.instagram.com/entro.p/" target="_blank"> <i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
          <li> <a href="https://plus.google.com/u/0/115863216480353372116/posts" target="_blank"> <i className="fa fa-google-plus" aria-hidden="true"></i>Google Plus</a></li>
        </ul>
      </footer>
    )
  }
})

const ListItem = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    isSelected: React.PropTypes.bool,
    data: React.PropTypes.object
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
    let des = ''
    if (this.props.isSelected || this.state.hover_flag) {
      //  liStyle['background'] = '#880000'
      //  liStyle['color'] = 'white'
      //  liStyle['background'] = 'rgba(255,255,255,0.6)'
      //  deStyle['display'] = 'block'
      des = this.props.data.description
    }
    return (
      <li
        onClick={this.props.onClick}
        onMouseEnter={this.hoverEvent}
        onMouseLeave={this.hoverEvent}
        className="item"
        >
        <a href={this.props.data.url} target="_blank">
          <img src={this.props.data.path} alt='loading...' className='img-rounded' />
        </a>
        <p className="desc">
          {des}
        </p>
      </li>
    )
  }
})

const Parent = React.createClass({
  propTypes: {
    isSelected: React.PropTypes.bool,
    data: React.PropTypes.array
  },
  getInitialState: function () {
    return {
      selectedItem: null
    }
  },
  clickHandler: function (idx) {
    this.setState({selectedItem: idx})
  },
  render () {
    let ulStyle = {
      padding: '0px',
      margin: '20px'
    }
    let items = this.props.data.map(function (item, idx) {
      let isSelected = this.state.selectedItem === idx
      return (
        <ListItem
          data={item}
          key={item.name}
          onClick={this.clickHandler.bind(this, idx)}
          isSelected={isSelected}
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

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='container-fluid main-content'>
          <Parent data={projects} />
        </div>
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
