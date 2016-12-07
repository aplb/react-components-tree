// @flow
import React, { Component } from 'react'
import { tree } from 'd3-state-visualizer'
import { ReactTree } from './types'

type Props = {
    data?: ReactTree,
}

const container = {
    width: '100%',
    height: '100%',
}

const defaultOptions = {
    heightBetweenNodesCoeff: 1.5,
    widthBetweenNodesCoeff: 1,
    tooltipOptions: {
        offset: { left: 30, top: 10 },
        indentationSize: 2,
    },
    style: {
        width: '100%',
        height: '100%',
        node: {
            colors: {
                'default': '#A1C659',
                collapsed: '#A1C659',
                parent: '#D381C3',
            },
            radius: 7,
        },
        text: {
            colors: {
                'default': '#6FB3D2',
                hover: '#FFFFFF',
            },
        },
    },
}

export default class Chart extends Component {
    props: Props
    renderChart: (element: HTMLElement, options: {tree: ReactTree}) => void
    node: HTMLElement

    componentDidMount(){
        this.renderChart = tree(
            this.node,
            { ...defaultOptions, tree: this.props.data }
        )

        this.renderChart()
    }

    getRef = (node: HTMLElement) => {
        this.node = node
    }

    render(){
        return (
            <div style = {container} ref = {this.getRef} />
        )
    }
}

