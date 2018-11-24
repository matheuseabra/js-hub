import React, { Component } from 'react'
import api from '../../services/api'
import Repository from './Repository/index'

export const FeaturedRepos = props => (
    <div className="repo-category">
        <h2 className="category-title">JavaScript</h2>
        <ul className="repo-list">
            {
                props.repos.map(repo => (
                    <Repository key={repo.id} repo={repo} />
                ))
            }
        </ul>
    </div>
)

export const ReactRepos = props => (
    <div className="repo-category">
        <h2 className="category-title">React</h2>
        <ul className="repo-list">
            {
                props.react.map(repo => (
                    <Repository key={repo.id} repo={repo} />
                ))
            }
        </ul>
    </div>
)

export const NodeRepos = props => (
    <div className="repo-category">
        <h2 className="category-title">Node.js</h2>
        <ul className="repo-list">
            {
                props.node.map(repo => (
                    <Repository key={repo.id} repo={repo} />
                ))
            }
        </ul>
    </div>
)

export default class RepositoriesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            react: [],
            node: [],
            repos: [],
            total: null,
            limit: 12,
            currentPage: 1
        }
    }

    componentDidMount() {
        this.loadFeaturedRepos()
        this.loadReactRepos()
        this.loadNodeRepos()
    }

    async loadNodeRepos() {
        try {
            const nodeEndPoint = `/search/repositories?q=nodejs+topic:nodejs&page=1&per_page=12&sort=stars&order=desc`
            const response = await api.get(nodeEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
            this.setState({ 
                node: response.data.items
            })
        } catch (err) {
            console.log('Error loading React repositories: ', err)
        }
    }

    async loadReactRepos() {
        try {
            const reactEndPoint = `/search/repositories?q=react+topic:react&page=1&per_page=12&sort=stars&order=desc`
            const response = await api.get(reactEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
            this.setState({ 
                react: response.data.items
            })
        } catch (err) {
            console.log('Error loading featured repositories: ', err)
        }
    }
    
    async loadFeaturedRepos() {
        try {
            const jsEndPoint = `/search/repositories?q=javascript+topic:javascript&page=1&per_page=12&sort=stars&order=desc`        
            const response = await api.get(jsEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
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
            <div>          
                <FeaturedRepos repos={this.state.repos} />
                <NodeRepos node={this.state.node} />         
                <ReactRepos react={this.state.react} />              
            </div>        
        )
    }
}
