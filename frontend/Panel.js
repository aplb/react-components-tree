// @flow
import React, { Component } from 'react'
import Chart from './Chart'
import { ReactTree } from './types'

export type Props = {
    checkForReact: (done: (pageHasReact: boolean) => void) => void,
    inject: () => void,
    data?: ReactTree,
}

type State = {
    isReact: boolean
}

const style = {
    height: '1800px',
    width: '1800px',
    display: 'flex',
    minWidth: '0px',
    background: '#2A2F3A',
    color: '#FFFFFF',
}

export default class Panel extends Component {
    props: Props;
    state: State

    state = {
        isReact: false,
    }

    componentDidMount(){
        this.lookForReact()
    }

    lookForReact(){
        const { checkForReact, inject } = this.props
        if(typeof checkForReact !== 'function'){
            return
        }

        checkForReact(hasReact => {
            this.setState({
                isReact: true,
            })

            inject()
        })
    }

    render(){
        const { data } = this.props
        const panelBody = data ? <Chart data = {data} /> : 'Building tree, please wait...'

        return (
            <div style={style}>
                {panelBody} 
            </div>
        )
    }
}
