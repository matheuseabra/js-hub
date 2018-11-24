import React, { Component } from 'react'
import { Dialog, Icon } from 'evergreen-ui'


export default  class Repository extends Component {
    
    constructor(props) {
        super(props)
        this.copyGitUrl = this.copyGitUrl.bind(this)
        this.showModal = this.showModal.bind(this)
        this.state = {
            showModal: false,
            copied: false
        }
    }

    showModal = () => {
        this.setState({ showModal: true })
    }

    copyGitUrl = () => {
        const git_url = document.querySelector('#gitUrlClipboard')
        let inputHidden = document.createElement('input')
        inputHidden.value = git_url.innerText
        document.body.appendChild(inputHidden)
        inputHidden.select();
        document.execCommand('copy');
        document.body.removeChild(inputHidden);
        this.setState({
            copied: true
        })
    }

    render() {
        const { name, owner: { avatar_url }, full_name, description, html_url, git_url, stargazers_count, forks_count, open_issues_count } = this.props.repo
        return(
            <React.Fragment>
                <Dialog width={800} shouldCloseOnEscapePress={true} hasHeader={false} hasFooter={false} hasCancel={false} isShown={this.state.showModal}  onCloseComplete={() => this.setState({ showModal: false })}>
                    <div className="dialog-container">
                        <h3 className="repo-name"><img className="repo-avatar" src={avatar_url} alt='User Avatar' />{full_name}</h3>
                        <p className="repo-description">{description}</p>
                        <span id="gitUrlClipboard" className="repo-git_url">{git_url} </span>
                        <span className="copy-clipboard"><a href={git_url} onClick={this.copyGitUrl}><Icon icon="clipboard" marginLeft={12} style={{marginTop: '10px', position: 'relative', top: '0'}} color="muted" /> {this.state.copied ? 'Copied!' : 'Copy'}</a></span>
                        <ul className="repo-stats">
                            <li className="repo-stat">
                                <span><Icon icon="star" color="muted" /> {stargazers_count} stars</span>
                            </li>
                            <li className="repo-stat">
                                <span><Icon icon="fork" color="muted" />  {forks_count} forks</span>
                            </li>
                            <li className="repo-stat">
                                <span><Icon icon="issue-closed" color="muted" />  {open_issues_count} open issues</span>
                            </li>
                        </ul>
                        <a className="repo-link" target="_blank" rel="noopener noreferrer" href={html_url}>GitHub repository</a>
                    </div>
                </Dialog>
                <li className="repo-item" onClick={this.showModal}>
                    <h3 className="repo-name">{name}</h3>
                    <p className="repo-description">{description}</p>
                </li>
            </React.Fragment>
        ) 
        
    }
}
