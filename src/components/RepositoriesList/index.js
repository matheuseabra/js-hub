import React, { Component } from 'react'
import api from '../../services/api'
import Repository from './Repository/index'
import Pagination from "react-js-pagination"
import { Icon } from 'evergreen-ui'

export default class RepositoriesList extends Component {

    constructor(props) {
        super(props)
        this.handlePagination = this.handlePagination.bind(this)
        this.state = {
            repos: [],
            total: null,
            limit: 20,
            currentPage: 1
        }
    }

    componentDidMount() {
        this.loadRepos()
    }

    handlePagination = (page) => {
        this.setState({
            currentPage: page,
        })
        this.loadRepos()
        console.log('the currentPage is: ', this.state.currentPage)
    }

    

    async loadRepos() {
        try {
            const githubEndPoint = `/search/repositories?q=javascript+is:featured+topic:javascript&sort=stars:desc&page=${this.state.currentPage}&per_page=${this.state.limit}`
            const response = await api.get(githubEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
            this.setState({ 
                repos: response.data.items,
                total: response.data.total_count
             })
        }
        catch(err) {
            console.log('Error during request: ', err)
        }   
    }

    
    render() {
        return (
            <div className="container">
                <h2>Featured repositories <Icon icon="star" color="warning" /></h2>
                <ul className="repoList">
                    {
                        this.state.repos.map(repo => (
                            <Repository key={repo.id} repo={repo} />
                        ))
                    }
                </ul>
                <Pagination
                    prevPageText={'Previous'}
                    nextPageText={'Next'}
                    innerClass={'pagination'}
                    itemClass={'pagination-item'}
                    itemClassNext={'pagination-next'}
                    itemClassPrev={'pagination-prev'}
                    activeClass={'pagination-active'}
                    disabledClass={'paginatio-disabled'}
                    hideFirstLastPages={'true'}
                    activePage={this.state.currentPage}
                    itemsCountPerPage={this.state.limit}
                    totalItemsCount={this.state.total}
                    pageRangeDisplayed={15}
                    onChange={this.handlePagination} />
            </div>
        )
    }
}
