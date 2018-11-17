import React, { Component } from 'react'
import { Dialog, Icon } from 'evergreen-ui'


export default  class Repository extends Component {
    
    constructor(props) {
        super(props)
        this.showModal = this.showModal.bind(this)
        this.state = {
            showModal: false
        }
    }

    showModal = () => {
        this.setState({ showModal: true })
    }

    render() {
        const { name, owner: { avatar_url }, full_name, description, html_url, git_url, stargazers_count, forks_count, open_issues_count } = this.props.repo
        return(
            <React.Fragment>
                <Dialog width={758} shouldCloseOnEscapePress={true} hasHeader={false} hasFooter={false} hasCancel={false} isShown={this.state.showModal}  onCloseComplete={() => this.setState({ showModal: false })}>
                    <h3><img className="repo-avatar" src={avatar_url} alt='User Avatar' />{full_name}</h3>
                    <p>{description}</p>
                    
                    <code>{git_url}</code>
                    <ul className="repo-stats">
                        <li className="repo-stat">
                            <span><Icon icon="star" color="muted" marginRight={16} /> {stargazers_count}</span>
                        </li>
                        <li className="repo-stat">
                            <span><Icon icon="fork" color="muted" marginRight={16} /> {forks_count}</span>
                        </li>
                        <li className="repo-stat">
                            <span><Icon icon="issue-closed" color="muted" marginRight={16} /> {open_issues_count}</span>
                        </li>
                    </ul>
                    <a href={html_url}>GitHub repository</a>
                </Dialog>
                <li className="repo-item" onClick={this.showModal}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <ul className="repo-stats">
                        <li className="repo-stat">
                            <p><Icon icon="star" color="muted" marginRight={16} /> {stargazers_count}</p>
                        </li>
                        <li className="repo-stat">
                            <p><Icon icon="fork" color="muted" marginRight={16} /> {forks_count}</p>
                        </li>
                        <li className="repo-stat">
                            <p><Icon icon="issue-closed" color="muted" marginRight={16} /> {open_issues_count}</p>
                        </li>
                    </ul>
                </li>
            </React.Fragment>
        ) 
        
    }
}
