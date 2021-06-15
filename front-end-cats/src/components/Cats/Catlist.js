import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../../actions/catActions'
import {voteCat} from '../../actions/voteCat'
import Cats from './Cats'

class Catlist extends Component {   
  
    componentDidMount() {
      //  console.log(this.props)
      this.props.fetchCats()
    }
    
    handleLoading = () => {
      // console.log(this.props.loading)
      if(this.props.loading) {
        return <div>Loading...</div>
      } else {        
        return <Cats catsList={this.props.catsList}  voteCat={this.props.voteCat}/>
      }
    }
  
    render() {
    // console.log("render state in catlist",this.props)
      return (
        <div>
         
          {this.handleLoading()}
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      catsList: state.cats,
      loading: state.loading
    }
  }
  

  const mapDispatchToProps = dispatch => {
    return {
      fetchCats: () => dispatch(fetchCats()),
      voteCat: (cat) => dispatch(voteCat(cat))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Catlist)
  