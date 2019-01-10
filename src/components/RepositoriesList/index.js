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

export const VueRepos = props => (
    <div className="repo-category">
        <h2 className="category-title">Vue.js</h2>
        <ul className="repo-list">
            {
                props.vue.map(repo => (
                    <Repository key={repo.id} repo={repo} />
                ))
            }
        </ul>
    </div>
)

export const AngularRepos = props => (
    <div className="repo-category">
        <h2 className="category-title">Angular</h2>
        <ul className="repo-list">
            {
                props.angular.map(repo => (
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
            vue: [],
            angular: [],
            repos: [],
            total: null,
            limit: 12,
            currentPage: 1
        }
    }

    componentDidMount() {
        this.loadFeaturedRepos()
        this.loadVueRepos()
        this.loadAngularRepos()
        this.loadReactRepos()
        this.loadNodeRepos()
    }

    async loadNodeRepos() {
        try {
            const nodeEndPoint = `/search/repositories?q=nodejs+topic:nodejs&page=1&per_page=8&sort=stars&order=desc`
            const response = await api.get(nodeEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
            this.setState({ 
                node: response.data.items
            })
        } catch (err) {
            console.log('Error loading React repositories: ', err)
        }
    }

    async loadVueRepos() {
        try {
            const vueEndPoint = `/search/repositories?q=vue+topic:vuejs&page=1&per_page=8&sort=stars&order=desc`
            const response = await api.get(vueEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
            this.setState({ 
                vue: response.data.items
            })
        } catch (err) {
            console.log('Error loading vue repositories: ', err)
        }
    }

    async loadAngularRepos() {
        try {
            const angularEndPoint = `/search/repositories?q=angular+topic:angular&page=1&per_page=8&sort=stars&order=desc`
            const response = await api.get(angularEndPoint, { headers: {'Accept': 'application/vnd.github.mercy-preview+json'}})
            this.setState({ 
                angular: response.data.items
            })
        } catch (err) {
            console.log('Error loading angular repositories: ', err)
        }
    }

    async loadReactRepos() {
        try {
            const reactEndPoint = `/search/repositories?q=react+topic:reactjs&page=1&per_page=8&sort=stars&order=desc`
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
            const jsEndPoint = `/search/repositories?q=javascript+topic:javascript&page=1&per_page=8&sort=stars&order=desc`        
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
            <div className="app">          
                <FeaturedRepos repos={this.state.repos} />
                <NodeRepos node={this.state.node} />
                <ReactRepos react={this.state.react} />
                <VueRepos vue={this.state.vue} /> 
                <AngularRepos angular={this.state.angular} />
            </div>     
        )
    }
}
